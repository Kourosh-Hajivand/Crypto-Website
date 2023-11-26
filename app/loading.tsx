import Image from "next/image";
import Hero from "./components/Hero";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="w-full h-full">
      <Hero />
      <div className="w-full flex flex-col items-center justify-center gap-5 max-w-[1440px] px-6 mx-auto my-32 ">
        <h1 className="text-4xl lg:text-6xl text-white font-black">TopCoin</h1>
        <p className="text-white/40  text-xs text-center lg:text-xl">
          Top trending coins as searched by users in the last 24 hours
        </p>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full mt-10 animate-pulse">
          <div className="bg-[#1A1B23] w-full min-h-[200px] px-6 py-4 rounded-2xl"></div>
          <div className="bg-[#1A1B23] w-full min-h-[200px] px-6 py-4 rounded-2xl"></div>
          <div className="bg-[#1A1B23] w-full min-h-[200px] px-6 py-4 rounded-2xl"></div>
          <div className="bg-[#1A1B23] w-full min-h-[200px] px-6 py-4 rounded-2xl"></div>
        </div>
      </div>
      <div className="w-full min-h-screen  relative">
        <div className="absolute -right-[0px] -bottom-40 lg:-bottom-[300px] -z-10">
          <div className="h-[600px] w-[300px] lg:h-[500px] lg:w-[500px] relative ">
            <Image
              src={"/texture3.png"}
              fill
              className="object-contain animate-pulse"
              alt="texture"
            />
          </div>
        </div>
        <div className="absolute -left-60 -top-44 lg:-left-16 lg:-top-52 -z-10">
          <div className="h-[1000px] w-[500px] relative">
            <Image
              src={"/texture2.png"}
              fill
              className="object-fill animate-pulse"
              alt="texture"
            />
            <div className="min-w-[500px] w-full min-h-[600px] animate-pulse  py-5 px-4 bg-[#1A1B23]/70 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
