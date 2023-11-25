import Image from "next/image";

async function GetTopCoin() {
  const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
  return res.json();
}
async function TopCoin() {
  const data = await GetTopCoin();
  console.log(data.coins);
  const SlicedArry = data.coins.slice(0, 6);
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 max-w-[1440px] mx-auto py-10 ">
      <h1 className="text-4xl lg:text-6xl text-white font-black">TopCoin</h1>
      <p className="text-white/40  text-xl">
        Top trending coins as searched by users in the last 24 hours
      </p>
      <div className="grid grid-cols-3 gap-5 w-full">
        {SlicedArry.map((item: CoinItem, index: number) => {
          return (
            <div
              className="bg-[#1A1B23] px-6 py-4 rounded-2xl text-white"
              key={index}
            >
              <div className="w-16 h-16 rounded-full relative overflow-hidden">
                <Image
                  fill
                  src={item.item.large}
                  alt={item.item.id}
                  className="object-contain"
                />
              </div>
              <p>{item.item.slug}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopCoin;
