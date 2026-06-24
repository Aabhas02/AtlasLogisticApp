import React, { useState } from 'react';

import LoginScreen from './src/screens/Login/LoginScreen';
import SignupScreen from './src/screens/signup/SignupScreen';
import DashboardScreen from './src/screens/dashboard/DashboardScreen';

function App() {

  const [screen, setScreen] = useState('login');

  if (screen === 'signup') {
    return (
      <SignupScreen
        goToLogin={() => setScreen('login')}
      />
    );
  }

  if (screen === 'dashboard') {
    return <DashboardScreen />;
  }

  return (
    <LoginScreen
      goToSignup={() => setScreen('signup')}
      goToDashboard={() => setScreen('dashboard')}
    />
  );
}

export default App;