// eslint-disable-next-line @typescript-eslint/no-var-requires
const forceSync = require('sync-rpc');
const getSecretsSync = forceSync(require.resolve('./worker.js'));

const secrets = getSecretsSync();

if (!secrets) return;

Object.keys(secrets).forEach(key => {
  process.env[key] = secrets[key];
});
