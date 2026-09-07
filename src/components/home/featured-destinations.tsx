type Destination = { name: string; image: string };
const destinations = [
  {
    name: "Sigiriya Rock Fortress",
    image: "/images/FD_01.png",
  },
  {
    name: "Temple of the Tooth Relic",
    image: "/images/FD_02.png",
  },
  {
    name: "Unawatuna Beach",
    image: "/images/FD_03.png",
  },
  {
    name: "Yala National Park",
    image: "/images/FD_04.png",
  },
];
      

export default function FeaturedDestination() {
    return(
    <section className="bg-[#faf6ec] px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl text-center">
            <h2 className="font-serif text-2xl tracking-wide text-[#2c2416] md:text-3xl">Featured Destinations</h2>
          <p className="mt-2 text-sm tracking-wide text-[#5c5340]">
            Start your journey with our most popular destinations
          </p>
 
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
            {destinations.map((d) => (
              <div key={d.name} className="group relative aspect-square overflow-hidden rounded-sm shadow-md">
                <img src={d.image} alt={d.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-0 right-0 text-center text-sm font-medium text-white md:text-base">
                  {d.name}
                </p>
              </div>
            ))}
          </div>
 
          <button className="mt-10 rounded-full bg-[#c9c49a] px-8 py-3 text-sm font-medium text-[#2c2416] shadow transition-colors hover:bg-[#bdb686]">
            View all destinations
          </button>
        </div>
      </section>
    );
}