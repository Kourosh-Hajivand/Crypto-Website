import AllCoin from "./components/AllCoin";
import Hero from "./components/Hero";
import TopCoin from "./components/TopCoin";
import HeroCanves from "./components/canves/HeroCanves";

export default function MyComponent() {
  return (
    <div>
      {/* <HeroCanves /> */}
      <Hero />
      <TopCoin />
      <AllCoin />
    </div>
  );
}
