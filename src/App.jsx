import React, { useEffect } from 'react';
import GlobalContextProvider from './context/GlobalContext';
import Header from './components/Header';
import Apresentation from './components/Apresentation';
import Content from './components/Content';

export default function App() {
  return (
    <GlobalContextProvider >
      <Header />
      <Apresentation />
      <Content />
    </GlobalContextProvider>
  );
}