"use client"

import Hero from "./_components/hero";
import { PopularCityList } from "./_components/popularcityList";

export default function Home() {
  return (
    <div>
      <Hero/>
      <PopularCityList/>
    </div>
  );
}
