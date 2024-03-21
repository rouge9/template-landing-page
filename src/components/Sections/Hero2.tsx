import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="relative z-0">
      <div className="relative flex justify-start items-start flex-col">
        <h1 className="text-xl font-bold text-gray-400">01</h1>
        <p className="text-xl font-thin text-gray-400">
          Lorem ipsum dolor sit amet consectetur
        </p>
        <p className="text-xl font-thin text-gray-400">
          Lorem ipsum dolor sit amet consectetur
        </p>
        <img
          src="/Explosion.svg"
          alt="explosion"
          className="z-0 pt-8 pl-8 pb-4"
          width={169}
          height={166}
        />
        <div className="absolute ">
          <img
            src="/Imagebottom.png"
            alt="image"
            className="z-10 pt-64 pl-10"
            width={412}
            height={515}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src="/Gradientbg.svg" alt="background" className="absolute z-0" />
        <div className="absolute z-0 w-96 h-96 p-5 text-center">
          <h1 className="text-8xl font-thin text-black pb-6">
            Create Your design
          </h1>
          <p className="text-xl font-thin text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ducimus
            provident modi, molestiae eligendi, sint, molestias ea laboriosam
          </p>
          <Button className="mt-6 rounded-full bg-gray-900">
            <span className="text-xl font-thin text-center p-3">Explore</span>
          </Button>
        </div>
      </div>
      <div className="relative flex flex-col justify-end items-end">
        <div className="z-0">
          <img className="" src="/Imagetop.png" alt="image" />
        </div>
        <div className="absolute">
          <img
            src="/Party.svg"
            alt="Party"
            className="z-0"
            width={169}
            height={166}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
