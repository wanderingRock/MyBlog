const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.PUBLIC_PATH,
  outputDir: "dist",
  indexPath: "index.html",
  lintOnSave: true,
  transpileDependencies: true,
});
