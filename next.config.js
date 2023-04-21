/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    "website_prefix": '__WEBSITE__', // The Class Name of layout
    "dashboard_prefix": '__DASHBOARD__' // The Class Name of layout
  }
}

module.exports = nextConfig
