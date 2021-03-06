
const webpack = require("./webpack.config");

module.exports = config => {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],


    files: ["src/index.tests.js"],


    preprocessors: {
      "src/index.tests.js": ["webpack"]
    },

    webpack,
    webpackMiddleware: {
      noInfo: true,
      stats: "errors-only"
    },

    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadless"],
    singleRun: true,
    concurrency: Infinity
  });
};
