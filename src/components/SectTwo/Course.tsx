import Image, { StaticImageData } from "next/image";
import { ChartColumn } from "@gravity-ui/icons";
import Course1 from "@/assets/courses/course1.jpg";
import Course2 from "@/assets/courses/course2.jpg";
import Course3 from "@/assets/courses/course3.jpg";
import Course4 from "@/assets/courses/course4.jpg";
import Course5 from "@/assets/courses/course5.jpg";
import Course6 from "@/assets/courses/course6.jpg";

import s1 from "@/assets/students/s1.png";
import s2 from "@/assets/students/s2.png";
import s3 from "@/assets/students/s3.png";
import s4 from "@/assets/students/s4.png";
import s5 from "@/assets/students/s5.png";
import s6 from "@/assets/students/s6.png";

const students = [s1, s2, s3, s4, s5, s6];

type Course = {
  id: number;
  title: string;
  creator: string;
  rating: number;
  level: string;
  lessons: number;
  duration: string;
  comments: number;
  price: number;
  thumbnail: string | StaticImageData;
  avatars: string[] | StaticImageData[];
  totalStudents: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    creator: "punspearl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    thumbnail: Course1,
    avatars: [...students],
    totalStudents: "26+",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    creator: "punspearl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    thumbnail: Course2,
    avatars: [...students],
    totalStudents: "26+",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    creator: "punspearl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    thumbnail: Course3,
    avatars: [...students],
    totalStudents: "26+",
  },
  {
    id: 4,
    title: "Balancing Productivity and...",
    creator: "punspearl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    thumbnail: Course4,
    avatars: [...students],
    totalStudents: "26+",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    creator: "punspearl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    thumbnail: Course5,
    avatars: [...students],
    totalStudents: "26+",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    creator: "punspearl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    thumbnail: Course6,
    avatars: [...students],
    totalStudents: "26+",
  },
];

const Course = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-200 hover:shadow-lg"
          >
            {/* Thumbnail */}
            <div className="relative h-44 w-full shrink-0">
              <Image
                src={course.thumbnail}
                alt={course.title}
                fill
                className="object-cover"
              />

              {/* Overlay badges */}
              <div className="absolute bottom-3 left-2 right-2 flex items-center justify-between gap-1">
                {[
                  {
                    label: `${course.lessons} Lessons`,
                  },
                  { label: course.duration },
                  {
                    label: `${course.comments} Comments`,
                  },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 rounded-full bg-[#F6F6F699] px-2 py-1 text-black/90 backdrop-blur-sm"
                  >
                    <span className="whitespace-nowrap text-[10px]">
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-3 p-4">
              {/* Title + Rating */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="line-clamp-2 font-poppins text-sm font-semibold leading-snug text-gray-900">
                  {course.title}
                </h3>
                <div className="flex shrink-0 items-center gap-0.5">
                  <span className="font-satoshi text-sm font-medium text-gray-700">
                    {course.rating}
                  </span>
                  <span className="text-sm text-yellow-400">★</span>
                </div>
              </div>

              {/* Creator */}
              <p className="font-satoshi text-xs text-gray-500">
                by <span className="text-primary">{course.creator}</span>
              </p>

              {/* Level + Avatars */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <ChartColumn size={14} className="text-gray-400" />
                  <span className="font-satoshi text-xs text-gray-500">
                    {course.level}
                  </span>
                </div>

                {/* Avatar stack */}
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {course.avatars.map((av, i) => (
                      <div
                        key={i}
                        className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-white"
                        style={{ zIndex: course.avatars.length - i }}
                      >
                        <Image
                          src={av}
                          alt="student"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="ml-1 flex h-7 w-7 items-center justify-center rounded-full bg-secondary">
                    <span className="font-poppins text-[10px] font-bold text-black">
                      {course.totalStudents}
                    </span>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Price */}
              <p className="font-poppins text-base font-bold text-primary">
                ${course.price}
                <span className="font-satoshi text-xs font-normal text-gray-400">
                  /lifetime
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Course;
