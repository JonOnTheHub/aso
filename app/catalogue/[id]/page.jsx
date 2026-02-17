import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import outfits from "@/data";

const CatalogueDetailPage = async ({ params }) => {
  const { id } = await params;
  const outfitRequest = outfits.find(item => item.id === parseInt(id))
  return (
    <Card>
      <div className="flex flex-col justify-center items-start gap-6 p-4 md:flex-row md:py-6">
        <div>
          <Image
            src={outfitRequest.image}
            alt={outfitRequest.title}
            width={"400"}
            height={"400"}
            className="relative z-20 aspect-[1] w-full object-cover rounded-lg md:aspect-3/4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <CardTitle className="text-3xl font-bold tracking-tight">{outfitRequest.title}</CardTitle>
          <CardDescription className="text-lg">
            {outfitRequest.description}
          </CardDescription>
          <p className="font-light italic text-md tracking-wider">{outfitRequest.price}</p>
        </div>
      </div>
    </Card>
  );
};

export default CatalogueDetailPage;
