import Hero from "@/components/Hero";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <h1 className="home flex justify-center align-middle text-yellow-900 font-semibold">
        This is the homepage
      </h1>
    </div>
  );
};

export default Home;
