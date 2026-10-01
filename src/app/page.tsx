import AboutSection from "@/components/AboutSect";
import CreatorBanner from "@/components/CreatorSect";
import Footer from "@/components/Footer";
import HeroSect from "@/components/HeroSect";
import Navbar from "@/components/Navbar";
import SectOne from "@/components/SectOne";
import SectTwo from "@/components/SectTwo";
import Testimonials from "@/components/TestimonialsSect";
export default function Home() {
  return (
    <div className="font-satoshi">
      <Navbar />
      <HeroSect />
      <SectOne />
      <SectTwo />
      <AboutSection />
      <CreatorBanner />
      <Testimonials />
      <Footer />
    </div>
  );
}
