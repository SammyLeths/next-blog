/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'next_blog_admin',
        mongodb_password: 'ae4DI3wxs5tTQAsU',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'next-blog-dev',
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'next_blog_admin',
      mongodb_password: 'ae4DI3wxs5tTQAsU',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'next-blog',
    },
  };
};

module.exports = nextConfig;
