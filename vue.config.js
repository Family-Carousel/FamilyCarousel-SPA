const path = require('path');
const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process-env': {
          PACKAGE_JSON_VERSION: '"' + require('./package.json').version + '"'
        }
      })
    ]
  },
  chainWebpack: config => {
    const apiClient = process.env.VUE_APP_API_CLIENT || 'server';
    config.resolve.alias.set(
      'api-client',
      path.resolve(__dirname, `src/api/${apiClient}`)
    );
  },
  transpileDependencies: ['vuetify', 'vuex-module-decorators']
};
