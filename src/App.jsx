import { Landing, Marquee, NavBar } from "./components";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-zinc-900 text-white">
      <NavBar />
      <Landing />
      <Marquee />
    </div>
  );
}

export default App;
