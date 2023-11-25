import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

function Header() {
  return (
    <div
      className={`fixed duration-200  top-0 left-0 w-full py-5 z-10 border-b border-b-white/10 bg-black/10 backdrop-blur-md`}
    >
      <div className="w-full flex items-center justify-between max-w-[1440px] mx-auto">
        <div className="w-[60px] h-[60px] relative">
          <Image src={"/PersonalLogo.png"} alt="Personal" fill />
        </div>
        <div className="w-full max-w-[400px] rounded-2xl  px-6 border border-white/20 flex items-center gap-2 py-4">
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
