import HeroSection from "./hero";
import LetsGrowTogetherSection from './letsgrowtogether';
import StatisticsSection from './stats';
import BlogSection from './blogs';
import Subscribe from '../components/subscribe';
import Marquee from '../components/marquee';
import Footer from '../components/footer';


export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center font-mono">
      <HeroSection />
      <LetsGrowTogetherSection />
      <StatisticsSection />
      <BlogSection />
      <Subscribe />
      <Marquee />
      <Footer />
    </main>
  );
}
