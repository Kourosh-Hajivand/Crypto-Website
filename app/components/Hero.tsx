import Image from "next/image";

function Hero() {
  return (
    <div className="w-full  h-screen flex items-center justify-center relative">
      <div className="absolute right-0 -bottom-40 lg:-bottom-22 -z-10">
        <div className="h-[600px] w-[300px] lg:h-screen lg:w-[500px] relative ">
          <Image
            src={"/texture.png"}
            fill
            className="object-contain animate-pulse"
            alt="texture"
          />
        </div>
      </div>
      <div className="absolute -left-60 -top-44 lg:-left-28 lg:top-0 -z-10">
        <div className="h-[500px] w-[600px] relative">
          <Image
            src={"/texture1.png"}
            fill
            className="object-fill animate-pulse"
            alt="texture"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10">
        <div>
          <h1 className="text-4xl lg:text-[85px] lg:leading-[120%] text-white font-black">
            We make crypto
          </h1>
          <h1 className="text-4xl lg:text-[85px] lg:leading-[120%] text-white font-black">
            clear and simple
          </h1>
        </div>
        <div className="p-[2px] px-[2px] rounded-xl bg-gradient-to-tr from-[#933FFE] to-[#18C8FF] hover:from-[#c69bff] hover:to-[#a6eaff] duration-200">
          <button className="bg-gradient-to-tr from-[#933FFE] to-[#18C8FF] hover:shadow-[#933FFE]/60 hover:shadow-2xl  duration-200  text-white px-6 py-4 rounded-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
