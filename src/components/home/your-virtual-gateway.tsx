import { Hourglass, MapPin, RotateCw, Film, Users, DollarSign, GraduationCap, Eye } from "lucide-react";

const highlightCards = [
  {
    icon: Hourglass,
    image: "public\images\YVG_01.png",
    title: "2500+ Years",
    subtitle: "of History",
  },
  {
    icon: MapPin,
    image: "public\images\YVG_02.png",
    title: "100+ Destinations",
    subtitle: "To Explore",
  },
  {
    icon: RotateCw,
    image: "public\images\YVG_03.png",
    title: "360 Experiences",
    subtitle: "Immersive Tours",
  },
  {
    icon: Film,
    image: "public\images\YVG_04.png",
    title: "High-Quality 4K",
    subtitle: "Virtual Tours",
  },
];
 

<section className="bg-[#f0e4c8] px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-serif text-2xl tracking-wide text-[#2c2416] md:text-3xl">
            Your Virtual Gateway to Sri Lanka
          </h2>
          <p className="mt-2 text-sm tracking-wide text-[#5c5340]">
            Discover the island's treasures through cutting-edge technology
          </p>
 
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
            {highlightCards.map(({ icon: Icon, image, title, subtitle }) => (
              <div key={title} className="group relative aspect-[3/4] overflow-hidden rounded-sm shadow-md">
                <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute left-1/2 top-1/3 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f5f1e6]">
                  <Icon className="h-6 w-6 text-[#2c2416]" strokeWidth={1.5} />
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                  <p className="text-sm font-semibold leading-tight md:text-base">{title}</p>
                  <p className="text-xs md:text-sm">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>