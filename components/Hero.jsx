import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-12 py-20 md:flex-row">
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl">
          Designed By Culture.
        </h1>
        <p className="max-w-md text-lg text-primary font-light">
          A curated lookbook of modern Nigerian fashion.
        </p>
        <Button>Explore Now</Button>
      </div>

      <div className="flex-1">
        <div className="overflow-hidden rounded-lg shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800"
            alt="Hero Image"
            width={400}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <section className="flex flex-col items-center justify-between gap-12 py-20 md:flex-row">
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
          Designed By Culture.
        </h1>
        <p className="max-w-md text-lg text-slate-600">
          A curated lookbook of modern Nigerian fashion.
        </p>
      </div>

      <div className="flex-1">
        <div className="overflow-hidden rounded-lg shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800"
            alt="Hero Image"
            width={400}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section> */
}
