import React from 'react';
import { useColorScheme } from 'react-native';
import AppNavigation from './navigation/AppNavigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AppNavigation />
  );
};

export default App;
