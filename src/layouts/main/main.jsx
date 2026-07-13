import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import useDarkMode from 'hooks/use-dark-mode';
import useToggleTheme from 'hooks/use-toggle-theme';
import DarkThemeIcon from 'icons/moon.inline.svg';
import LightThemeIcon from 'icons/sun.inline.svg';

const MainLayout = ({ children, headerWithSearch, footerWithTopBorder }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = useToggleTheme();
  const { isDarkMode, isReady } = useDarkMode();

  if (!isReady) {
    return null;
  }

  const navigation = [
    { name: '首页', href: '/' },
    { name: '特性', href: '/#features' },
    { name: '部署', href: '/get-started' },
    { name: '博客', href: 'https://docs.cloud.pixiuio.com/', target: '_blank' },
    { name: '社区', href: '/get-involved' },
    {
      name: isDarkMode ? LightThemeIcon : DarkThemeIcon,
      isThemeToggle: true,
      onClick: toggleTheme,
    },
  ];

  const handleCloseClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleOverlay = () => setIsMobileMenuOpen(false);

  return (
    <div className="bg-gray-4 dark:bg-gray-900">
      {/* Skip to main content — WCAG 2.1 SC 2.4.1 (Bypass Blocks) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary-1 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <div className="sticky top-0 z-50 w-full">
      <Header
        navigation={navigation}
        withSearch={headerWithSearch}
        isMobileMenuOpen={isMobileMenuOpen}
        handleOverlay={handleOverlay}
        handleCloseClick={handleCloseClick}
      />
      </div>
      <main id="main-content" className="transition-colors duration-200">{children}</main>
      <Footer withTopBorder={footerWithTopBorder} />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  headerWithSearch: PropTypes.bool,
  footerWithTopBorder: PropTypes.bool,
};

MainLayout.defaultProps = {
  headerWithSearch: false,
  footerWithTopBorder: false,
};

export default MainLayout;
