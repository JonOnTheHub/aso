import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowLeft } from "lucide-react"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section className="space-y-6 my-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-charcoal">Wear the Culture</h2>
          <p className="text-gray-500 mt-2 text-lg font-fregan">Explore the finest collection of contemporary
            African fashion.</p>
        </div>
        <div className="flex gap-2">
          <Button
            className="w-10 h-10 rounded-full border bg-primary/10  flex items-center justify-center hover:bg-primary/30 hover:text-white transition-colors">
            <span className="text-primary ">
              <ArrowLeft />
            </span>
          </Button>
          <Button
            className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            <span className="dark:text-white">
              <ArrowRight />
            </span>
          </Button>
        </div>
      </div>
      <div
        className="w-full h-125 md:h-150 relative rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
        >
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800"
            alt="Hero Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-10 md:p-16 w-full text-white">
          <span
            className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-4">Featured
            Selection</span>
          <h3 className="text-4xl md:text-6xl font-bold mb-4">Vibrant Traditions</h3>
          <p className="text-gray-200 text-lg md:text-xl  mb-8 max-w-2xl">Experience the rich heritage
            of handwoven fabrics designed for modern royalty. Every thread tells a story of elegance and
            identity.</p>
          <Button className="flex items-center gap-3 bg-[#2a2a2a] text-white font-medium hover:gap-5 transition-all rounded-full border-0 px-6 py-6 ">
            Discover Collection <span className="">
              <ArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
export default Hero

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
