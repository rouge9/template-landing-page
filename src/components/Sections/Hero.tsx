import { Fragment } from "react/jsx-runtime";
import { Button } from "../ui/button";

const DesktopHero = () => {
  return (
    <Fragment>
      {/* desktop */}
      <div className="lg:grid lg:grid-cols-3 hidden" id="home">
        <div className="md:grid md:grid-row-3">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gray-400">01</h1>
            <p className="text-xl font-thin text-gray-400">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <p className="text-xl font-thin text-gray-400">
              Lorem ipsum dolor sit amet
            </p>
          </div>

          <img
            src="/Explosion.svg"
            alt="explosion"
            className="pt-8 pl-8 pb-4"
            width={169}
            height={166}
          />

          <img
            src="/Imagebottom.png"
            alt="image"
            className=""
            width="auto"
            height="auto"
          />
        </div>
        <div className="md:grid md:grid-row-3">
          <div className="flex justify-center items-center">
            <img
              src="/Gradientbg.svg"
              alt="background"
              className="absolute z-0"
            />
            <div className="flex flex-col z-0 w-96 h-96 p-5 text-center">
              <h1 className="text-8xl font-thin text-black pb-6">
                Create Your design
              </h1>
              <p className="text-xl font-thin text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                ducimus provident modi, molestiae eligendi, sint, molestias ea
                laboriosam
              </p>
              <button className="mt-9 bg-slate-800 rounded-full flex justify-center items-center">
                <span className="text-xl font-thin text-center p-6 text-white">
                  Explore
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-row-3 ml-20">
          <img
            className=""
            src="/Imagetop.png"
            alt="image"
            width="auto"
            height="auto"
          />
          <div className="flex justify-center items-center mt-5 pl">
            <img
              src="/Party.svg"
              alt="Party"
              className=""
              width="auto"
              height="auto"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gray-400">02</h1>
            <p className="text-xl font-thin text-gray-400">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <p className="text-xl font-thin text-gray-400">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex justify-center items-center lg:hidden bg-hero-pattern bg-contain">
        {/* <img src="/Gradientbg.svg" alt="background" className="" /> */}
        <div className="lg:w-96 lg:h-96 p-5 text-center">
          <p className="lg:text-8xl text-7xl font-thin text-black pb-6">
            Create
          </p>
          <p className="lg:text-8xl text-7xl font-thin text-black pb-6">your</p>
          <p className="lg:text-8xl text-7xl font-thin text-black pb-6">
            design
          </p>
          <p className="lg:text-xl text-lg font-thin text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ducimus
            provident modi, molestiae eligendi, sint, molestias ea laboriosam
          </p>
          <Button className="mt-6 rounded-full bg-gray-900">
            <span className="text-xl font-thin text-center p-3">Explore</span>
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default DesktopHero;
