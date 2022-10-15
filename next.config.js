/** @type {import('next').NextConfig} */

const withImages = require('next-images');

module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['i.ytimg.com']
  }
};
