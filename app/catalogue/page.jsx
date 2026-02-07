import OutfitCard from "@/components/OutfitCard";
import React from "react";
import outfits from "@/data";

const Catalogue = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-8">
      {outfits.map((o) => (
        <OutfitCard
          key={o.id}
          title={o.title}
          description={o.description}
          image={o.image}
          category={o.category}
          price={o.price}
        />
      ))}
    </div>
  );
};

export default Catalogue;
