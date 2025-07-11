import { environment } from './environment.production';

export const verifyEnvironment = (): void => {
  const ALLOWED_ENVIRONMENTS: string[] = ['development', 'staging', 'production'];
  if (!ALLOWED_ENVIRONMENTS.includes(environment.name)) {
    throw new Error(`Environnement "${environment.name}" not allowed. Please check the configuration..`);
  }
  if (!environment.apiUrl) {
    console.warn('🚨 API URL is not defined in the environment. Using default URL.');
    environment.apiUrl = 'https://default-api-url.com';
  }
};
