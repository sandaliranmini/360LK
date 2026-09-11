const collageStrips = [
  { label: "Hills", image: "https://placehold.co/200x600/4a6fa5/dbe6f2?text=Hills" },
  { label: "Cultural", image: "https://placehold.co/200x600/b56b3a/f5e2d0?text=Cultural" },
  { label: "City Tours", image: "https://placehold.co/200x600/8a3a6b/f2dbe9?text=City" },
  { label: "Wildlife", image: "https://placehold.co/200x600/3a5c8a/dbe4f2?text=Wildlife" },
  { label: "Beach", image: "https://placehold.co/200x600/2f6b5c/d9ece6?text=Beach" },
];

export default function Start() {
    return(
<section className="bg-[#e8dcc3] px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="flex h-72 overflow-hidden rounded-sm shadow-lg md:h-96">
            {collageStrips.map((strip) => (
              <div key={strip.label} className="relative flex-1 overflow-hidden">
                <img src={strip.image} alt={strip.label} className="h-full w-full object-cover" />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap text-sm font-semibold tracking-wide text-white">
                  {strip.label}
                </span>
              </div>
            ))}
          </div>
 
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl leading-tight text-[#2c2416] md:text-4xl">
              Ready To Explore Sri Lanka Virtually?
            </h2>
            <p className="mt-4 text-base text-[#3f3a26]">Start with 5 free destinations. No credit card required</p>
 
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <button className="rounded-md bg-[#f5a623] px-6 py-3 text-sm font-semibold text-[#2c2416] shadow transition-colors hover:bg-[#e5981a]">
                Start Free Tour Now
              </button>
              <button className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#2c2416] shadow transition-colors hover:bg-[#f0ece0]">
                View Pricing Plans
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}
 