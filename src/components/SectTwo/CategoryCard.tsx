import {
  Pen,
  Code2,
  Monitor,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";

const categories = [
  { label: "Design",       icon: <Pen size={25} /> },
  { label: "Development",  icon: <Code2 size={25} /> },
  { label: "IT & Software",icon: <Monitor size={25} /> },
  { label: "Business",     icon: <Building2 size={25} /> },
  { label: "Marketing",    icon: <Megaphone size={25} /> },
  { label: "Photography",  icon: <Camera size={25} /> },
];

const CategoryCards = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {categories.map((cat, i) => (
          <button
            key={i}
            className="
              group flex flex-col items-center gap-4
              rounded-2xl border border-gray-200 bg-white
              px-4 py-6 shadow-sm
              transition-all duration-200
              hover:border-secondary hover:shadow-md
            "
          >
            {/* Icon circle */}
            <div className="
              flex h-14 w-14 items-center justify-center
              rounded-full bg-secondary text-black
              transition-transform duration-200 group-hover:scale-110
            ">
              {cat.icon}
            </div>

            {/* Label */}
            <span className="font-satoshi text-xs md:text-[16px] font-medium text-gray-800 whitespace-nowrap">
              {cat.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;