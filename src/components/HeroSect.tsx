import Image from "next/image";
import { SearchOpt } from "./SearchField";
import heroImage from "../assets/hero-image.png";
import Elipse from "../assets/Ellipse-lemon.svg";
import ZigzagLemon from "../assets/zigzag-lemon.svg";
import Cone from "../assets/Cone-lemon.svg";

const HeroSect = () => {
  return (
    <section className="relative overflow-hidden flex flex-col bg-primary h-screen bg-grid-pattern text-white text-center space-y-4 py-0 md:pt-15 md:px-4 px-0">
      <div>
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-semibold font-poppins">
          Get Access to Hundreds <br /> Courses Available
        </h1>
        <p className="text-md md:text-lg font-light font-satoshi py-6">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
      </div>

      <div>
        <SearchOpt />
      </div>
      <Image
        src={ZigzagLemon}
        alt="hero image"
        width={500}
        height={500}
        className=" 
        absolute
        left-0
        top-100
        z-10
        w-20
        md:top-90
        lg:top-65
        md:w-50
        lg:w-70"
      />
      <Image
        src={Cone}
        alt="hero image"
        width={500}
        height={500}
        className=" 
        absolute
        right-0
        top-105
        z-10
        w-15
        md:top-90
        lg:top-65
        md:w-50
        lg:w-60"
      />
      <Image
        src={Elipse}
        alt="hero image"
        width={500}
        height={500}
        className="
        absolute 
        z-10
        -bottom-5 
        left-1/2 
        -translate-x-1/2 
        w-10
        md:w-5xl"
      />
      <Image
        src={heroImage}
        alt="hero image"
        width={500}
        height={500}
        className="
        absolute 
        z-20
        bottom-0 
        left-1/2 
        -translate-x-1/2 
        w-full 
        max-w-lg
        md:w-130"
      />
    </section>
  );
};

export default HeroSect;
