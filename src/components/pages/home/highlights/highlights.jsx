import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const title = '核心特性';

const features = [
  {
    title: '任意版本 Kubernetes 页面化部署',
    description: '点点点即可完成部署，简单高效，告别繁琐的命令行操作。',
  },
  {
    title: '公有云般丝滑的私有容器体验',
    description: '在自有环境中也能享受云原生带来的流畅操作体验。',
  },
  {
    title: '应用商店快速应用发布',
    description: '内置应用商店，一键发布常用应用，交付效率大幅提升。',
  },
  {
    title: '轻量级安装',
    description: '一个容器干遍所有功能，支持 HTTPS 与 HTTP，部署极简。',
  },
  {
    title: '多种业务日志查询',
    description: '集中查询与管理业务日志，定位问题更轻松。',
  },
  {
    title: '告警配置与实时指标',
    description: '完善的监控告警能力，随时掌握集群运行状态。',
  },
  {
    title: 'AI 助手（WIP）',
    description: '智能运维助手持续打磨中，让容器管理更聪明。',
  },
  {
    title: '好看又好用',
    description: '颜值能打，体验与美感兼得，运维也能很优雅。',
  },
];

const Highlights = () => (
  <section id="features" className="pt-10 md:pt-20 lg:pt-32 bg-white dark:bg-[#0f1d3e]">
    <Container>
      <Heading className="text-center dark:text-gray-3 text-black" tag="h2">
        {title}
      </Heading>
      <p className="mx-auto mt-4 max-w-3xl text-center text-base text-gray-1 dark:text-gray-2 md:text-lg">
        Pixiu 2.0 Beta 镜像已发布，基于 AI 开发，提供一站式容器解决方案。
      </p>
      <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, description }) => (
          <li
            key={title}
            className="rounded-2xl border border-gray-3 bg-white p-6 shadow-card transition-colors hover:border-blue-500 dark:bg-gray-2"
          >
            <h3 className="text-lg font-bold text-black dark:text-white">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-1 dark:text-gray-2">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default Highlights;
