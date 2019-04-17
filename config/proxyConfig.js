module.exports = {
    proxyList: {
          '/yongxu': {
              // 测试环境
              target: 'http://192.168.0.107:8080',  // 接口域名
              changeOrigin: true,  //是否跨域
              pathRewrite: {
                  '^/yongxu': ''   //需要rewrite重写的,
              }              
          },
       
    }
  }