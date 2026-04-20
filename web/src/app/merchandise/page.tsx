import HeroMerchandiseSection from "./hero"
import MerchandiseSection from "./merchs"
import Subscribe from "@/components/subscribe"
import Marquee from "@/components/marquee"
import Footer from "@/components/footer"
export default function MerchandisePage(){
    return(
        <main className="w-full h-fit flex flex-col items-center font-mono">
            <HeroMerchandiseSection />
            <MerchandiseSection />
            <Subscribe />
            <Marquee />
            <Footer />
        </main>
    )
}