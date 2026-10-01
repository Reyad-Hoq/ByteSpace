import Image from "next/image";

import s1 from "@/assets/students/s1.png";
import s2 from "@/assets/students/s2.png";
import s3 from "@/assets/students/s3.png";
import s4 from "@/assets/students/s4.png";
import s5 from "@/assets/students/s5.png";
import s6 from "@/assets/students/s6.png";

const students = [s1, s2, s3, s4, s5, s6];

export function HappyStudentsCard() {
  return (
    <div
      className="
      md:inline-flex 
      flex-col 
      gap-2
    bg-white 
      w-30
      p-2
      hidden
      left-25
      md:px-4 md:py-3
      shadow-lg        
      md:w-70
      absolute
      z-150
      md:left-35
      lg:left-130
      md:bottom-1
      lg:bottom-5
      rounded-2xl
      text-left
    text-black/90
    "
    >
      {/* Title */}
      <div>
        <p className="text-[12px] md:text-lg font-semibold text-gray-900">Happy Students</p>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="font-satoshi text-xs text-gray-500">4.5 (240)</span>
          <span className="text-yellow-400 text-xs">★</span>
        </div>
      </div>

      {/* Avatars */}
      <div className="flex items-center">
        {/* Overlapping avatars */}
        <div className="flex -space-x-5 md:-space-x-3">
          {students.map((src, i) => (
            <div
              key={i}
              className="relative h-7 w-7 md:h-10 md:w-10 rounded-full border-2 border-white overflow-hidden"
              style={{ zIndex: students.length - i }}
            >
              <Image
                src={src}
                alt={`Student ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* 2K+ badge */}
        <div
          className="
          md:ml-2 flex h-7 w-7 md:h-10 md:w-10 shrink-0
          items-center justify-center
          rounded-full bg-secondary
        "
        >
          <span className="font-poppins text-xs font-bold text-black">2K+</span>
        </div>
      </div>
    </div>
  );
}
