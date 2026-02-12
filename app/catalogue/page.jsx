import OutfitCard from "@/components/OutfitCard";
import React from "react";
import outfits from "@/data";

const CataloguePage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-8">
      {outfits.map((outfit) => (
        <OutfitCard
          key={outfit.id}
          outfit={outfit}
        />
      ))}
    </div>
  );
};

export default CataloguePage;
