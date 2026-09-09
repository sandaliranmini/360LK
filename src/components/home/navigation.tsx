  
export default function FeaturedDestination() {
    return( 
    <section className="bg-[#f0e4c8] px-6 py-16 md:px-12">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h2 className="font-serif text-2xl tracking-wide text-[#2c2416] md:text-3xl">
                Experience True 360 Navigation
              </h2>
              <p className="mt-3 text-sm text-[#5c5340]">
                Unlike static panoramas, our platform lets you move freely through locations
              </p>
  
              <h3 className="mt-8 font-serif text-lg text-[#1f5c4f]">Walk Through Sri Lanka Virtually</h3>
              <p className="mt-2 text-sm text-[#1f5c4f]">
                Our proprietary technology allows you to navigate destinations just like walking in real life.
              </p>
            </div>
  
            <div className="overflow-hidden rounded-sm shadow-lg">
              <img
                src="https://placehold.co/900x700/3f5a3a/dce8dc?text=Sri+Lanka+Map"
                alt="Interactive map of Sri Lanka's central region"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
    );
  }