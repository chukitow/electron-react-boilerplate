require('dotenv').config();

const env = config => config;

module.exports = [
  require.resolve('./.webpack.config.js'),
  env,
  ['use-eslint-config', '.eslintrc.json']
];
