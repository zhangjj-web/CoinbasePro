const { defineConfig } = require('@vue/cli-service')

const path = require('path')
const themePath = path.join(__dirname, './src/assets/style/theme.less')

module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    // host: '10.84.102.34',
    // host: '192.168.1.6',
    proxy: {
      //配置跨域
      '/api/': {
        // target: "http://207.148.118.10:8089",
        target: "http://8.217.145.230:8089", //测试地址
          changOrigin:true,
          pathRewrite:{
              '^/api/':'/'
          }
      }
    }
  },
  // 定制主题，修改样式变量
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: `true; @import "${themePath}";`
          }
        }
      }
    }
  },
  productionSourceMap:false
})
