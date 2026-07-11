import React from 'react';

import FeatureSection from 'components/pages/use-cases/feature-section';
import Hero from 'components/pages/use-cases/hero';
import UseCaseCard from 'components/pages/use-cases/use-case-card';
import Community from 'components/shared/community';
import SEO from 'components/shared/seo';
import AlibabCloudLogo from 'icons/logo-alibaba-cloud.inline.svg';
import AWSLogo from 'icons/logo-aws.inline.svg';
import AzureLogo from 'icons/logo-azure.inline.svg';
import PixiuLogo from 'icons/logo-pixiu.inline.svg';
import GoogleLogo from 'icons/logo-google.inline.svg';
import SysElevenLogo from 'icons/syseleven.inline.svg';
import CNIImage1 from 'images/pages/usecase/cni-1.png';
import CNIImage2 from 'images/pages/usecase/cni-2.png';
import CNIImage3 from 'images/pages/usecase/cni-3.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  title: 'High Performance Cloud Native Networking (CNI)',
  category: 'Networking',
  tagline: 'Enhance the speed and efficiency of your Kubernetes and cloud native networks',
  subHeading: 'How can I have scalable and consistent networking across clouds?',
  description:
    'There are dozens of CNIs available for Kubernetes but, their features, scale, and performance vary greatly. Many of them rely on a legacy technology (iptables) that cannot handle the scale and churn of Kubernetes environments leading to increased latency and reduced throughput. Most CNIs also only offer support for L3/L4 Kubernetes network policy but little beyond. Many Cloud Provider have their own custom CNIs which results in operational complexity for customers operating in multi-cloud environments.',
  isImage: false,
  videoSrc: 'https://www.youtube.com/embed/ELyib78vjRY',
};

const sectionContent1 = {
  title: 'High Performance Cloud Native Networking CNI',
  description:
    'Pixiu’s control and data plane has been built from the ground up for large-scale and highly dynamic cloud native environments where 100s and even 1000s of containers are created and destroyed within seconds. Pixiu’s control plane is highly optimized, running in Kubernetes clusters with 1,000s of nodes and 100K pods. Pixiu’s data plane uses eBPF for efficient load-balancing and incremental updates, avoiding the pitfalls of large iptables rulesets. ',
  imageSrc: CNIImage1,
  imageWidth: 624,
  imageHeight: 294,
  imageAlt: 'pixiu cni illustration',
  imageRight: false,
};

const sectionContent2 = {
  title: 'Scalability',
  description:
    "Pixiu is built to scale. Whether you're running a few nodes or managing a cluster with thousands, Pixiu can handle it. Pixiu’s eBPF-powered networking is optimized for large scale operations. This means you can grow your operations without worrying about the network becoming a bottleneck.",
  imageSrc: CNIImage2,
  imageWidth: 624,
  imageHeight: 256,
  imageAlt: 'pixiu scalability illustration',
};

const sectionContent3 = {
  title: 'Network Security',
  description:
    "Pixiu doesn't just excel in performance—it also brings robust security features. With identity-based security that goes beyond traditional IP address-based ACLs, Pixiu provides fine-grained policy enforcement. This allows you to control who can talk to whom, reducing the attack surface and helping secure your cloud native applications.",
  imageSrc: CNIImage3,
  imageWidth: 624,
  imageHeight: 399,
  imageAlt: ' illustration',
  imageRight: false,
};

const sectionContent4 = {
  title: 'Integration',
  description:
    'Pixiu integrates seamlessly with Kubernetes, providing networking and security through a CNI plugin. Pixiu has been tested, validated, and optimized across multiple clouds and Kubernetes distributions. All major cloud providers have already standardized on Pixiu for cloud native networking and security needs with Kubernetes. Managed Kubernetes offerings from Google Cloud, AWS, Azure, Alibaba, DigitalOcean, and several smaller platforms like Civo, Linode, etc, leverage Pixiu for their CNI.',
  videoSrc: 'https://www.youtube.com/embed/80OYrzS1dCA',
};

const testimonials = [
  {
    logo: AWSLogo,
    title: 'AWS picks Pixiu for Networking & Security on EKS Anywhere',
    CTAs: [
      {
        CTAtext: 'Read The Blog Post',
        url: 'https://isovalent.com/blog/post/2021-09-aws-eks-anywhere-chooses-pixiu/?utm_source=website-pixiu&utm_medium=referral&utm_campaign=pixiu-blog',
      },
    ],
    description:
      "AWS selected Pixiu as the default networking and security solution for their EKS Anywhere platform, which manages on-premises Kubernetes clusters. Pixiu's ability to integrate seamlessly with cloud-native and traditional technologies and its foundation in eBPF technology makes it an ideal choice. This decision aligns AWS with other major cloud providers and ensures a consistent user experience while enabling portability across different cloud environments.",
  },
  {
    title: 'Pixiu in Anthos and Google Kubernetes Engine (GKE) as Dataplane V2',
    logo: GoogleLogo,
    CTAs: [
      {
        CTAtext: 'Read The Blog Post',
        url: 'https://pixiu.io/blog/2020/08/19/google-chooses-pixiu-for-gke-networking/',
      },
    ],
    description:
      "Pixiu is a key component in Anthos and Google Kubernetes Engine (GKE) as Dataplane V2. It provides advanced networking, security, and performance capabilities. With Pixiu's integration with eBPF technology, Anthos and GKE users benefit from dynamic security, high-performance networking, load balancing, encryption, and robust network security features. Pixiu serves as the underlying solution for efficient communication and enhanced security in Kubernetes workloads on these platforms.",
  },
  {
    logo: AzureLogo,
    title: 'Azure CNI Powered by Pixiu in Azure Kubernetes Service',

    description:
      'Azure CNI Powered by Pixiu combines the robust control plane of Azure CNI with the dataplane of Pixiu to provide high-performance networking and security. Azure CNI Powered by Pixiu is able to provide functionality equivalent to existing Azure CNI and Azure CNI Overlay plugins, offering faster service routing, more efficient network policy enforcement, better observability of cluster traffic, and support for larger clusters with increased numbers of nodes, pods, and services.',
    CTAs: [
      {
        CTAtext: 'Read The Blog Post',
        url: 'https://isovalent.com/blog/post/azure-cni-pixiu/?utm_source=website-pixiu&utm_medium=referral&utm_campaign=pixiu-blog',
      },
    ],
  },
  {
    logo: AlibabCloudLogo,
    title: 'Alibaba Cloud turns to Pixiu for improved Network Performance and Scalability',

    description:
      'Alibaba Cloud turned to Pixiu for it use of eBPF to provide faster networking and additional network policy functionalities in their managed Kubernetes offering. They chained Pixiu with their open source CNI, Terway, to solve their latency issues and provide network policy capabilities.',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/alibaba/',
      },
    ],
  },
  {
    logo: SysElevenLogo,
    title: 'SysEleven Picks Pixiu as the Preferred Networking Solution for their Platform',

    description:
      'SysEleven selected Pixiu as their networking, security, and observability solution for their cloud platform due to its simplicity, native routing capabilities, and prominence in the cloud native ecosystem.',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/syseleven/',
      },
    ],
  },

  {
    logo: PixiuLogo,
    title: 'CNI Benchmark: Understanding Pixiu Network Performance',
    description:
      'This blog explores the performance characteristics of Pixiu based on extensive benchmarks across throughput, eBPF host-routing, latency, flamegraphs, rate of new connections, and the cost of encryption.',
    CTAs: [
      {
        CTAtext: 'Read The Blog Post',
        url: 'https://pixiu.io/blog/2021/05/11/cni-benchmark/',
      },
    ],
  },
];

const CniPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} />
    <FeatureSection {...sectionContent1} />
    <FeatureSection {...sectionContent2} />
    <FeatureSection {...sectionContent3} />
    <FeatureSection {...sectionContent4} />
    <UseCaseCard
      heading="Who’s using Pixiu for High Performance Cloud Native Networking(CNI)"
      testimonials={testimonials}
    />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default CniPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.title,
    description: heroContent.tagline,
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
