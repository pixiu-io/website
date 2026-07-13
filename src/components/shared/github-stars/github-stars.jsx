import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import GithubLogo from 'icons/github.inline.svg';

import Link from '../link';

// 把从 GitHub 拿到的 star 数字格式化展示：
// - 小于 1000 直接显示原始整数（如 591）
// - 大于等于 1000 显示为 k 形式（如 1.5k）
const formatStars = (value) => {
  const count = parseInt(`${value}`.replace(/,/g, ''), 10);
  if (Number.isNaN(count)) return value;
  if (count < 1000) return `${count}`;
  return `${(count / 1000).toFixed(1).replace(/\.0$/, '')}k`;
};

const GithubStars = ({ className }) => {
  const {
    githubStars: { githubStars },
  } = useStaticQuery(graphql`
    query githubQuery {
      githubStars {
        githubStars
      }
    }
  `);

  return (
    <div className={className}>
      <Link
        type="text"
        theme="black-primary"
        className="flex h-8 items-center rounded border border-gray-3 text-sm font-bold"
        to="https://github.com/caoyingjunz/pixiu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex h-full items-center space-x-1.5 border-r border-gray-3 px-2 lg:px-2 xs:px-3">
          <GithubLogo className="h-5 w-5" />
          <span className="dark:text-gray-2 text-black">Stars</span>
        </div>
        <div className="px-2 dark:text-gray-2 text-black lg:px-1 xs:px-3">
          <span>{formatStars(githubStars)}</span>
        </div>
      </Link>
    </div>
  );
};

export default GithubStars;

GithubStars.propTypes = {
  className: PropTypes.string,
};

GithubStars.defaultProps = {
  className: null,
};
