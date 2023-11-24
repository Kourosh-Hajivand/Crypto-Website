import Image from "next/image";

function Hero() {
  return (
    <div className="w-full  h-screen  relative">
      <div className="absolute right-0 bottom-0">
        <div className="h-[200px] w lg:h-screen lg:w-[500px] relative">
          <Image
            src={"/texture.png"}
            fill
            className="object-cover"
            alt="texture"
          />
        </div>
      </div>
      <div className="absolute -left-40 top-0">
        <div className="h-[500px] w-[600px] relative">
          <Image
            src={"/texture1.png"}
            fill
            className="object-fill"
            alt="texture"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
