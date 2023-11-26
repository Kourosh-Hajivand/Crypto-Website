import Image from "next/image";
async function GetData() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en",
    { next: { revalidate: 450 } }
  );
  return res.json();
}
async function AllCoin() {
  const Data: [] = await GetData();

  return (
    <div className="w-full min-h-screen overflow-x-hidden  relative">
      <div className="absolute -right-[400px] -bottom-40 lg:-bottom-[400px] -z-10">
        <div className="h-[600px] w-[300px] lg:h-[1000px] lg:w-[1000px] relative ">
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
      <div className="w-full flex flex-col items-center justify-center gap-5 max-w-[1440px] px-6 mx-auto my-32 ">
        <h1 className="text-4xl lg:text-6xl text-white font-black">
          Explore the Crypto Universe
        </h1>
        <p className="text-white/40  max-w-[850px] text-xs text-center lg:text-xl">
          Dive into the Crypto Universe: Real-time prices, insights, and
          information for every digital asset at your fingertips.
        </p>
        <div className="w-full overflow-x-auto">
          <table className="min-w-[500px] w-full h-full py-5 px-4 bg-[#1A1B23]/40 rounded-xl">
            <thead className="text-white text-start ">
              <th className="px-2 py-4  bg-red-900 text-center">#</th>
              <th className="px-6 py-4 min-w-[200px] bg-emerald-500 text-start">
                Name
              </th>
              <th className="px-6 py-4 min-w-[200px] bg-emerald-800 text-start">
                Symbol
              </th>
              <th className="px-6 py-4 min-w-[200px] bg-emerald-400 text-start">
                Current Price
              </th>
              <th className="px-6 py-4 min-w-[200px] bg-emerald-700 text-start">
                24h Change
              </th>
              <th className="px-6 py-4 min-w-[200px] bg-emerald-900 text-start">
                Market Cap
              </th>
            </thead>
            <tbody>
              {Data.map((item: CryptoInfo, index: number) => {
                return (
                  <tr key={index}>
                    <td className="py-7 min-w-[60px] max-w-[60px] max-h-[60px]  min-h-[60px]  rounded-full relative  bg-red-900">
                      <Image
                        src={item.image}
                        fill
                        alt={item.id}
                        className="object-contain"
                      />
                    </td>
                    <td className=" bg-emerald-500 px-6 py-4">
                      <p className="text-white font-semibold">{item.name}</p>
                    </td>
                    <td className=" bg-emerald-800 px-6 py-4">
                      <p className="text-white font-semibold">{item.symbol}</p>
                    </td>

                    <td className="text-white font-semibold bg-emerald-400 px-6 py-4">
                      {item.current_price}
                    </td>
                    <td className="text-white font-semibold bg-emerald-700 px-6 py-4">
                      {item.price_change_percentage_24h}
                    </td>
                    <td className="text-white font-semibold bg-emerald-900 px-6 py-4">
                      {item.market_cap}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllCoin;
