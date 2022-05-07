const withTM = require('next-transpile-modules')(['@kite/ui']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('react-svg-loader'),
    });

    return config;
  },
};

module.exports = withTM(nextConfig);
