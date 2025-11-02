import { useState } from 'react'
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/RegisterScreen'

function App() {
  const [currentView, setCurrentView] = useState('login') // 'login' or 'register'

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

