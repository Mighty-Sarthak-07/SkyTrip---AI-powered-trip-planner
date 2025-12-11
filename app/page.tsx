"use client"

import Footer from "./_components/footer";
import Hero from "./_components/hero";
import { PopularCityList } from "./_components/popularcityList";

export default function Home() {
  return (
    <div>
      <Hero/>
      <PopularCityList/>
      <Footer/>
    </div>
  );
}
