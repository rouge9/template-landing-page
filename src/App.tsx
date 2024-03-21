import { Fragment } from "react/jsx-runtime";
import Collection from "./components/Sections/Collection";
import Feature from "./components/Sections/Feature";
import Hero from "./components/Sections/Hero";
import NavBar from "./components/Shared/NavBar";

function App() {
  return (
    <Fragment>
      <NavBar />
      <main className="p-14 w-full min-h-screen">
        <Hero />
        <Feature />
        <Collection />
      </main>
    </Fragment>
  );
}

export default App;
