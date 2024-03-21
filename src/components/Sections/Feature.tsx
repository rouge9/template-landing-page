const Feature = () => {
  return (
    <div className="grid md:grid-cols-2 md:items-center pt-10" id="feature">
      <div className="flex flex-col gap-5 lg:pt-64">
        <div className="md:flex md:flex-col gap-5 md:text-balance">
          <p className="lg:text-6xl text-2xl font-extrabold text-orange-950">
            Listen to your self
          </p>
          <p className="lg:text-6xl text-2xl font-extrabold text-orange-950 pb-4">
            Follow your heart
          </p>

          <p className="lg:text-xl text-lg font-thin text-orange-900 text-balance md:text-start text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sunt
            officiis aspernatur quae ab, eos beatae delectus amet magni deserunt
            animi soluta aut aliquam totam, placeat quam doloremque pariatur
            facere.
          </p>
        </div>

        <div className="md:pb-24 md:pt-10 flex md:justify-start md:items-start justify-center items-center">
          <button className="bg-orange-300 rounded-full flex">
            <span className="text-xl font-thin text-center p-4 md:p-6">
              Download the App
            </span>
          </button>
        </div>

        <div className="bg-orange-950 rounded-3xl md:flex justify-between items-center hidden ">
          <div className="flex flex-col gap-3 ml-16 mt-8 mb-8">
            <p className="text-2xl font-bold text-white">4.9</p>
            <hr className="w-10 h-1 bg-white" />
            <p className="text-xl font-thin text-white">Lorem ipsum dolor</p>
          </div>
          <div className="flex flex-col gap-3 ml-16 mt-8 mb-8">
            <p className="text-2xl font-bold text-white">876K</p>
            <hr className="w-10 h-1 bg-white" />

            <p className="text-xl font-thin text-white">Lorem ipsum dolor</p>
          </div>
          <div className="flex flex-col gap-3 ml-16 mt-8 mb-8 mr-16">
            <p className="text-2xl font-bold text-white">No.1</p>
            <hr className="w-10 h-1 bg-white" />

            <p className="text-xl font-thin text-white">Lorem ipsum dolor</p>
          </div>
        </div>
      </div>

      <div className="w-full hidden lg:block">
        <img src="/Imagearea.svg" alt="image" className="" />
      </div>
    </div>
  );
};

export default Feature;
