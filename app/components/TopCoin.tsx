import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
async function GetTopCoin() {
  const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
  return res.json();
}
async function TopCoin() {
  const data = await GetTopCoin();
  console.log(data.coins);
  const SlicedArry = data.coins.slice(0, 6);
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 max-w-[1440px] px-10 mx-auto my-32 ">
      <h1 className="text-4xl lg:text-6xl text-white font-black">TopCoin</h1>
      <p className="text-white/40  text-xl">
        Top trending coins as searched by users in the last 24 hours
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-10">
        {SlicedArry.map((item: CoinItem, index: number) => {
          return (
            <Link
              href={`/coin/${item.item.id}`}
              className="bg-[#1A1B23] border border-transparent hover:border-[#933FFE] hover:shadow-lg hover:shadow-[#933FFE]/50 duration-200 px-6 py-4 rounded-2xl text-white"
              key={index}
            >
              <div className=" flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-full relative overflow-hidden">
                    <Image
                      fill
                      src={item.item.large}
                      alt={item.item.id}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="text-lg font-semibold max-w-[150px] truncate">
                      {item.item.name}
                    </h5>
                    <p className="text-sm text-white/50">{item.item.symbol}</p>
                  </div>
                </div>
                <p className="font-semibold">
                  {item.item.price_btc.toString().substring(0, 8)}
                  <span className="font-semibold ml-1">BTC</span>
                </p>
              </div>
              <button className="flex items-center mt-2 text-[#9b5fea]">
                See more <ChevronRightIcon className="w-7 h-7" />
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TopCoin;
