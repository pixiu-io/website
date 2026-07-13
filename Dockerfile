# syntax=docker/dockerfile:1

# ============================================================
# 阶段 1：构建期 —— 用 Node 把 Gatsby 站点编译成静态产物 public/
# ============================================================
FROM node:22-slim AS builder
WORKDIR /app

# sharp 等原生模块在 Debian slim 上可能需要编译工具
RUN apt-get update \
    && apt-get install -y --no-install-recommends build-essential python3 \
    && rm -rf /var/lib/apt/lists/*

# 先拷依赖清单，利用 Docker 层缓存（改源码不重装依赖）
COPY package.json package-lock.json ./
RUN npm ci

# 再拷全部源码
COPY . .

# 构建时需要调大内存，否则大站点可能 OOM
ENV NODE_OPTIONS=--max-old-space-size=8192

# 站点域名：用于 canonical / sitemap / 绝对链接。
# 构建时通过 --build-arg SITE_URL=https://your-domain.com 传入；
# 不传则默认 http://localhost（本地预览够用）。
ARG SITE_URL=http://localhost
ENV GATSBY_DEFAULT_SITE_URL=$SITE_URL

RUN npm run build

# ============================================================
# 阶段 2：运行期 —— 只拷静态文件，用 Nginx 托管，镜像极小且无需 Node
# ============================================================
FROM nginx:1.27-alpine AS runner

# 覆盖默认配置：支持 SPA 路由回退 + 静态资源长缓存 + gzip
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 拷贝 Gatsby 构建产物
COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 80

# 健康检查：能取到首页即视为健康
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
    CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
