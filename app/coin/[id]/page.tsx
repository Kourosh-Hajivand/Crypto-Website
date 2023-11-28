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
  const CoinChart = await DynamicCoinChart(params.id);
  const DynamicCoinData = await DynamicCoin(params.id);
  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
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
        <div className="w-full h-full bg-[#1A1B23]/70 rounded-xl backdrop-blur mt-32 px-6 py-4">
          {/* top Part */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-[100px] h-[100px] relative">
                <Image
                  src={DynamicCoinData?.image.large!}
                  fill
                  alt={DynamicCoinData.id}
                  className="object-contain"
                />
              </div>
              <div className="flex  flex-col gap-5">
                <h5 className="text-2xl font-bold text-white">
                  {DynamicCoinData.name} ({DynamicCoinData.symbol})
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
                {DynamicCoinData.market_data.price_change_percentage_24h >= 0
                  ? "+"
                  : null}
                {DynamicCoinData.market_data.price_change_percentage_24h.toFixed(
                  2
                )}{" "}
                %
              </p>
              <p className="text-2xl text-white font-bold">
                ${DynamicCoinData.market_data.current_price.usd.toFixed(2)}
              </p>
            </div>
          </div>
          {/* Chart */}
          <div className="w-full flex flex-col lg:flex-row gap-5 mt-10">
            <div className="w-full md:max-w-[500px] lg:max-w-[700px] xl:max-w-[900px] h-full lg:h-[500px]">
              {CoinChart.prices && (
                <Chart id={params.id} chartData={CoinChart.prices} />
              )}
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div className="w-full h-[130px] bg-[#1A1B23]/80 rounded-xl p-4 gap-3 flex flex-col justify-center items-center">
                <h5 className="text-sm font-semibold text-white/60">
                  Highest Value in the Last 24H
                </h5>
                <p className="text-white font-semibold">
                  $ {DynamicCoinData.market_data.high_24h.usd.toFixed(2)}
                </p>
              </div>
              <div className="w-full h-[130px] bg-[#1A1B23]/80 rounded-xl p-4 gap-3 flex flex-col justify-center items-center">
                <h5 className="text-sm font-semibold text-white/60">
                  Lowest Value in the Last 24H
                </h5>
                <p className="text-white font-semibold">
                  $ {DynamicCoinData.market_data.low_24h.usd.toFixed(2)}
                </p>
              </div>
              <div className="w-full h-[130px] bg-[#1A1B23]/80 rounded-xl p-4 gap-3 flex flex-col justify-center items-center">
                <h5 className="text-sm font-semibold text-white/60">
                  Market Value
                </h5>
                <p className="text-white font-semibold">
                  {numberWithCommas(DynamicCoinData.market_data.market_cap.usd)}
                </p>
              </div>
            </div>
          </div>
          <div
            className="text-lg text-neutral-100 dangerous-html mt-4 bg-[#1A1B23]/80 p-6 rounded-xl"
            dangerouslySetInnerHTML={{ __html: DynamicCoinData.description.en }}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
