import { Fragment } from "react/jsx-runtime";
import Collection from "./components/Sections/Collection";
import Feature from "./components/Sections/Feature";
import Hero from "./components/Sections/Hero";
import Footer from "./components/Shared/Footer";
import FixedNavBar from "./components/Shared/FixedNavBar";

function App() {
  return (
    <Fragment>
      <FixedNavBar />
      <main className=" p-14 relative overflow-hidden flex flex-col justify-center items-center">
        <Hero />
        <Feature />
        <Collection />
        <Footer />
      </main>
    </Fragment>
  );
}

export default App;
