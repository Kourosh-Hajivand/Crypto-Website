import Chart from "@/app/components/Detailcoin/Chart";
import Image from "next/image";

async function DynamicCoin(id: string) {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, {
    cache: "no-cache",
  });
  return res.json();
}
async function DynamicCoinChart(id: string) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`,
    {
      cache: "no-cache",
    }
  );
  return res.json();
}
async function page({ params }: { params: { id: string } }) {
  const CoinChart = await DynamicCoinChart(params.id);

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
      <div>
        {CoinChart.prices && (
          <Chart id={params.id} chartData={CoinChart.prices} />
        )}
      </div>
    </div>
  );
}

export default page;
