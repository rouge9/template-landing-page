import Masonry from "../Shared/Masonry";
import { Button } from "../ui/button";

const Collection = () => {
  return (
    <div className="flex flex-col pt-24">
      <div className="flex justify-between gap-5">
        <img
          src="/shapeandfontcircle.png"
          alt="image"
          className="w-[355px] h-[297px] md:block hidden"
        />
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="text-5xl font-extrabold text-center text-balance">
            Your ultimate fashion outfits
          </p>
          <p className="text-xl font-thin text-center text-balance">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            quidem consequuntur exercitationem, cum earum fuga vero architecto
            sint, officiis amet nemo harum? Facilis eius esse voluptate
            excepturi tenetur, in veniam!
          </p>
          <Button className="mt-6 rounded-full bg-gray-900">
            <span className="text-xl font-thin text-center p-3">Explore</span>
          </Button>
        </div>
        <img
          src="/circleshapeandfont.png"
          alt="image"
          className="w-[355px] h-[297px] md:block hidden"
        />
      </div>
      <Masonry />
    </div>
  );
};

export default Collection;
