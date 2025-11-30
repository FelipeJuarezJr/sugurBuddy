import { useState } from 'react'
import { useIsAuthenticated } from '@azure/msal-react'
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/RegisterScreen'
import HomeDashboard from './components/HomeDashboard'

function App() {
  const isAuthenticated = useIsAuthenticated()
  const [currentView, setCurrentView] = useState('login') // 'login' or 'register'

  // If user is authenticated, show HomeDashboard
  if (isAuthenticated) {
    return <HomeDashboard />
  }

  // Otherwise show login/register screens
  return (
    <>
      {currentView === 'login' ? (
        <LoginScreen onSwitchToRegister={() => setCurrentView('register')} />
      ) : (
        <RegisterScreen onSwitchToLogin={() => setCurrentView('login')} />
      )}
    </>
  )
}

export default App

