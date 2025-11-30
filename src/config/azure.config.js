// Azure Configuration
// These values will be set via environment variables
// In production, configure them in Azure Static Web Apps > Configuration

export const azureConfig = {
  // Azure AD Configuration (supports both Azure AD and Azure AD B2C)
  tenantId: import.meta.env.VITE_AZURE_AD_TENANT_ID || import.meta.env.VITE_AZURE_AD_B2C_TENANT_NAME || '',
  tenantName: import.meta.env.VITE_AZURE_AD_B2C_TENANT_NAME || '', // For B2C only
  clientId: import.meta.env.VITE_AZURE_AD_CLIENT_ID || import.meta.env.VITE_AZURE_AD_B2C_CLIENT_ID || '',
  signUpSignInPolicy: import.meta.env.VITE_AZURE_AD_B2C_SIGN_UP_SIGN_IN_POLICY || '',
  
  // API Endpoint
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:7071/api',
  
  // Generate authority URL (supports both Azure AD and Azure AD B2C)
  get authority() {
    // If using Azure AD B2C
    if (this.tenantName && this.signUpSignInPolicy) {
      return `https://${this.tenantName}.b2clogin.com/${this.tenantName}.onmicrosoft.com/${this.signUpSignInPolicy}`;
    }
    // If using regular Azure AD with tenant ID
    if (this.tenantId) {
      return `https://login.microsoftonline.com/${this.tenantId}`;
    }
    // Fallback to common (supports any tenant/organization)
    return 'https://login.microsoftonline.com/common';
  },
};

// Validate configuration in development
if (import.meta.env.DEV) {
  console.log('Azure Configuration:', {
    tenantId: azureConfig.tenantId || '⚠️ Not set',
    tenantName: azureConfig.tenantName || '⚠️ Not set (B2C only)',
    clientId: azureConfig.clientId || '⚠️ Not set',
    authority: azureConfig.authority,
    apiUrl: azureConfig.apiUrl,
  });
}

