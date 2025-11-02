# Azure Functions API

This directory will contain Azure Functions for the backend API.

## Structure

Functions will be organized by feature/resource (e.g., `habits`, `users`, `auth`).

## Example Structure (to be created):

```
api/
├── habits/
│   ├── function.json
│   └── index.js
├── users/
│   ├── function.json
│   └── index.js
└── host.json
```

## Local Development

To test Azure Functions locally:

1. Install Azure Functions Core Tools:
   ```bash
   npm install -g azure-functions-core-tools@4
   ```

2. Run functions locally:
   ```bash
   cd api
   func start
   ```

Functions will be available at `http://localhost:7071/api/{function-name}`

