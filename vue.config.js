const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    headers: { 'Cache-Control': 'no-store' }
  }
};

