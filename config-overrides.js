/* config-overrides.js */

// https://github.com/raodurgesh/react-app-rewire-build-dev/issues/4
// write web dev files to disk

const fs = require('fs');
const path = require('path');

let outputPath = './build-dev';
module.exports = {
  webpack: function (config, env) {
    const appDirectory = fs.realpathSync(process.cwd());
    const resolveApp = (relativePath) =>
      path.resolve(appDirectory, relativePath);
    config.output.path = resolveApp(outputPath);
    return config;
  },

  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.writeToDisk = true;
      return config;
    };
  },
};
