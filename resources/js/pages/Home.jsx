import React from "react";
import Carousel from "../components/Carousel";
import ShopBy from "../components/ShopBy";
import GenInfo, { Brands } from "../components/GenInfo";

const Home = () => {
  return (
    <div className="mx-auto max-w-screen-xl xs:w-[95vw] xs:max-w-[95vw] md:w-full">
      <Carousel />
      <GenInfo />
      <Brands />

      <div className="xs:mx-2 md:w-full md:max-w-full sm:mx-auto">
        <div className="mb-3 mt-10 flex items-end justify-between border-b border-slate-200 pb-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Trending</p>
            <h2 className="bestS text-2xl font-bold text-slate-900">Best Sellers</h2>
          </div>
          <span className="text-xs text-slate-400">Updated daily</span>
        </div>

        <div>
          <ShopBy title="" filter="bestSellers" />
        </div>

        <div className="mb-3 mt-10 flex items-end justify-between border-b border-slate-200 pb-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Quality Picks</p>
            <h2 className="bestS text-2xl font-bold text-slate-900">Top Rated</h2>
          </div>
          <span className="text-xs text-slate-400">4.0 stars and above</span>
        </div>

        <div>
          <ShopBy title="" filter="topRated" />
        </div>
      </div>
    </div>
  );
};

export default Home;
