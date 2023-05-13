import Header from "./components/Header";
import Main from "./components/Main";
import FingersposeComponent from "./components/WebCam";

export default function App() {
  return (
    <header className="h-screen flex flex-col">
      <FingersposeComponent />
      <Header />
      <Main />
    </header>
  )
}
