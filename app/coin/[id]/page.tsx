import Chart from "@/app/components/Detailcoin/Chart";
import Image from "next/image";

async function DynamicCoin(id: string) {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, {
    cache: "force-cache",
  });
  return res.json();
}
async function DynamicCoinChart(id: string) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`,
    {
      cache: "force-cache",
    }
  );
  return res.json();
}
async function page({ params }: { params: { id: string } }) {
  // const CoinChart = await DynamicCoinChart(params.id);
  const DynamicCoinData = await DynamicCoin(params.id);
  console.log("====================================");
  console.log(DynamicCoinData);
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
      <div className="w-full min-h-screen flex items-start justify-center  max-w-[1440px] gap-10 px-6 mx-auto">
        <div className="w-full h-[300px] bg-[#1A1B23]/70 rounded-xl backdrop-blur mt-32 px-6 py-4">
          {/* Image */}
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-[100px] h-[100px] relative">
                <Image
                  src={DynamicCoinData?.image.large!}
                  fill
                  alt={DynamicCoinData.id}
                />
              </div>
              <div className="flex  flex-col gap-5">
                <h5 className="text-2xl font-bold text-white">
                  {DynamicCoinData.name}
                </h5>
                <p className="text-white/30">
                  #{DynamicCoinData.market_cap_rank}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <p
                className={` font-semibold px-6 py-10 ${
                  DynamicCoinData.market_data.price_change_percentage_24h >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                (
                {DynamicCoinData.market_data.price_change_percentage_24h >= 0
                  ? "+"
                  : null}
                {DynamicCoinData.market_data.price_change_percentage_24h.toFixed(
                  2
                )}{" "}
                % )
              </p>
              <p className="text-2xl text-white">
                ${DynamicCoinData.market_data.current_price.usd}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* {CoinChart.prices && (
          <Chart id={params.id} chartData={CoinChart.prices} />
        )} */}
    </div>
  );
}

export default page;
