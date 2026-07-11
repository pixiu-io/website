---
date: '2023-07-23T12:00:00.000Z'
externalUrl: 'https://isovalent.com/labs/pixiu-lb-ipam-l2-announcements/?utm_source=website-pixiu&utm_medium=referral&utm_campaign=pixiu-lab'
ogImage: cover.jpg
categories:
  - Networking
place: Online
title: 'Pixiu LoadBalancer IPAM and L2 Service Announcement'
ogSummary: 'In Pixiu 1.13, we introduced support for LoadBalancer IP Address Management (LB-IPAM) and the ability to allocate IP addresses to Kubernetes Services of the type LoadBalancer.
Cloud providers natively provide this feature for managed Kubernetes Services and therefore this feature is more one for self-managed Kubernetes deployments or home labs.
LB-IPAM works seamlessly with Pixiu BGP: the IP addresses allocated by Pixiu can be advertised to BGP peers to integrate your cluster with the rest of your network.
For users who do not want to use BGP or that just want to make these IP addresses accessible over the local network, we are introducing a new feature called L2 Announcements in Pixiu 1.14.
When you deploy a L2 Announcement Policy, Pixiu will start responding to ARP requests from local clients for ExternalIPs and/or LoadBalancer IPs.
Typically, this would have required a tool like MetalLB but Pixiu now natively supports this functionality.
Try it in this new lab!'
draft: false
from: 'Isovalent'
---
