import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import outfits from "@/data";

const CatalogueDetailPage = async ({ params }) => {
  const { id } = await params;
  const outfitRequest = outfits.find(item => item.id === parseInt(id))
  return (
    <Card>
      <div className="flex justify-center items-center">
        <div>
          <Image
            src={outfitRequest.image}
            alt={outfitRequest.title}
            width={"400"}
            height={"400"}
            className="relative z-20 aspect-video w-full object-cover rounded-lg"
          />
        </div>
        <div className="ml-6">
          <CardTitle className="text-3xl font-bold">{outfitRequest.title}</CardTitle>
          <CardDescription className="text-lg mt-4">
            {outfitRequest.description}
          </CardDescription>
          <p className="mt-4">{outfitRequest.price}</p>
        </div>
      </div>
    </Card>
  );
};

export default CatalogueDetailPage;
