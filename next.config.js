const { withAxiom } = require('next-axiom')

/** @type {import('next').NextConfig} */
const nextConfig = withAxiom({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
})

module.exports = nextConfig
