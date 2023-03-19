// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getSecrets } = require('../dist/index');

module.exports = function initRpc() {
  return () => getSecrets();
};
