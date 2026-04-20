import HeroDonationSection from "./hero"
import DonationSection from "./donation"
import Subscribe from "@/components/subscribe"
import Marquee from "@/components/marquee"
import Footer from '../../components/footer';
export default function DonatePage(){
    return(
        <main className="w-full h-fit flex flex-col">
            <HeroDonationSection />
            <DonationSection />
            <Subscribe />
            <Marquee />
            <Footer />
        </main>
    )
}