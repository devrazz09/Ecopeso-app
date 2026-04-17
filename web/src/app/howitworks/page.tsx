import HeroHowItWorksSection from "./hero"
import HowItWorksContent from "./content"
import HowItWorksFeatures from "./feautres"
import Subscribe from "@/components/subscribe"
import Marquee from "@/components/marquee"
import Footer from "@/components/footer"
export default function HowItWorksPage(){
    return(
        <main className="w-full h-fit font-mono">
            <HeroHowItWorksSection />
            <HowItWorksContent />
            <HowItWorksFeatures />
            <Subscribe />
            <Marquee />
            <Footer />
        </main>
    )
}