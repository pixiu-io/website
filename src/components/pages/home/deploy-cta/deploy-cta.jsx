import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const DeployCta = () => (
  <section className="py-10 md:py-20 lg:py-28 bg-gray-4 dark:bg-gray-900">
    <Container>
      <div className="mx-auto max-w-3xl text-center">
        <Heading className="dark:text-gray-3 text-black" tag="h2">
          快速开始
        </Heading>
        <p className="mt-5 text-base text-gray-1 dark:text-gray-2 md:text-lg">
          一个容器完成全部功能，支持 HTTPS 与 HTTP；支持任意版本 Kubernetes 页面化部署。
          按照部署手册私有化安装，几步即可拥有属于你的容器平台。
        </p>
        <ol className="mx-auto mt-8 max-w-xl space-y-4 text-left">
          <li className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              1
            </span>
            <span className="text-gray-1 dark:text-gray-2">准备一个 Kubernetes 集群（任意版本均可）。</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              2
            </span>
            <span className="text-gray-1 dark:text-gray-2">参考部署手册完成私有化安装，一个容器干遍所有功能。</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              3
            </span>
            <span className="text-gray-1 dark:text-gray-2">打开页面，点一点即可部署你的第一个应用。</span>
          </li>
        </ol>
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
);

export default DeployCta;
