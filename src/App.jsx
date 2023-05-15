import Fingerspose from "./components/Fingerspose";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="h-screen w-screen bg-black flex flex-col">
      <Fingerspose />
      <Main />
    </div>
  )
}