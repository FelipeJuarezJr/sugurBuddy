# SugarBuddy - Diabetes Habit Tracker

A mobile-first web application for tracking diabetes-related habits, built with React, Tailwind CSS, and Azure cloud services.

## Tech Stack

- **Frontend**: React + Tailwind CSS
- **Backend**: Azure Functions (Free Tier)
- **Database**: Azure SQL Database (Free Tier)
- **Authentication**: Azure AD B2C (Free Tier)
- **Hosting**: Azure Static Web Apps (Free Tier)

## Habits Being Tracked

- Sugar intake (grams)
- Carbohydrate portions
- Soda/sugary drinks consumption
- Blood glucose readings
- Medication/insulin adherence
- Exercise/activity
- Water intake
- Sleep hours

## Project Status

🚧 **In Development** - Starting slow, building incrementally.

## Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** or **yarn** package manager
- **Azure account** with access to:
  - Azure Static Web Apps
  - Azure Functions
  - Azure SQL Database
  - Azure AD B2C

### Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_AZURE_AD_B2C_TENANT_NAME=your-tenant-name
   VITE_AZURE_AD_B2C_CLIENT_ID=your-client-id
   VITE_AZURE_AD_B2C_SIGN_UP_SIGN_IN_POLICY=your-policy-name
   VITE_API_URL=http://localhost:7071/api
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for Production**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder (ready for Azure Static Web Apps)

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

### Testing Azure Functions Locally

1. **Install Azure Functions Core Tools**
   ```bash
   npm install -g azure-functions-core-tools@4
   ```

2. **Navigate to API Directory**
   ```bash
   cd api
   ```

3. **Start Functions Locally**
   ```bash
   func start
   ```
   Functions will be available at `http://localhost:7071/api`

## Azure Deployment

### Frontend - Azure Static Web Apps

1. **Create Static Web App in Azure Portal**
   - Go to Azure Portal → Create Resource → Static Web App
   - Choose Free Tier
   - Configure:
     - **App location**: `/` (root)
     - **API location**: `api`
     - **Output location**: `dist`

2. **Connect to GitHub** (for automatic deployment)
   - Link your repository
   - GitHub Actions workflow will be created automatically
   - Or use the workflow file in `.github/workflows/azure-static-web-apps.yml`

3. **Set Environment Variables in Azure**
   - Go to Static Web App → Configuration → Application settings
   - Add:
     - `VITE_AZURE_AD_B2C_TENANT_NAME`
     - `VITE_AZURE_AD_B2C_CLIENT_ID`
     - `VITE_AZURE_AD_B2C_SIGN_UP_SIGN_IN_POLICY`
     - `VITE_API_URL` (your Azure Functions URL)

### Backend - Azure Functions

1. **Create Function App in Azure Portal**
   - Go to Azure Portal → Create Resource → Function App
   - Choose Free Tier (Consumption Plan)
   - Select Node.js runtime

2. **Deploy Functions**
   ```bash
   cd api
   func azure functionapp publish <your-function-app-name>
   ```

3. **Configure Application Settings**
   - Go to Function App → Configuration → Application settings
   - Add database connection strings and other secrets

### Database - Azure SQL Database

1. **Create SQL Database**
   - Go to Azure Portal → Create Resource → SQL Database
   - Choose Free Tier (Basic)
   - Configure firewall rules to allow Azure Services

2. **Connection String**
   - Copy connection string from Azure Portal
   - Add to Azure Functions App Settings as `SQL_CONNECTION_STRING`

### Authentication - Azure AD B2C

1. **Create B2C Tenant**
   - Go to Azure Portal → Create Resource → Azure AD B2C
   - Create new tenant or use existing

2. **Register Applications**
   - Register React frontend as a Single Page Application (SPA)
   - Register Azure Functions backend (if needed for API protection)

3. **Create User Flows**
   - Create Sign up and Sign in policy
   - Configure the policy name in environment variables

4. **Update Configuration**
   - Add B2C configuration to `.env` file and Azure Static Web Apps settings

## Project Structure

```
sugarbuddy/
├── api/                    # Azure Functions (backend)
│   └── readme.md
├── src/
│   ├── components/        # React components
│   ├── config/           # Configuration files
│   │   └── azure.config.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── workflows/        # GitHub Actions for CI/CD
├── staticwebapp.config.json  # Azure Static Web Apps routing
├── vite.config.js        # Vite configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## Testing the Full Stack Locally

1. **Start Frontend**
   ```bash
   npm run dev
   ```

2. **Start Backend (Azure Functions)**
   ```bash
   cd api
   func start
   ```

3. **Test Integration**
   - Frontend at `http://localhost:5173`
   - API at `http://localhost:7071/api`
   - Frontend should connect to local API during development

## Cloud-Based Architecture

All components are fully cloud-based:
- ✅ **Frontend**: Deployed to Azure Static Web Apps (global CDN)
- ✅ **Backend**: Azure Functions (serverless, auto-scaling)
- ✅ **Database**: Azure SQL Database (managed, cloud-hosted)
- ✅ **Auth**: Azure AD B2C (cloud identity service)

No local servers required for production!

