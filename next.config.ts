import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'markovate.com',
      'myways-public-data-prod.s3.ap-south-1.amazonaws.com',
      'via.placeholder.com',
      'media.istockphoto.com',
      'encrypted-tbn0.gstatic.com',
      'media.cloudbooklet.com',
      'i.ytimg.com',
      '2024.allthingsopen.org',
      'www.openlogic.com',
      'miro.medium.com', // add this new domain
    ],
  },
};

export default nextConfig;
