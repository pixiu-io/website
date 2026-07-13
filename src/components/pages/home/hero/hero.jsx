import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import illustration from './images/hero-illustration.svg';

const title = 'Pixiu 2.0 自研容器平台';
const description =
  '基于 AI 开发的一站式容器解决方案，致力于在私有环境中提供<b>公有云般的丝滑体验</b>。支持任意版本 Kubernetes 页面化部署、应用商店一键发布、轻量级安装与完善的监控告警。';

const Hero = () => (
  <section className="overflow-hidden bg-gray-4 dark:bg-gray-900 pt-5 pb-0 md:pt-16 md:pb-20 lg:pt-28 lg:pb-36">
    <Container className="grid grid-cols-12 md:gap-x-8">
      <div className="relative z-10 col-span-full lg:col-span-6 2xl:col-span-7">
        <Heading className="dark:text-[#579dd6]" tag="h1" size="lg" asHTML>
          {title}
        </Heading>
        <div
          className="with-link-primary dark:text-[#579dd6] text-black mt-5 space-y-5 md:text-lg lg:max-w-[488px]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="mt-7 flex xs:flex-row xs:gap-[18px] flex-col gap-3">
          <Button
            className="!pt-[18px]"
            to="https://github.com/caoyingjunz/pixiu/blob/master/install.md"
            target="_blank"
            rel="noopener noreferrer"
            theme="primary-1"
          >
            查看部署手册
          </Button>
          <Button
            className="bg-white"
            to="https://github.com/caoyingjunz/pixiu"
            target="_blank"
            rel="noopener noreferrer"
            theme="outline-gray-dark"
          >
            GitHub 仓库
          </Button>
        </div>
      </div>
      <div className="relative col-span-full mt-5 flex justify-center lg:col-span-6 lg:mt-0 2xl:col-span-5 2xl:-ml-8">
        <img
          className="top-0 h-full w-full max-w-[512px] lg:absolute lg:-right-16 lg:h-auto lg:w-[580px] lg:max-w-max xl:-top-[74px] xl:-right-16 xl:w-max"
          src={illustration}
          alt={title}
          loading="eager"
          width={761}
          height={555}
        />
      </div>
    </Container>
  </section>
);

export default Hero;
