import React from 'react';
import ConfigurationMenu from './components/ConfigurationMenu';
import SwitchRouter from './components/SwitchRouter';
import GlobalContextProvider from './context/GlobalContext';

export default function App() {
  return (
    <GlobalContextProvider >
      <ConfigurationMenu />
      <SwitchRouter />
    </GlobalContextProvider>
  );
}