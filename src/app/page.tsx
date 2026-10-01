import AboutSection from "@/components/AboutSect";
import Footer from "@/components/Footer";
import HeroSect from "@/components/HeroSect";
import Navbar from "@/components/Navbar";
import SectOne from "@/components/SectOne";
import SectTwo from "@/components/SectTwo";
export default function Home() {
  return (
    <div className="font-satoshi">
      <Navbar />
      <HeroSect />
      <SectOne/>
      <SectTwo/>
      <AboutSection/>
      <Footer/>
    </div>
  );
}
