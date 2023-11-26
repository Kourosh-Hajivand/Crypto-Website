import Image from "next/image";
import Link from "next/link";
async function GetData() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en",
    { cache: "no-cache", next: { revalidate: 450 } }
  );
  return res.json();
}
async function AllCoin() {
  const Data: [] = await GetData();
  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="w-full min-h-screen   relative">
      <div className="absolute -right-[0px] -bottom-40 lg:-bottom-[300px] -z-10">
        <div className="h-[600px] w-[300px] lg:h-[500px] lg:w-[500px] relative ">
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
        <div className="w-full border rounded-xl border-white/10 overflow-x-auto mt-10">
          <table className="min-w-[500px] w-full h-full  py-5 px-4 bg-[#1A1B23]/70 rounded-xl">
            <thead className="text-white text-start border-b border-b-white/10 ">
              <th className="px-2 py-10 font-extrabold tracking-wide text-center">
                #
              </th>
              <th className="px-6 py-10 font-extrabold tracking-wide min-w-[200px] text-start">
                Name
              </th>
              <th className="px-6 py-10 font-extrabold tracking-wide min-w-[200px] text-start">
                Symbol
              </th>
              <th className="px-6 py-10 font-extrabold tracking-wide min-w-[200px] text-start">
                Current Price
              </th>
              <th className="px-6 py-10 font-extrabold tracking-wide min-w-[200px] text-start">
                24h Change
              </th>
              <th className="px-6 py-10 font-extrabold tracking-wide min-w-[200px] text-start">
                Market Cap
              </th>
            </thead>
            <tbody>
              {Data.map((item: CryptoInfo, index: number) => {
                return (
                  <tr
                    key={index}
                    className="border-b border-b-white/10 hover:bg-[#1A1B23]/90 duration-100"
                  >
                    <td className="py-10 px-10 relative ">
                      <Image
                        src={item.image}
                        fill
                        alt={item.id}
                        className="object-contain p-6 "
                      />
                    </td>
                    <td className=" px-6 py-10">
                      <p className="text-white font-bold max-w-[200px] truncate">
                        {item.name}
                      </p>
                    </td>
                    <td className=" px-6 py-10">
                      <p className="text-white font-semibold">{item.symbol}</p>
                    </td>
                    <td className="text-white font-semibold px-6 py-10">
                      $ {item.current_price.toFixed(2)}
                    </td>
                    <td
                      className={`text-white font-semibold px-6 py-10 ${
                        item.price_change_percentage_24h >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {item.price_change_percentage_24h >= 0 ? "+" : null}
                      {item.price_change_percentage_24h?.toFixed(2)} %
                    </td>
                    <td className="text-white font-semibold px-6 py-10">
                      $ {numberWithCommas(item.market_cap)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Link href={"/explorecoins"}>
          <div className="p-[2px] px-[2px] rounded-xl bg-gradient-to-tr from-[#933FFE] to-[#18C8FF] hover:from-[#c69bff] hover:to-[#a6eaff] duration-200">
            <button className="bg-gradient-to-tr from-[#933FFE] to-[#18C8FF] hover:shadow-[#933FFE]/60 hover:shadow-2xl  duration-200  text-white px-6 py-4 rounded-xl">
              See more...
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AllCoin;
