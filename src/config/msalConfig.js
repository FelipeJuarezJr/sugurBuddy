import { PublicClientApplication } from '@azure/msal-browser';
import { azureConfig } from './azure.config';

// MSAL configuration
export const msalConfig = {
  auth: {
    clientId: azureConfig.clientId || 'your-client-id-here',
    authority: azureConfig.authority || 'https://login.microsoftonline.com/common',
    redirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: 'sessionStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ['User.Read'],
  prompt: 'select_account', // Force account selection - shows account picker
};

// Create the main myMSALObj instance
export const msalInstance = new PublicClientApplication(msalConfig);

