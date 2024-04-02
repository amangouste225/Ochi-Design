import { About, Landing, Marquee, NavBar } from "./components";
import Eyes from "./components/Eyes";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-zinc-900 text-white">
      <NavBar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Projects />
    </div>
  );
}

export default App;
