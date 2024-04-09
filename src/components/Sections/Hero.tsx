import { Fragment } from "react/jsx-runtime";

const DesktopHero = () => {
  return (
    <Fragment>
      {/* desktop */}
      <div className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
        <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900" />
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" />
      </div>
      <div className="lg:grid lg:grid-cols-3 " id="home">
        <div className="lg:grid lg:grid-row-3 hidden">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gray-400 z-0">01</h1>
            <p className="text-xl font-thin text-slate-800 z-0">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <p className="text-xl font-thin text-slate-700 z-0">
              Lorem ipsum dolor sit amet
            </p>
          </div>

          <img
            src="/Explosion.svg"
            alt="explosion"
            className="pt-8 pl-8 pb-4 z-0"
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
        <div className="lg:grid lg:grid-row-3 hidden">
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
        <div className="lg:grid lg:grid-row-3 ml-20 hidden z-0">
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

      <div className="flex flex-col lg:hidden">
        <div className="flex justify-center items-center">
          <img
            src="/Gradientbg.svg"
            alt="background"
            className="absolute z-0"
          />
          <div className="flex flex-col z-0 p-5 text-center justify-center items-center">
            <p className="text-8xl font-thin text-black">Create Your design</p>
            <p className="text-xl font-thin text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              ducimus provident modi, molestiae eligendi, sint, molestias ea
              laboriosam
            </p>
            {/* <Button className="mt-9 bg-slate-800 rounded-full flex justify-center items-center">
              <span className="text-xl font-thin text-center text-white">
                Explore
              </span>
            </Button> */}
            <div className="mt-8 gap-3 flex justify-center">
              {/* <a
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                Continue with Github
              </a> */}
              <a
                className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                href="#"
              >
                <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                  Download
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DesktopHero;
