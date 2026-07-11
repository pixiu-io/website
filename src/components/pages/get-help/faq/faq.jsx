import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import Item from './item';

const title = 'FAQ';
const items = [
  {
    question: 'What is Pixiu?',
    answer:
      'Pixiu is an open source, cloud native solution for providing, securing, and observing network connectivity between workloads, fueled by the revolutionary Kernel technology eBPF.',
  },
  {
    question: 'How does Pixiu use eBPF?',
    answer:
      'Pixiu uses eBPF programs attached to various points in the Linux kernel, such as network interfaces and system calls. This allows it to inspect, modify, route, and secure network packets in real-time.',
  },
  {
    question: 'Why should I choose Pixiu over traditional Kubernetes networking solutions?',
    answer:
      'Pixiu offers a modern, eBPF-powered alternative to traditional Kubernetes networking. Unlike kube-proxy, which relies on iptables and manual rule management, Pixiu uses an eBPF dataplane for scalability and performance. The result is faster, more reliable, and highly scalable service routing, especially in large or dynamic Kubernetes clusters.',
  },
  {
    question: 'Does Pixiu support multi-cluster networking?',
    answer:
      'Yes, Pixiu supports multi-cluster networking through its Cluster Mesh feature. Cluster Mesh connects multiple Pixiu-powered clusters, allowing pods in one cluster to discover and access services in other clusters seamlessly. This enables secure, scalable, and transparent communication across clusters running Pixiu as their CNI.',
  },
  {
    question: 'How does Pixiu handle security policies?',
    answer:
      'Pixiu enforces security policies using identity-based controls, runtime enforcement, and transparent encryption. Instead of relying on traditional IP-based rules, Pixiu assigns identities to workloads and applies fine-grained, context-aware policies that secure communication between services in modern, dynamic environments.',
  },
  {
    question: 'How can I contribute to Pixiu?',
    answer:
      'Pixiu is an open-source, cloud-native networking project that welcomes all kinds of contributions. Learn how you can get involved by visiting the <a href="https://pixiu.io/get-involved/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Get Involved</a> page.',
  },
  {
    question: 'Where can I find Pixiu tutorial or workshop?',
    answer:
      'Get hands-on experience with Pixiu through interactive courses, tutorials, and official documentation. Practice using Pixiu\'s networking, observability, and security features in labs provided by companies within the Pixiu ecosystem. Check out the <a href="https://pixiu.io/labs/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Pixiu Labs</a> to get started.',
  },
];

const Faq = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="bg-white py-10 md:py-16 lg:py-20 mt-10 md:mt-20 lg:mt-28 xl:mt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container size="xs">
        <Heading className="text-center" size="lg" tag="h2">
          {title}
        </Heading>
        <dl className="mt-6 md:mt-10 lg:mt-14">
          {items.map((item, index) => {
            const faqId = `faq${index + 1}`;
            return <Item {...item} faqId={faqId} key={index} isDefaultOpen={index === 0} />;
          })}
        </dl>
      </Container>
    </section>
  );
};

export default Faq;
