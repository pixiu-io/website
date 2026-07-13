import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const repo = 'https://github.com/caoyingjunz/pixiu';

const items = [
  { label: 'Star', desc: '为项目点亮一颗星，给我们更多动力。', href: repo },
  { label: 'Fork', desc: 'Fork 仓库，基于 Pixiu 2.0 自由扩展。', href: `${repo}/fork` },
  { label: 'Follow', desc: '关注仓库，第一时间获取更新。', href: repo },
];

const CommunityCta = () => (
  <section className="py-10 md:py-20 lg:py-28 bg-white dark:bg-[#0f1d3e]">
    <Container>
      <div className="mx-auto max-w-3xl text-center">
        <Heading className="dark:text-gray-3 text-black" tag="h2">
          加入社区
        </Heading>
        <p className="mt-5 text-base text-gray-1 dark:text-gray-2 md:text-lg">
          期待你的一键三连（Star + Fork + Follow）！欢迎加入社区，我们会提供技术指导。
        </p>
      </div>
      <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
        {items.map(({ label, desc, href }) => (
          <li key={label}>
            <Link
              to={href}
              target="_blank"
              rel="noopener noreferrer"
              type="text"
              className="block rounded-2xl border border-gray-3 bg-white p-6 text-center shadow-card transition-colors hover:border-blue-500 dark:bg-gray-2"
            >
              <h3 className="text-xl font-bold text-black dark:text-white">{label}</h3>
              <p className="mt-3 text-sm text-gray-1 dark:text-gray-2">{desc}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-10 text-center">
        <Button to={repo} target="_blank" rel="noopener noreferrer" theme="primary-1">
          前往 GitHub 一键三连
        </Button>
      </div>
    </Container>
  </section>
);

export default CommunityCta;
