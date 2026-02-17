import Hero from "@/components/Hero";
import Trending from "@/components/Trending";
import React from "react";
import outfits from "@/data";
import Search from "@/components/Search";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const featuredOutfits = outfits.slice(0, 4);

  return (
    <div>
      <Hero />
      <div className="flex flex-row justify-between items-center my-8">
        <h2 className="text-2xl font-bold">Trending Looks</h2>
        <p className="text-accent-foreground/80 hover:text-accent-foreground hover:underline hover:underline-offset-2 transition-colors">
          <Link href="/explore" className="flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8 ">
        {featuredOutfits.map((outfit) => (
          <Trending key={outfit.id} outfit={outfit} />
        ))}
      </div>
    </div>
  );
};

export default Home;
