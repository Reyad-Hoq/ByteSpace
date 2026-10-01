import React from "react";
import Image from "next/image";

import LemonRing from "@/assets/shapes/lemon-ring.svg";
import LemonZigzag from "@/assets/shapes/lemon-zigzag.svg";
import LemonZigzag2 from "@/assets/shapes/lemon-zigzag2.svg"
import LemonTube from "@/assets/shapes/lemon-tube.svg";
import WhiteZigzag from "@/assets/shapes/white-zigzag.svg";
import WhiteTriangle from "@/assets/shapes/white-triangle.svg";
import WhiteCylinder from "@/assets/shapes/white-cylinder.svg";

const CreatorBanner = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-primary bg-grid-pattern px-4 py-20 text-center text-white"
    >

      {/* ── Lemon Ring — bottom left ── */}
      <Image
        src={LemonRing}
        alt=""
        width={110}
        height={110}
        className="absolute bottom-0 left-6 z-10 w-[100px] md:w-60"
      />

      {/* ── Lemon Zigzag — left center ── */}
      <Image
        src={LemonZigzag}
        alt=""
        width={60}
        height={80}
        className="absolute top-0 z-10 w-[90px] left-0 md:w-60"
      />

      {/* ── Lemon Tube / blob — top left ── */}
      <Image
        src={LemonTube}
        alt=""
        width={120}
        height={80}
        className="absolute right-15 md:right-40 top-2 z-10 w-[40px] md:w-38"
      />

      {/* ── White Zigzag — left, mid-bottom ── */}
      <Image
        src={WhiteZigzag}
        alt=""
        width={55}
        height={75}
        className="absolute top-2 md:top-6 left-15 z-10 w-[40px] md:left-48 md:w-40"
      />

      {/* White Triangle — top right */}
      <Image
        src={WhiteTriangle}
        alt=""
        width={80}
        height={100}
        className="absolute left-0 bottom-15 z-10 w-[40px] md:right-48 md:w-25"
      />

      {/* White Cylinder — right edge */}
      <Image
        src={WhiteCylinder}
        alt="whitecylinder"
        width={70}
        height={110}
        className="absolute right-0 top-1 z-10 w-[60px] md:w-50"
      />

      {/* ── Lemon Zigzag — bottom right ── */}
      <Image
        src={LemonZigzag2}
        alt="lemonzigzag-2"
        width={60}
        height={80}
        className="absolute bottom-0 right-2 z-10 w-[80px] md:right-16 md:w-70"
      />

      {/* ── Content ── */}
      <div className="relative z-20 mx-auto max-w-2xl">
        <h2 className="font-poppins text-2xl font-bold leading-snug md:text-5xl">
          Unlock Your Potential as a <br />
          Creator with ByteSpace
        </h2>

        <p className="font-satoshi mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-blue-100 md:text-base">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button className="
          mt-8 rounded-full hover:border hover:border-secondary
          hover:bg-primary
          px-8 py-3 font-poppins text-sm font-semibold
          hover:text-secondary transition-all duration-200
          bg-secondary text-black
        ">
          Join as Creator
        </button>
      </div>

    </section>
  );
};

export default CreatorBanner;