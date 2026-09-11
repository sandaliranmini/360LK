import YourVirtualGateway from "@/components/home/your-virtual-gateway"
import FeaturedDestination from "@/components/home/featured-destinations";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/home/hero-video";
import Navigation from "@/components/home/navigation";
import Explore from "@/components/home/explore";

export default function HomePage(){
    return (
        <>

<Navbar/>

<Hero/>

<YourVirtualGateway/>

<FeaturedDestination/>

<Navigation/>

<Explore/>

<Footer/>

</>
    );
}

