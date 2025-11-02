// Azure Configuration
// These values will be set via environment variables
// In production, configure them in Azure Static Web Apps > Configuration

export const azureConfig = {
  // Azure AD B2C Configuration
  tenantName: import.meta.env.VITE_AZURE_AD_B2C_TENANT_NAME || '',
  clientId: import.meta.env.VITE_AZURE_AD_B2C_CLIENT_ID || '',
  signUpSignInPolicy: import.meta.env.VITE_AZURE_AD_B2C_SIGN_UP_SIGN_IN_POLICY || '',
  
  // API Endpoint
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:7071/api',
  
  // Generate authority URL for Azure AD B2C
  get authority() {
    if (!this.tenantName || !this.signUpSignInPolicy) return '';
    return `https://${this.tenantName}.b2clogin.com/${this.tenantName}.onmicrosoft.com/${this.signUpSignInPolicy}`;
  },
};

// Validate configuration in development
if (import.meta.env.DEV) {
  console.log('Azure Configuration:', {
    tenantName: azureConfig.tenantName || '⚠️ Not set',
    clientId: azureConfig.clientId || '⚠️ Not set',
    apiUrl: azureConfig.apiUrl,
  });
}

