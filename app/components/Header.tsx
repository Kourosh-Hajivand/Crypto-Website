import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

function Header() {
  return (
    <div
      className={`fixed duration-200  top-0 left-0 w-full py-5 z-10 border-b border-b-white/10 bg-black/10 backdrop-blur-md`}
    >
      <div className="w-full flex items-center justify-between max-w-[1440px] gap-5 mx-auto px-6">
        <div className="items-center justify-center flex gap-5">
          <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] relative">
            <Image
              src={"/PersonalLogo.png"}
              alt="Personal"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl text-white font-bold hidden md:block">
            Crypto
          </h1>
        </div>
        <div className="w-full max-w-[400px] rounded-2xl px-4 lg:px-6 border border-white/20 flex items-center gap-2 py-3 lg:py-4">
          <MagnifyingGlassIcon className="w-6 h-6 text-white" />
          <input
            className="flex-1 text-white outline-none bg-transparent placeholder:text-white/40"
            placeholder="Search Coin here...."
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
