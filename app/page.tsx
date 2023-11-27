import { timeStamp } from "console";
import AllCoin from "./components/AllCoin";
import Hero from "./components/Hero";
import TopCoin from "./components/TopCoin";
import HeroCanves from "./components/canves/HeroCanves";
import Loading from "./loading";

async function GetServerPing() {
  const res = await fetch("https://api.coingecko.com/api/v3/ping");
  return res.json();
}
async function AllCoinData() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en",
    { cache: "no-cache" }

    // next: { revalidate: 450 }
  );
  console.log(res.ok);
  return res.json();
}
async function GetTopCoin() {
  const res = await fetch("https://api.coingecko.com/api/v3/search/trending", {
    cache: "no-cache",
    // next: { revalidate: 10000 },
  });
  console.log(res.ok);

  return res.json();
}
export default async function MyComponent() {
  const GetServerPings = await GetServerPing();
  const AllCoinApi = await AllCoinData();
  const GetTopCoinApi = await GetTopCoin();

  // console.log(AllCoinApi);

  return (
    <div>
      {/* <HeroCanves /> */}
      <Hero />
      {GetTopCoinApi && <TopCoin data={GetTopCoinApi.coins} />}
      {AllCoinApi && <AllCoin data={AllCoinApi} />}
    </div>
  );
}
