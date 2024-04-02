import { About, Landing, Marquee, NavBar } from "./components";
import Eyes from "./components/Eyes";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-zinc-900 text-white">
      <NavBar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
    </div>
  );
}

export default App;
