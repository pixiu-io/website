/* eslint-disable react/prop-types */
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import SEO from 'components/shared/seo';
import MainLayout from 'layouts/main';
import { learn as seo } from 'utils/seo-metadata';

const hero = {
  title: '部署 Pixiu 2.0',
  description:
    'Pixiu 2.0 提供轻量级、页面化的私有化容器平台。一个容器干遍所有功能，支持 HTTPS 与 HTTP，支持任意版本 Kubernetes 页面化部署。',
};

const steps = [
  {
    title: '准备 Kubernetes 集群',
    desc: '任意版本的 K8s 集群均可，页面化部署，无需繁琐命令。',
  },
  {
    title: '按部署手册安装',
    desc: '参考官方部署手册完成私有化安装，一个容器即可运行全部功能。',
  },
  {
    title: '页面化部署应用',
    desc: '打开控制台，点一点即可完成应用部署、日志查询与监控告警。',
  },
];

const GetStarted = () => (
  <MainLayout>
    <section className="pt-10 pb-10 md:pt-16 md:pb-20 lg:pt-28 lg:pb-32 bg-gray-4 dark:bg-gray-900">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading className="dark:text-gray-3 text-black" tag="h1" size="lg">
            {hero.title}
          </Heading>
          <p className="mt-5 text-base text-gray-1 dark:text-gray-2 md:text-lg">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 xs:flex-row">
            <Button
              to="https://github.com/caoyingjunz/pixiu/blob/master/install.md"
              target="_blank"
              rel="noopener noreferrer"
              theme="primary-1"
            >
              查看部署手册
            </Button>
            <Button
              to="https://github.com/caoyingjunz/pixiu"
              target="_blank"
              rel="noopener noreferrer"
              theme="outline-gray-dark"
              className="bg-white"
            >
              GitHub 仓库
            </Button>
          </div>
        </div>
      </Container>
    </section>
    <section className="py-10 md:py-20 lg:py-28 bg-white dark:bg-[#0f1d3e]">
      <Container>
        <Heading className="text-center dark:text-gray-3 text-black" tag="h2">
          部署步骤
        </Heading>
        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map(({ title, desc }) => (
            <li
              key={title}
              className="rounded-2xl border border-gray-3 bg-white p-6 shadow-card dark:bg-gray-2"
            >
              <h3 className="text-lg font-bold text-black dark:text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-1 dark:text-gray-2">{desc}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  </MainLayout>
);

export default GetStarted;

export const Head = ({ location: { pathname } }) => {
  const pageMetadata = { ...seo, slug: pathname };
  return <SEO data={pageMetadata} />;
};
