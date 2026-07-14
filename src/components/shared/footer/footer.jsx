import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import useDarkMode from 'hooks/use-dark-mode';
import DarkLogo from 'images/logo.inline.svg';
import LightLogo from 'images/white-logo.inline.svg';

const navigation = [
  [
    { name: '首页', href: '/' },
    { name: '特性', href: '/#features' },
  ],
  [
    { name: '部署手册', href: 'https://github.com/caoyingjunz/pixiu/blob/master/install.md', target: '_blank' },
    { name: 'GitHub 仓库', href: 'https://github.com/caoyingjunz/pixiu', target: '_blank' },
  ],
  [
    { name: '博客', href: 'https://docs.cloud.pixiuio.com/', target: '_blank' },
    { name: '社区', href: '/get-involved' },
  ],
];

const Footer = ({ withTopBorder }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <footer
      className={`bg-white dark:bg-[#0f1d3e] ${withTopBorder ? 'border-t border-gray-3 dark:border-gray-1' : null}`}
    >
      <Container className="pt-10 pb-8 lg:pt-14 lg:pb-9">
        <div className="grid grid-cols-3 gap-y-10 xs:gap-x-8 lg:grid-cols-12 lg:gap-y-0">
          <div className="col-span-full flex flex-col items-start xs:col-span-5">
            <Link to="/">
              <span className="sr-only">Pixiu</span>
              <div className="col-span-1 lg:col-span-1">
                {isDarkMode ? <LightLogo /> : <DarkLogo />}
              </div>
            </Link>
            <span className="with-link-primary-medium mt-6 text-sm leading-none text-black dark:text-gray-2">
              Pixiu 2.0 是基于 AI 开发的一站式容器平台
            </span>
          </div>
          <div className="col-span-7 grid grid-cols-1 gap-x-8 gap-y-10 xs:grid-cols-2 sm:grid-cols-3 lg:pt-4">
            {navigation.map((menu, index) => (
              <ul className="flex flex-col space-y-6" key={index}>
                {menu.map(({ name, href, target }) => (
                  <li className="inline leading-none" key={name}>
                    <Link
                      className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                      type="text"
                      to={href}
                      target={target || null}
                      rel={target ? 'noopener noreferrer' : null}
                    >
                      {name}
                      {target && (
                        <span className="sr-only"> (opens in new tab)</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="with-link-primary-light mt-8 space-y-3 border-t border-gray-3 dark:border-gray-600 pt-8 text-sm text-gray-1 dark:text-gray-2 dark:bg-[#0f1d3e] md:mt-10 lg:mt-12">
          <p>© {new Date().getFullYear()} Pixiu 2.0 团队。保留所有权利。</p>
          <p>
            Pixiu 2.0 自研容器平台 · 致力于在私有环境中提供公有云般的丝滑体验。
          </p>
          <p>
            项目地址：
            <a
              href="https://github.com/caoyingjunz/pixiu"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/caoyingjunz/pixiu
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  withTopBorder: PropTypes.bool,
};

Footer.defaultProps = {
  withTopBorder: false,
};

export default Footer;
