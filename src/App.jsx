import GlobalContextProvider from './context/GlobalContext';
import Header from './components/Header/Header';
import Apresentation from './components/Apresentation/Apresentation';
import Content from './components/Content/Content';

export default function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <Apresentation />
      <Content />
    </GlobalContextProvider>
  );
}