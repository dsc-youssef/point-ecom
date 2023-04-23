/** @type {import('next').NextConfig} */

// Rewrites
const websiteRewrites = require("./config/next/websiteRewrites");

const nextConfig = {

  // Redirects
  async rewrites() {
    return [
      ...websiteRewrites
    ];
  },

  // Strict Mode
  reactStrictMode: true,

  // Env Variables
  env: {
    "website_prefix": '__WEBSITE__', // The Class Name of layout
    "dashboard_prefix": '__DASHBOARD__' // The Class Name of layout
  },
}

module.exports = nextConfig
