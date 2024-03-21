import Collection from "./components/Sections/Collection";
import Desc from "./components/Sections/Desc";
import Hero from "./components/Sections/Hero";

function App() {
  return (
    <main className="p-14 gap-9  w-full min-h-screen">
      <Hero />
      <Desc />
      <Collection />
    </main>
  );
}

export default App;
