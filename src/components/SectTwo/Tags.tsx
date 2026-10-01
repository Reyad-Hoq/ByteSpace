"use client";

import { useState } from "react";

const tags = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const LIMIT = 17;

const Tags = () => {
  const [selected, setSelected] = useState("Featured");
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? tags : tags.slice(0, LIMIT);

  return (
    <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-4 py-6">
      {visible.map((tag, i) => (
        <button
          key={i}
          onClick={() => setSelected(tag)}
          className={`
            rounded-full py-2 px-4 text-sm whitespace-nowrap
            transition-all duration-150 border
            ${
              selected === tag
                ? "bg-secondary text-black border-secondary font-semibold"
                : "bg-[#F5F5F6] text-gray-700 border-transparent hover:border-gray-400"
            }
          `}
        >
          {tag}
        </button>
      ))}

      <button
        onClick={() => setShowAll((prev) => !prev)}
        className="rounded-full py-2 px-4 text-sm whitespace-nowrap border border-transparent bg-[#F5F5F6] text-primary font-medium hover:border-gray-400 transition-all duration-150"
      >
        {showAll ? "− Less" : "+ More"}
      </button>
    </div>
  );
};

export default Tags;