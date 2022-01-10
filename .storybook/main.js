const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.jsx'], // ここを書き換える（`js`ではなく`jsx`であることに注意）
  addons: ['@storybook/addon-actions', '@storybook/addon-links',

      {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },   
       },
    },
  ],
  // core: {
  //   builder: 'webpack5',
  // },

  webpackFinal: (config) => {
    config.resolve.alias['~'] = path.join(__dirname, '../src/');
    return config;
  },

};
