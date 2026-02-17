'use client'

import Image from "next/image"
import { CirclePlus, Heart } from "lucide-react"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// import useFavourites from "@/hooks/useFavourites"
// import useCollection from "@/hooks/useCollection"



const Trending = ({ outfit }) => {
  const { image, title, category, price, description } = outfit;

    return (
        <Card className="group relative mx-auto w-full max-w-sm rounded-xl border-none bg-transparent p-0 shadow-none">
            <div className="relative aspect-3/5 overflow-hidden rounded-xl">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, 480px"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-b to-(--foreground)/65" />

                <Button
                    variant="ghost"
                    size="icon-sm"
                    className="absolute right-4 top-4 rounded-full bg-card/90 text-foreground shadow-sm hover:bg-card"
                    aria-label="Add to favorites"
                // onClick={() => toggleFavourite(id)}
                >
                    {/* <Heart className={`size-4 ${liked ? "fill-destructive text-destructive" : "text-foreground"}`} /> */}
                </Button>

                <CardContent className="absolute inset-x-4 bottom-4 px-0 space-y-2 text-white">
                    <Badge className="w-fit bg-card/90 text-primary shadow-sm border border-border">
                        {category || "Collection"}
                    </Badge>

                    <div className="flex items-end justify-between gap-3">
                        <CardTitle className="line-clamp-1 text-xl font-semibold text-white drop-shadow-sm">
                            {title}
                        </CardTitle>

                        <CardAction className="shrink-0 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground shadow-md">
                            ₦{price?.toLocaleString()}
                        </CardAction>

                    </div>

                    <CardDescription className="mt-1 text-sm text-white/80 drop-shadow-sm line-clamp-1">
                        {description}
                    </CardDescription>
                </CardContent>
            </div>

            <CardFooter className="px-0">
                <Button
                    variant="outline"
                    size="lg"
                    className="w-full rounded-xl border-border bg-card text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground"

                >
                    <CirclePlus className="size-4" />
                    Add to collection
                </Button>
            </CardFooter>
        </Card>
    )
}
export default Trending