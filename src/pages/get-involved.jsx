/* eslint-disable react/prop-types */
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import SEO from 'components/shared/seo';
import MainLayout from 'layouts/main';
import { getInvolved as seo } from 'utils/seo-metadata';

const repo = 'https://github.com/caoyingjunz/pixiu';

const channels = [
  {
    title: 'GitHub',
    desc: '在 GitHub 上 Star、Fork 或提交 Issue，参与 Pixiu 2.0 的开发。',
    href: repo,
  },
  {
    title: '部署手册',
    desc: '按官方部署手册私有化安装，快速体验完整能力。',
    href: `${repo}/blob/master/install.md`,
  },
  {
    title: '技术指导',
    desc: '加入社区，我们会提供一对一的技术指导与交流。',
    href: repo,
  },
];

const GetInvolved = () => (
  <MainLayout>
    <section className="pt-10 pb-10 md:pt-16 md:pb-20 lg:pt-28 lg:pb-32 bg-gray-4 dark:bg-gray-900">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading className="dark:text-gray-3 text-black" tag="h1" size="lg">
            加入 Pixiu 2.0 社区
          </Heading>
          <p className="mt-5 text-base text-gray-1 dark:text-gray-2 md:text-lg">
            期待你的一键三连（Star + Fork + Follow）！无论你是使用者还是贡献者，都欢迎加入我们。
          </p>
          <div className="mt-8">
            <Button to={repo} target="_blank" rel="noopener noreferrer" theme="primary-1">
              前往 GitHub 一键三连
            </Button>
          </div>
        </div>
      </Container>
    </section>
    <section className="py-10 md:py-20 lg:py-28 bg-white dark:bg-[#0f1d3e]">
      <Container>
        <Heading className="text-center dark:text-gray-3 text-black" tag="h2">
          参与方式
        </Heading>
        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {channels.map(({ title, desc, href }) => (
            <li key={title}>
              <Link
                to={href}
                target="_blank"
                rel="noopener noreferrer"
                type="text"
                className="block rounded-2xl border border-gray-3 bg-white p-6 text-center shadow-card transition-colors hover:border-blue-500 dark:bg-gray-2"
              >
                <h3 className="text-xl font-bold text-black dark:text-white">{title}</h3>
                <p className="mt-3 text-sm text-gray-1 dark:text-gray-2">{desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  </MainLayout>
);

export default GetInvolved;

export const Head = ({ location: { pathname } }) => {
  const pageMetadata = { ...seo, slug: pathname };
  return <SEO data={pageMetadata} />;
};
