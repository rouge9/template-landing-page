const Masonry = () => {
  return (
    <div className="mt-10 md:grid md:grid-cols-10 flex flex-col justify-center items-center sm:gap-x-6 lg:gap-x-8">
      <div className="md:col-span-2 md:flex md:flex-col justify-center items-center">
        <p className="text-2xl font-light italic text-gray-500 ">
          Exclusive gifts.
          <br /> Insider access.
          <br /> Special events.
        </p>
        <hr className="w-44 h-2 bg-slate-900 mt-3" />
        <img
          src="/left.png"
          alt="image"
          className="mt-16 w-[180px] h-[250px]"
        />
      </div>
      <div className="md:col-span-2 md:block hidden">
        <img src="/Frame1.png" alt="image" className="w-[257px] h-[273px]" />
        <img
          src="/Frame2.png"
          alt="image"
          className="w-[257px] h-[252px] pt-7"
        />
      </div>

      <div className="md:col-span-2 md:block hidden">
        <img src="/Middle.png" alt="image" className="w-[291px] h-[582px]" />
      </div>

      <div className="md:col-span-2 md:block hidden">
        <img src="/Frame3.png" alt="image" className="w-[257px] h-[273px]" />
        <img
          src="/Frame4.png"
          alt="image"
          className="w-[257px] h-[252px] pt-4"
        />
      </div>
      <div className="md:col-span-2 flex flex-col justify-center items-center">
        <img
          src="/right.png"
          alt="image"
          className="mt-16 w-[180px] h-[250px]"
        />
        <p className="text-2xl font-light italic text-gray-500 pt-10">
          Beauty.
          <br /> Fashion.
          <br /> Culture.
        </p>
        <hr className="w-24 h-2 bg-slate-900 mt-3" />
      </div>
    </div>
  );
};

export default Masonry;
