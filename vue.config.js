const path = require("path");

module.exports = {
  baseUrl: "./",
  productionSourceMap: false,
  outputDir: "deploy",
  devServer: {
    proxy: {
      //  代理
      "/api": {
        target: "",
        changeOrigin: true,
        secure: true
      }
    }
  }
};
