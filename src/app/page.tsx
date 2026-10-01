import HeroSect from "@/components/HeroSect";
import Navbar from "@/components/Navbar";
import SectOne from "@/components/SectOne";
export default function Home() {
  return (
    <div className="font-satoshi">
      <Navbar />
      <HeroSect />
      <SectOne/>
    </div>
  );
}
