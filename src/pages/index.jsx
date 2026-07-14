/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/home/hero';
import Highlights from 'components/pages/home/highlights';
import DeployCta from 'components/pages/home/deploy-cta';
import CommunityCta from 'components/pages/home/community-cta';
import SEO from 'components/shared/seo';
import MainLayout from 'layouts/main';

const IndexPage = () => (
  <MainLayout>
    <Hero />
    <Highlights />
    <DeployCta />
    <CommunityCta />
  </MainLayout>
);

export default IndexPage;

export const Head = ({ location: { pathname } }) => <SEO slug={pathname} />;
