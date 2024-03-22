import { Fragment } from "react/jsx-runtime";
import Collection from "./components/Sections/Collection";
import Feature from "./components/Sections/Feature";
import Hero from "./components/Sections/Hero";
import NavBar from "./components/Shared/NavBar";
import Footer from "./components/Shared/Footer";

function App() {
  return (
    <Fragment>
      <main className="p-14 w-full min-h-screen relative overflow-hidden">
        <NavBar />
        <Hero />
        <Feature />
        <Collection />
        <Footer />
      </main>
    </Fragment>
  );
}

export default App;
