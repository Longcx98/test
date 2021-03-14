module.exports = {
  devServer: {  
    proxy: {
      '/soso': {
        target: 'https://c.y.qq.com',
        changeOrigin: true
      }
    }
  }
}
