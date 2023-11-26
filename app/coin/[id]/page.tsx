import Image from "next/image";

function page({ params }: { params: { id: string } }) {
  console.log("====================================");
  console.log(params.id);
  console.log("====================================");
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
      <div className="absolute -right-[150px] -bottom-24  -z-10">
        <div className="h-[600px] w-[600px] relative">
          <Image
            src={"/texture4.png"}
            fill
            className="object-contain animate-pulse"
            alt="texture"
          />
        </div>
      </div>
      <div className="absolute -left-60 -top-44 lg:-left-10 -z-10">
        <div className="h-[600px] w-[600px] relative">
          <Image
            src={"/texture4.png"}
            fill
            className="object-fill animate-pulse"
            alt="texture"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
