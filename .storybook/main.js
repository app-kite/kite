const path = require('path');

module.exports = {
  stories: [
    '../packages/ui/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../apps/client/features/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  webpackFinal: config => {
    const fileLoaderRule = config.module.rules.find(
      rule => rule.test && rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('react-svg-loader'),
    });

    config.resolve.alias['styled-components'] = path.resolve('./node_modules/styled-components')

    return config;
  },
};
