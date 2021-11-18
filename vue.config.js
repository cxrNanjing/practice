
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        'components':'/src/components',
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      },
    },
  },
}