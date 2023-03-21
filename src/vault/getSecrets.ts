import { DefaultAzureCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';
import { ensureEnv } from './ensureEnv';

type Secrets = Record<string, string>;

export async function getSecrets(): Promise<Secrets> {
  ensureEnv('AZURE_TENANT_ID');
  ensureEnv('AZURE_CLIENT_ID');
  ensureEnv('AZURE_CLIENT_SECRET');

  const secrets: Secrets = {};
  const vaultName = ensureEnv('AZURE_KEY_VAULT_NAME');

  const url = `https://${vaultName}.vault.azure.net`;
  const credential = new DefaultAzureCredential();
  const client = new SecretClient(url, credential);

  for await (const secretProperties of client.listPropertiesOfSecrets()) {
    const secret = await client.getSecret(secretProperties.name);
    if (secret.value) {
      // convert azure format to correct env format
      const cleanSecret = secret.name.replaceAll('-', '_');
      secrets[cleanSecret] = secret.value;
    }
  }

  return secrets;
}
