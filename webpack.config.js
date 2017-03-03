const getWebpackConfig = require('object-partners-presentation');

const configFn = getWebpackConfig({}, {
  dirname: __dirname
});

module.exports = configFn;
