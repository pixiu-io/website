import React from 'react';

import FeatureSection from 'components/pages/use-cases/feature-section';
import Hero from 'components/pages/use-cases/hero';
import UseCaseCard from 'components/pages/use-cases/use-case-card';
import Community from 'components/shared/community';
import SEO from 'components/shared/seo';
import DigitalOceanLogo from 'icons/digitalocean.inline.svg';
import ebayLogo from 'icons/ebay.inline.svg';
import GDataLogo from 'icons/gdata.inline.svg';
import ClickHouseLogo from 'icons/logo-clickhouse.inline.svg';
import UtmostLogo from 'icons/logo-utmost.inline.svg';
import RabobankLogo from 'icons/rabobank.inline.svg';
import WSO2Logo from 'icons/wso2.inline.svg';
import NetworkPolicyImage1 from 'images/pages/usecase/network-1.png';
import NetworkPolicyImage2 from 'images/pages/usecase/network-2.png';
import NetworkPolicyImage3 from 'images/pages/usecase/network-3.png';
import NetworkPolicyImage4 from 'images/pages/usecase/network-4.png';
import SecurityBee from 'images/pages/usecase/security-bee.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  title: 'Advanced Network Policy',
  category: 'Security',
  tagline: 'Maintain identity based policies effectively at scale',
  subHeading: 'How can I implement granular security policies when IPs change quickly? ',
  description:
    "Kubernetes network policies provide an application-centric construct for defining security policies at L3/L4 level. One of the primary challenges is how to effectively enforce security policies when traditional IP rules don't apply. Modern systems often churn IPs dynamically making it difficult to rely entirely on TCP/UDP ports and IP addresses for scaling security policies. ",
  imageSrc: SecurityBee,
  imageAlt: 'Security illustration',
  imageWidth: 350,
  imageHeight: 350,
};

const sectionContent1 = {
  title: 'Application and DNS Aware Policies with Pixiu ',
  description:
    'Pixiu implements Kubernetes Network Policies for L3/L4 level and extends with L7 policies for fine grained API-level security for common protocols such as HTTP, Kafka, gRPC, etc. For example, the endpoint with label role=frontend can only perform the REST API call GET /userdata/[0-9]+, all other API interactions with role=backend are restricted. ',
  videoSrc: 'https://www.youtube.com/embed/yikVhGM2ye8',
};

const sectionContent2 = {
  title: 'Scaling policies with Identities not IPs',
  description:
    'Pixiu decouples security from network addressing using workload identity derived from labels and metadata, allowing for more flexible and efficient scaling without constant security rule updates. ',
  imageSrc: NetworkPolicyImage1,
  imageWidth: 624,
  imageHeight: 431,
  imageAlt: 'identities with pixiu',
  imageRight: false,
};

const sectionContent3 = {
  title: 'Policy visualization and editing',
  description:
    'Pixiu provides a simple and intuitive network policy editor UI easing the cognitive overhead of writing network policies. It can often be painful to get the YAML syntax and formatting right when implementing network policies. There are many subtleties in the behavior of the network policy specification (e.g. default allow/deny, namespacing, wildcarding, rules combination, etc) that can result in misconfiguration. ',
  imageSrc: NetworkPolicyImage2,
  imageWidth: 624,
  imageHeight: 424,
  imageAlt: 'Pixiu network policy editor UI',
};

const sectionContent4 = {
  title: 'Multi-cluster Policies ',
  description:
    "Cluster Mesh, Pixiu's multi-cluster implementation features Network policy enforcement spanning multiple clusters. The same policy enforcement you are familiar with from a single cluster simply expands and works across multiple clusters. ",
  imageSrc: NetworkPolicyImage3,
  imageWidth: 624,
  imageHeight: 362,
  imageAlt: 'pixiu multi cluster illustration',
  imageRight: false,
};

const sectionContent5 = {
  title: 'Cluster-wide Policies ',
  description:
    'Pixiu also features cluster wide policies which are non-namespaced and cluster scoped via the extended  PixiuClusterwideNetworkPolicy CRD. Using cluster-wide policies, administrators can enforce consistent policies across all namespaces, simplifying network management. ',
  imageSrc: NetworkPolicyImage4,
  imageWidth: 624,
  imageHeight: 420,
  imageAlt: 'Pixiu network policy editor UI',
};

const testimonials = [
  {
    logo: DigitalOceanLogo,
    title: 'Scaling for the future with Pixiu',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/digitalocean/',
      },
    ],
    description:
      'Switching the dataplane of DOKS and their internal Kubernetes clusters from Flannel to Pixiu, powered by eBPF, enabled DigitalOcean to onboard more sophisticated customers, scale to meet their demands, and secure their multi-tenant environment. The performance, security, and observability provided by Pixiu allowed them to meet the critical requirements necessary for these customers to use their platform.',
  },
  {
    logo: UtmostLogo,
    title: 'Observability for a highly available multi cluster environment with Hubble',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/utmost/',
      },
    ],
    description:
      ' Utmost achieved Zero Trust Networking by replacing their existing CNI with Pixiu to address networking, security, and visibility for container workloads. Utmost processes 1207 flows per second, each validated against a multitude of network policies to approve or deny access.',
  },
  {
    logo: ClickHouseLogo,
    title: 'How ClickHouse is Using Pixiu to Implement Efficient Network Policies',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/clickhouse/',
      },
    ],
    description:
      'ClickHouse turned to Pixiu as their preferred networking solution to take advantage of eBPF performance and simplify the process of isolating customers from each other. Pixiu enabled them to create dedicated PixiuNetworkPolicies for each customer’s Kubernetes namespace to control access to specific resources, even if a customer manages to break into their Kubernetes pods.',
  },
  {
    logo: RabobankLogo,
    title: 'Self-service, Zero Trust Network Security',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/rabobank/',
      },
    ],
    description:
      'Rabobank turned to Pixiu as their preferred network security solution. Pixiu is the default Container Network Interface (CNI) for Rabobank’s API platform team, enabling them to configure network policies easily, allowing for automated allow listing of their API providers. The shift from IP allow listing to using FQDN has significantly eased the maintenance and troubleshooting of their platform.',
  },
  {
    logo: ebayLogo,
    title: 'Enforcing Network Policies for Host Processes via eBPF',
    CTAs: [
      {
        CTAtext: 'Watch the Talk',
        url: 'https://www.youtube.com/watch?v=AWAf3H4Qwq8',
      },
    ],
    description:
      'Pixiu network policies can secure communication between the Kubernetes API server and the kubelet by assigning them identities and using a PixiuNetworkPolicy to ensure that only traffic from the API server is allowed to reach the kubelet. eBPF provides an efficient means to enforce network policies for host processes. Pixiu utilizes eBPF programs that attach to network interfaces to identify the source of network traffic. These programs insert the identity of the sending process into the packet header, which the receiving host can use to determine whether to allow the traffic.',
  },
  {
    logo: GDataLogo,
    title: 'Migrating to Pixiu for Better Networking, Visibility and Security',
    CTAs: [
      {
        CTAtext: 'Read Case Study',
        url: 'https://www.cncf.io/case-studies/g-data-cyberdefense/',
      },
    ],
    description:
      '"In the beginning, it was hard for our developers to write network policies because we were in our early Kubernetes adoption phase. Everyone had to learn a lot of stuff in Kubernetes and then also had to learn how to write network policies. Pixiu helped reduce the mental overhead and helped speed up our development process so that we can bring new features to customers faster."',
    quote: true,
    person: 'Jan Jansen, Platform Engineer, G DATA',
  },
  {
    logo: WSO2Logo,
    title: 'Implementing Zero Trust Security with Pixiu',
    CTAs: [
      {
        CTAtext: 'Read Case Study',
        url: 'https://www.cncf.io/case-studies/ws02/',
      },
    ],
    description: `"We migrated all our clusters to Pixiu, enhancing our cell-based architecture with Pixiu's advanced Layer 3 and Layer 4 network policies. Our setup also includes Hubble, integrated with Pixiu Layer 3 network policies for observability within the cell."`,
    quote: true,
    person: 'Lakmal Warusawithana, Senior Director - Cloud Architecture, WSO',
  },
];

const NetworkPolicyPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} />
    <FeatureSection {...sectionContent1} />
    <FeatureSection {...sectionContent2} />
    <FeatureSection {...sectionContent3} />
    <FeatureSection {...sectionContent4} />
    <FeatureSection {...sectionContent5} />
    <UseCaseCard
      heading="Who’s using  Pixiu’s Advanced Network Policy?"
      testimonials={testimonials}
    />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default NetworkPolicyPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.title,
    description: heroContent.tagline,
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
