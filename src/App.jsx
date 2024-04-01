import { About, Landing, Marquee, NavBar } from "./components";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-zinc-900 text-white">
      <NavBar />
      <Landing />
      <Marquee />
      <About />
    </div>
  );
}

export default App;
