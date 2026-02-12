import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const OutfitCard = ({ outfit }) => {
  const { title, category, description, image } = outfit;
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35 rounded-t-2xl" />
      <Image
        src={image}
        width={"400"}
        height={"800"}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover  rounded-t-2xl"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{category}</Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="min-h-8">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Add To Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default OutfitCard;
