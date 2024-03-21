import { Fragment } from "react/jsx-runtime";
import Collection from "./components/Sections/Collection";
import Feature from "./components/Sections/Feature";
import Hero from "./components/Sections/Hero";
// import NavBar from "./components/Shared/NavBar";

function App() {
  return (
    <Fragment>
      <div className="">
        {/* <NavBar /> */}
        <main className="p-14 w-full min-h-screen relative overflow-hidden">
          <Hero />
          <Feature />
          <Collection />
        </main>
      </div>
    </Fragment>
  );
}

export default App;
