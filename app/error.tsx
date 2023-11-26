"use client";

import Image from "next/image";
import { useEffect } from "react";

function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-10 relative">
      <div className="absolute -right-[0px] -bottom-0 -z-10">
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
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-4xl text-white font-black">
          Something went wrong!
        </h2>
        <p className="text-white/30 mt-4">API Call Reached Limit!</p>
      </div>

      <div
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="p-[2px] px-[2px] rounded-xl bg-gradient-to-tr from-[#933FFE] to-[#18C8FF] hover:from-[#c69bff] hover:to-[#a6eaff] duration-200"
      >
        <button className="bg-gradient-to-tr from-[#933FFE] to-[#18C8FF] hover:shadow-[#933FFE]/60 hover:shadow-2xl  duration-200  text-white px-6 py-4 rounded-xl">
          Try again
        </button>
      </div>
    </div>
  );
}

export default Error;
