# Pixiu 2.0 官网部署指南

本站是 **Gatsby 5** 静态站点，构建产物在 `public/`。部署方式二选一：
**方案 A（推荐）：Docker 多阶段构建 + Nginx**，自包含、丢任何 Linux 服务器都能跑；
**方案 B：裸 Nginx 托管** `public/` 静态目录，服务器已有 Nginx 时用。

---

## 方案 A：Docker（推荐）

### 1. 构建镜像

```bash
# 本地预览（域名用默认 localhost）
docker build -t pixiu-web .

# 生产：把域名换成你的正式域名（canonical / sitemap 才会正确）
docker build -t pixiu-web --build-arg SITE_URL=https://your-domain.com .
```

### 2. 运行容器

```bash
docker run -d --name pixiu-web -p 80:80 --restart unless-stopped pixiu-web
```

浏览器访问 `http://<服务器IP>` 即可。

### 3. 或用 docker-compose（更省事）

先编辑 `docker-compose.yml` 里的 `SITE_URL`，再：

```bash
docker compose up -d --build
```

更新时：`docker compose up -d --build` 重新构建即可。

---

## 方案 B：裸 Nginx 托管静态产物

适合服务器上已经装了 Nginx 的情况，**本地不需要 Docker**。

### 1. 本地构建产物

```bash
export NODE_OPTIONS=--max-old-space-size=8192
npm install
GATSBY_DEFAULT_SITE_URL=https://your-domain.com npm run build   # 生成 public/
```

### 2. 把 public/ 传到服务器

```bash
rsync -avz --delete public/ user@<服务器IP>:/var/www/pixiu/public/
```

### 3. 服务器 Nginx 配置

把仓库里的 `nginx.conf` 内容放到 `/etc/nginx/conf.d/pixiu.conf`（或合并进你的 `nginx.conf`），
把 `root` 指向 `/var/www/pixiu/public`，然后：

```bash
sudo nginx -t && sudo systemctl reload nginx
```

> 仓库里的 `nginx.conf` 已写好：gzip 压缩、带 hash 静态资源长缓存、Gatsby 路由回退到 `404.html`。

---

## HTTPS（生产必做）

域名解析到服务器后，一条命令申请免费证书：

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

Certbot 会自动改 Nginx 配置并续期。Docker 方案则建议在宿主机用 `certbot` 申证书，
再把 80/443 反向代理到容器，或在容器前挂一层 Caddy/Traefik。

---

## 注意事项

- **构建内存**：站点较大，`gatsby build` 需要 `NODE_OPTIONS=--max-old-space-size=8192`，
  Dockerfile 已内置，裸部署时别忘了 export。
- **Node 版本**：构建期用 Node 18+（本仓库 `.nvmrc` 为 18，本地验证 22 可用）。
- **`.env` 不进镜像**：Algolia 等密钥为空且已被 gitignore，`.dockerignore` 已排除。
- **博客外链**：导航/404 的「博客」已指向 `https://docs.cloud.pixiuio.com/`，`/blog` 整页也会客户端跳转，部署后行为一致。
- **Star 数**：已写死真实值 `591`（来源 `caoyingjunz/pixiu`），构建时联网取不到也有兜底。
