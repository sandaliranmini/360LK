export default function Start() {
    return(
<section className="bg-[#e8dcc3] px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="flex h-72 overflow-hidden rounded-sm shadow-lg md:h-96">
           <img src="\images\start.png" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /> 
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
 