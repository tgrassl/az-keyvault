export function ensureEnv(name: string): string {
  const env = process.env[name];
  if (!env) {
    throw Error(`Missing required environment variable: ${name}`);
  }

  return env;
}
