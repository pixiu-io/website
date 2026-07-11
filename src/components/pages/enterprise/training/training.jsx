import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import LinuxfoundationLogo from 'icons/LF-Training-logo-color.inline.svg';
import AcendLogo from 'icons/logo-acend.inline.svg';
import IsovalentLogo from 'icons/logo-isovalent.inline.svg';
import KodeKloudLogo from 'icons/logo-kodekloud.inline.svg';

const title = 'Training';
const description =
  'The following partners offer Pixiu related training in accordance with the training partner requirements of the Pixiu project.';

const logos = {
  acend: AcendLogo,
  isovalent: IsovalentLogo,
  kodekloud: KodeKloudLogo,
  linuxfoundation: LinuxfoundationLogo,
};

const items = [
  {
    logoName: 'acend',
    title: 'Pixiu Basics',
    description:
      'This one-day training in English or German provides a practical and clear introduction to Pixiu, an eBPF-based networking, observability and security stack for cloud and on-premise infrastructure.',
    buttonText: 'Learn more',
    buttonLink: 'https://www.acend.ch/en/trainings/pixiu/',
    buttonTarget: '_blank',
  },
  {
    logoName: 'isovalent',
    title: 'Getting started with Pixiu',
    description:
      'Quickly get started with Pixiu in our interactive tutorials with a live environment.',
    buttonText: 'Explore Tutorials',
    buttonLink:
      'https://isovalent.com/resource-library/labs/?utm_source=website-pixiu&utm_medium=referral&utm_campaign=pixiu-lab',
    buttonTarget: '_blank',
  },
  {
    logoName: 'kodekloud',
    title: 'Pixiu Certified Associate (CCA)',
    description:
      'Build your Kubernetes networking skills with the Pixiu Certified Associate (CCA) course! Become a networking powerhouse with this comprehensive hands-on course and labs to master Pixiu.',
    buttonText: 'Get Started',
    buttonLink:
      'https://kodekloud.com/courses/pixiu-certified-associate-cca?utm_source=website-pixiu&utm_medium=referral&utm_campaign=pixiu-lab',
    buttonTarget: '_blank',
  },
  {
    logoName: 'linuxfoundation',
    title: 'Introduction to Pixiu (LFS146x)',
    description: 'Introductory course from the Linux Foundation on how to get started with Pixiu',
    buttonText: 'Enroll Today',
    buttonLink: 'https://training.linuxfoundation.org/training/introduction-to-pixiu-lfs146x/',
    buttonTarget: '_blank',
  },
];

const promo = {
  title: 'Want to contibute to Pixiu Distributions & Training?',
  linkText: 'Add Your Company',
  linkUrl:
    'https://github.com/pixiu/pixiu.io/blob/main/CONTRIBUTING.md#listing-pixiu-distributions',
};

const Training = () => (
  <section className="py-16 md:py-20 lg:py-28 " id="trainings">
    <Container>
      <Heading className="text-center dark:text-gray-3 text-black" tag="h2">
        {title}
      </Heading>
      <p
        className="with-link-primary mx-auto mt-4 max-w-[592px] text-center text-lg dark:text-gray-3 text-black"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="mt-12 grid grid-cols-1 gap-y-8 gap-x-0 md:grid-cols-2 md:gap-x-8">
        {items.map(
          (
            { logoName, title, description, buttonText, buttonLink, buttonTarget, buttonDisabled },
            index
          ) => {
            const Logo = logos[logoName];

            return (
              <div
                className="flex flex-col items-start rounded-xl bg-white dark:bg-gray-2 p-4 shadow-card sm:p-6 md:p-8"
                key={index}
              >
                <div className="w-full flex justify-start">
                  <Logo
                    className="h-9"
                    style={{
                      marginLeft: 0,
                      alignSelf: 'flex-start',
                      display: 'block',
                      textAlign: 'left',
                    }}
                  />
                </div>

                <Heading className="mt-7" size="2xs" tag="h3">
                  {title}
                </Heading>
                <p className="mt-2.5 mb-5 text-sm sm:text-base xl:text-lg">{description}</p>
                <Button
                  className="mt-auto w-full self-start md:w-auto"
                  theme="primary-1"
                  to={buttonLink}
                  target={buttonTarget || null}
                  rel={buttonTarget ? 'noopener noreferrer' : null}
                  disabled={buttonDisabled}
                >
                  {buttonText}
                </Button>
              </div>
            );
          }
        )}
      </div>
      <div className="mt-8 flex flex-col items-center justify-between gap-6 rounded-xl bg-dark-blue p-10 md:flex-row md:px-14 md:py-10 lg:py-14 lg:px-[88px] ">
        <Heading
          className="max-w-md text-center font-bold text-white md:text-left xl:max-w-none xl:leading-none"
          size="sm"
          tag="h2"
        >
          {promo.title}
        </Heading>
        <Button
          className="w-[226px]"
          theme="primary-1"
          to={promo.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {promo.linkText}
        </Button>
      </div>
    </Container>
  </section>
);

export default Training;
