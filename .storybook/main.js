module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next',
    'storybook-dark-mode',
  ],
  staticDirs: ['../public'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
}
