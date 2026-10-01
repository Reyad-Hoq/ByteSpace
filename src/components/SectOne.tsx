"use client";

import Image from "next/image";
import { motion, useAnimationControls } from "motion/react";

import l1 from "@/assets/logo-1.svg";
import l2 from "@/assets/logo-2.svg";
import l3 from "@/assets/logo-3.svg";
import l4 from "@/assets/logo-4.svg";
import l5 from "@/assets/logo-3.svg";

const logos = [
  { src: l1, name: "Logoipsum" },
  { src: l2, name: "Logoipsum" },
  { src: l3, name: "Logoipsum" },
  { src: l4, name: "Logoipsum" },
  { src: l5, name: "Logoipsum" },
];

const tripled = [...logos, ...logos, ...logos];

const SectOne = () => {
  const controls = useAnimationControls();

  return (
    <div className="w-full flex items-center justify-center overflow-hidden bg-[#F5F5F6] md:h-40 py-5">
      <motion.div
        className="flex w-max gap-12"
        animate={controls}
        initial={{ x: "0%" }}
        onViewportEnter={() =>
          controls.start({
            x: ["0%", "-50%"],
            transition: { duration: 20, ease: "linear", repeat: Infinity },
          })
        }
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() =>
          controls.start({
            x: ["0%", "-50%"],
            transition: { duration: 20, ease: "linear", repeat: Infinity },
          })
        }
      >
        {tripled.map((logo, i) => (
          <div key={i} className="flex shrink-0 items-center gap-3">
            <Image src={logo.src} alt={logo.name} width={36} height={36} />
            <p className="font-poppins text-xs md:text-lg font-semibold text-gray-400">
              {logo.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectOne;