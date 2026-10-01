import Image from "next/image";
import { CheckCircle, BarChart2, BookOpen, Clock } from "lucide-react";

// ── replace with your actual assets ──
import personOne from "@/assets/hero-image.png";
import personTwo from "@/assets/hero-image2.png";
import LemonZig1 from "@/assets/lemonzig1.png";
import LemonZig2 from "@/assets/lemonzig2.png";
import Course from "@/assets/courses/course1.jpg"
import s1 from "@/assets/students/s1.png";
import s2 from "@/assets/students/s2.png";
import s3 from "@/assets/students/s3.png";
import s4 from "@/assets/students/s4.png";
import s5 from "@/assets/students/s5.png";
import s6 from "@/assets/students/s6.png";

const students = [s1, s2, s3, s4, s5, s6];

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16",  label: "Creators" },
];

const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

// const avatars = [av1, av2, av3];

const AboutSection = () => {
  return (
    <section className="w-full overflow-hidden bg-linear-to-br from-secondary/70 via-white to-primary/80 px-4 py-20">
      <div className="mx-auto max-w-6xl space-y-28">

        {/* ── Row 1: Text left | Visual right ── */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-8">

          {/* Left — text */}
          <div className="flex flex-col gap-6 md:w-1/2">
            <h2 className="font-poppins text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Your Path to Professional <br />Growth Starts Here!
            </h2>

            <p className="font-satoshi text-sm leading-relaxed text-gray-500">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-10">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-poppins text-2xl font-bold text-primary">
                    {s.value}
                  </span>
                  <span className="font-satoshi text-sm text-gray-400">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <div className="relative flex h-[420px] w-full items-center justify-center md:w-1/2">

            {/* Person */}
            <div className="relative z-10 h-[380px] w-full">
              <Image
                src={personOne}
                alt="Student"
                fill
                className="object-contain object-bottom"
              />
            </div>

            {/* Lemon zigzag top-right */}
            <Image
              src={LemonZig2}
              alt=""
              width={80}
              height={100}
              className="absolute right-0 top-0 z-0 w-16 md:w-40"
            />

            {/* Course card — top left */}
            <div className="absolute left-0 top-8 z-5 w-70 rounded-2xl bg-white p-3 shadow-lg">
              <div className="relative h-20 w-full overflow-hidden rounded-xl">
                <Image
                  src={Course}
                  alt="course"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-1 left-1 right-1 flex gap-1">
                  {[
                    { icon: <BookOpen size={8} />, label: "17 Lessons" },
                    { icon: <Clock size={8} />,     label: "2 hrs 16 m" },
                  ].map((b, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-0.5 rounded-full bg-black/50 px-1.5 py-0.5 text-white"
                    >
                      {b.icon}
                      <span className="text-[8px]">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="font-poppins mt-2 text-xs font-semibold text-gray-900">
                Learn Figma fro...
              </p>
              <p className="font-satoshi text-[10px] text-gray-400">
                by punspearl studio
              </p>
              <div className="mt-1 flex items-center gap-1">
                <BarChart2 size={10} className="text-gray-400" />
                <span className="font-satoshi text-[10px] text-gray-500">Beginner</span>
              </div>
              <p className="font-poppins mt-1 text-sm font-bold text-primary">
                $25<span className="font-satoshi text-[10px] font-normal text-gray-400">/lifetime</span>
              </p>
            </div>

            {/* Learning Progress card — right */}
            <div className="absolute bottom-16 right-0 z-20 w-[160px] rounded-2xl bg-white p-4 shadow-lg">
              <p className="font-satoshi text-xs text-gray-400">
                Learning Progress
              </p>
              <p className="font-poppins text-4xl font-bold text-gray-900">55%</p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100">
                <div className="h-1.5 w-[55%] rounded-full bg-secondary" />
              </div>
            </div>

          </div>
        </div>

        {/* ── Row 2: Visual left | Text right ── */}
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-8">

          {/* Left — visual */}
          <div className="relative flex h-[460px] w-full items-center justify-center md:w-1/2">

            {/* Person */}
            <div className="relative z-100 h-[420px] w-full">
              <Image
                src={personTwo}
                alt="Creator"
                fill
                className="object-contain object-bottom"
              />
            </div>

            {/* Lemon zigzag */}
            <Image
              src={LemonZig1}
              alt=""
              width={80}
              height={100}
              className="absolute right-10 top-10 z-0 w-16 md:w-40"
            />

            {/* Total Revenue card */}
            <div className="absolute left-0 top-12 z-20 w-[180px] rounded-2xl bg-primary p-4 shadow-lg">
              <p className="font-satoshi text-xs text-blue-200">Total Revenue</p>
              <p className="font-satoshi mt-0.5 text-[10px] text-blue-300">July 2023</p>
              <p className="font-poppins mt-1 text-xl font-bold text-white">$120.29</p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-blue-800">
                <div className="h-1.5 w-[40%] rounded-full bg-secondary" />
              </div>
            </div>

            {/* Year to Date card */}
            <div className="absolute bottom-28 left-0 z-20 w-[180px] rounded-2xl bg-primary p-4 shadow-lg">
              <p className="font-satoshi text-xs text-blue-200">Year to Date</p>
              <p className="font-satoshi mt-0.5 text-[10px] text-blue-300">2023</p>
              <p className="font-poppins mt-1 text-xl font-bold text-white">$1,200.38</p>
              <div className="mt-1 flex items-center gap-1">
                <span className="rounded-full bg-secondary px-2 py-0.5 font-poppins text-[10px] font-bold text-black">
                  +12%
                </span>
              </div>
            </div>

            {/* Happy Students card */}
            <div className="absolute bottom-4 left-80 z-120 w-[200px] rounded-2xl bg-white p-3 shadow-lg">
              <p className="font-poppins text-sm font-semibold text-gray-900">
                Happy Students
              </p>
              <div className="font-satoshi mt-0.5 flex items-center gap-1 text-xs text-gray-400">
                <span className="text-yellow-400">★</span> 4.5 (240)
              </div>
              <div className="mt-2 flex items-center">
                <div className="flex -space-x-2">
                  {students.map((av, i) => (
                    <div
                      key={i}
                      className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-white"
                      style={{ zIndex: students.length - i }}
                    >
                      <Image src={av} alt="student" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="ml-1 flex h-7 w-7 items-center justify-center rounded-full bg-secondary">
                  <span className="font-poppins text-[10px] font-bold text-black">
                    2K+
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right — text */}
          <div className="flex flex-col gap-6 md:w-1/2">
            <h2 className="font-poppins text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Create & Manage <br />Courses Easily.
            </h2>

            <p className="font-satoshi text-sm leading-relaxed text-gray-500">
              <span className="font-semibold text-gray-800">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-3">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={20} className="shrink-0 text-primary" />
                  <span className="font-satoshi text-sm text-gray-700">{f}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;