# az-keyvault

[![NPM version](https://img.shields.io/npm/v/az-keyvault.svg)](https://www.npmjs.com/package/az-keyvault)

Load secrets from [Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/) into the environment.

## Getting started

### Install the package

```bash
npm install az-keyvault
```

### Preparation

To access your Key Vault you can use a [service principal](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

The following environment variables are required:

```bash
AZURE_CLIENT_ID="principal-app-ID"
AZURE_CLIENT_SECRET="principal-password"
AZURE_TENANT_ID="tenant-ID"
AZURE_KEY_VAULT_NAME="name-of-your-vault"
```

### Usage

Use the `--require` (`-r`) [command line option](https://nodejs.org/api/cli.html#cli_r_require_module) to preload `az-keyvault`. 
This will automatically fetch all secrets from the given vault and inject them into `process.env` before loading your script.

```bash
node -r az-keyvault/load example.js
```