import Image from "next/image";
import { SearchOpt } from "./SearchField";
import heroImage from "../assets/hero-image.png";
import Elipse from "../assets/Ellipse-lemon.svg";
import ZigzagLemon from "../assets/zigzag-lemon.svg";
import Cone from "../assets/Cone-lemon.svg";
import Ring from "../assets/ring-white.svg";
import ZigzagWhiteOne from "../assets/zigzag-white.svg";
import ZigzagWhiteTwo from "../assets/zigzag-white-2.svg";
import Triangle from "../assets/triangle-white.svg";

const HeroSect = () => {
  return (
    <section className="relative overflow-hidden flex flex-col bg-primary min-h-140 md:h-screen bg-grid-pattern text-white text-center space-y-4 py-0 md:pt-15 md:px-4 px-0">
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
        top-80
        z-10
        w-20
        md:top-90
        lg:top-30
        md:w-40
        lg:w-80"
      />
      <Image
        src={Ring}
        alt="hero image"
        width={500}
        height={500}
        className=" 
        absolute
        -left-4
        top-120
        z-100
        w-20
        md:top-140
        lg:top-150
        md:left-1
        lg:left-1/6
        md:w-40
        lg:w-80"
      />
      <Image
        src={ZigzagWhiteOne}
        alt="hero image"
        width={500}
        height={500}
        className=" 
        absolute
        left-20
        top-70
        z-100
        w-10
        md:top-82
        lg:top-85
        md:right-1
        lg:left-50
        md:w-25
        lg:w-50"
      />
      <Image
        src={ZigzagWhiteTwo}
        alt="hero image"
        width={500}
        height={500}
        className=" 
        absolute
        -right-4
        top-120
        z-100
        w-25
        md:top-140
        lg:top-138
        md:-right-8
        lg:right-75
        md:w-40
        lg:w-80"
      />
      <Image
        src={Triangle}
        alt="hero image"
        width={500}
        height={500}
        className=" 
        absolute
        right-15
        top-70
        z-100
        w-12
        md:top-82
        lg:top-85
        md:right-50
        md:w-25
        lg:w-50"
      />
      <Image
        src={Cone}
        alt="hero image"
        width={500}
        height={500}
        className=" 
        absolute
        right-0
        top-85
        z-10
        w-15
        md:top-90
        lg:top-30
        md:w-35
        lg:w-70"
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
        w-90
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
        -bottom-4 
        left-1/2 
        -translate-x-1/2 
        w-50 
        max-w-lg
        md:w-100
        lg:w-200"
      />
      <div
        className="
      absolute
      z-150
      left-155
      bottom-72 
      bg-white 
      text-lg  
      text-gray-500 
      py-4 px-3 
      rounded-2xl
      text-left"
      >
        <h1 className="font-bold text-lg text-black/90">UI/UX Design</h1>
        <p className="text-sm font-semibold">200 Courses . 1000+ Students </p>
      </div>
      <div
        className="
      absolute
      z-150
      right-150
      bottom-72 
      bg-white 
      text-lg  
      text-black/90 
      py-4 px-3 
      rounded-2xl
      text-left"
      >
        <p className="text-sm font-semibold">Learning Progress</p>
        <h1 className="font-bold text-lg text-black/90">UI/UX Design</h1>
      </div>
    </section>
  );
};

export default HeroSect;
