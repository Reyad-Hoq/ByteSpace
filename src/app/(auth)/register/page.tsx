import Image from "next/image";
import Link from "next/link";
import course1 from "@/assets/courses/course2.jpg";
import course2 from "@/assets/courses/course3.jpg";
import av1 from "@/assets/students/s1.png";
import av2 from "@/assets/students/s2.png";
import av3 from "@/assets/students/s3.png";
import av4 from "@/assets/students/s4.png";
import av5 from "@/assets/students/s5.png";
import av6 from "@/assets/students/s6.png";
import LemonRing from "@/assets/ring-lemon.svg";
import LemonTriangle from "@/assets/shapes/lemon-tube.svg";
import ZigzagWhite from "@/assets/zigzag-white.svg";


const avatars = [av1, av2, av3, av4, av5, av6];

const RegisterPage = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-primary bg-grid-pattern px-4 py-10">

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2">

        {/* ── Left: Info + Visual ── */}
        <div className="relative flex flex-col gap-6 text-white mb-35
        ">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/icon.png" alt="ByteSpace" width={28} height={28} />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-poppins text-lg font-semibold">
              Sign up and come in
            </h2>
            <p className="font-satoshi mt-2 max-w-xs text-sm leading-relaxed text-blue-200">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost.
            </p>
          </div>

          {/* ── Floating course cards visual ── */}
          <div className="relative h-80 w-full">
            {/* Card 1 — back */}
            <div className="absolute left-1 top-20 z-10 w-50 md:w-80 overflow-hidden rounded-2xl p-3 bg-white shadow-xl">
              <div className="relative h-35 w-full">
                <Image
                  src={course1}
                  alt="course"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute bottom-2 left-2 flex gap-1">
                  <span className="rounded-full bg-black/50 px-2 py-0.5 text-[9px] text-white backdrop-blur-sm">
                    17 Lessons
                  </span>
                  <span className="rounded-full bg-black/50 px-2 py-0.5 text-[9px] text-white backdrop-blur-sm">
                    2 hrs 16 m
                  </span>
                </div>
              </div>
              <div className="p-3">
                <p className="font-poppins text-xs font-semibold text-gray-900">
                  Build Digi...
                </p>
                <p className="font-satoshi text-[10px] text-gray-400">
                  by punspearl studio
                </p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="font-satoshi text-[10px] text-gray-500">
                    Beginner
                  </span>
                  <div className="flex items-center gap-0.5">
                    <span className="font-satoshi text-[10px] text-gray-600">
                      4.5
                    </span>
                    <span className="text-[10px] text-yellow-400">★</span>
                  </div>
                </div>
                <div className="mt-1.5 flex items-center">
                  <div className="flex -space-x-1.5">
                    {avatars.map((av, i) => (
                      <div
                        key={i}
                        className="relative h-5 w-5 overflow-hidden rounded-full border border-white"
                        style={{ zIndex: avatars.length - i }}
                      >
                        <Image src={av} alt="" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-black">
                    <span className="font-poppins text-[8px] font-bold text-white">
                      26+
                    </span>
                  </div>
                </div>
                <p className="font-poppins mt-1.5 text-sm font-bold text-primary">
                  $25
                  <span className="font-satoshi text-[9px] font-normal text-gray-400">
                    /lifetime
                  </span>
                </p>
              </div>
            </div>

            {/* Card 2 — front */}
            <div className="absolute left-22 top-0 z-20 w-60 md:w-80 overflow-hidden rounded-2xl p-3 bg-white shadow-xl">
              <div className="relative h-35 w-full">
                <Image src={course2} alt="course" fill className="object-fit rounded-lg" />
                <div className="absolute bottom-2 left-2 space-x-3">
                  <span className="rounded-full bg-white/50 px-2.5 py-1.5 text-[9px] text-white backdrop-blur-sm">
                    17 Lessons
                  </span>
                  <span className="rounded-full bg-white/50 px-2.5 py-1.5 text-[9px] text-white backdrop-blur-sm">
                    2 hrs 16 m
                  </span>
                  <span className="rounded-full bg-white/50 px-2.5 py-1.5 text-[9px] text-white backdrop-blur-sm">
                    59 Connectivity
                  </span>
                </div>
              </div>
              <div className="p-3">
                <p className="font-poppins text-xs font-semibold text-gray-900">
                  the Power of Big Data
                </p>
                <p className="font-satoshi text-[10px] text-gray-400">
                  by punspearl studio
                </p>
                <span className="font-satoshi text-[10px] text-gray-500">
                  Beginner
                </span>
                <div className="mt-1.5 flex items-center">
                  <div className="flex -space-x-1.5">
                    {avatars.map((av, i) => (
                      <div
                        key={i}
                        className="relative h-5 w-5 overflow-hidden rounded-full border border-white"
                        style={{ zIndex: avatars.length - i }}
                      >
                        <Image src={av} alt="" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-black">
                    <span className="font-poppins text-[8px] font-bold text-white">
                      26+
                    </span>
                  </div>
                </div>
                <p className="font-poppins mt-1 text-sm font-bold text-primary">
                  $25
                  <span className="font-satoshi text-[9px] font-normal text-gray-400">
                    /lifetime
                  </span>
                </p>
              </div>
            </div>
            {/* Happy Students card */}
            <div className="absolute -bottom-25 right-22 z-30 w-55 rounded-2xl bg-secondary px-4 py-3 shadow-xl">
              <p className="font-poppins text-sm font-semibold text-black">
                Happy Students
              </p>
              <div className="font-satoshi mt-0.5 flex items-center gap-1 text-sm text-black/70">
                4.5 (240) <span className="text-primary">★</span>
              </div>
              <div className="mt-2 flex items-center">
                <div className="flex -space-x-3">
                  {avatars.map((av, i) => (
                    <div
                      key={i}
                      className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-secondary"
                      style={{ zIndex: avatars.length - i }}
                    >
                      <Image src={av} alt="" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="ml-1 flex h-7 w-7 items-center justify-center rounded-full bg-black">
                  <span className="font-poppins text-[10px] font-bold text-white">
                    2K+
                  </span>
                </div>
              </div>
            </div>

            {/* Lemon Ring shape */}
            <Image
              src={LemonRing}
              alt="lemon-ring-shape"
              width={200}
              height={150}
              className="absolute left-5 top-2 z-100 w-28"
            />

            {/* Lemon triangle shape */}
            <Image
              src={LemonTriangle}
              alt=""
              width={50}
              height={50}
              className="absolute -bottom-33 left-3 md:z-100 w-32"
            />

            {/* white zigzag shape */}
            <Image
              src={ZigzagWhite}
              alt=""
              width={50}
              height={50}
              className="absolute -bottom-10 right-12 z-100 w-35"
            />
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div className="w-full  md:w-md rounded-3xl bg-white p-8 space-y-10 shadow-2xl">
          {/* Form header */}
          <p className="font-satoshi text-sm font-medium text-primary">
            Create an Account
          </p>
          <h1 className="font-poppins mt-1 text-3xl font-bold text-gray-900">
            Welcome to <br /> ByteSpace
          </h1>

          {/* Form */}
          <form className="mt-8 flex flex-col gap-5">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="font-satoshi text-sm text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Jamie Davis"
                className="
                  w-full rounded-xl border border-gray-200
                  px-4 py-3 font-satoshi text-sm text-gray-800
                  outline-none placeholder:text-gray-300
                  focus:border-primary transition-colors duration-150
                "
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="font-satoshi text-sm text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="designer@example.com"
                className="
                  w-full rounded-xl border border-gray-200
                  px-4 py-3 font-satoshi text-sm text-gray-800
                  outline-none placeholder:text-gray-300
                  focus:border-primary transition-colors duration-150
                "
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="font-satoshi text-sm text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="
                  w-full rounded-xl border border-gray-200
                  px-4 py-3 font-satoshi text-sm text-gray-800
                  outline-none placeholder:text-gray-300
                  focus:border-primary transition-colors duration-150
                "
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                mt-2 ml-auto w-full md:w-30 rounded-full bg-secondary
                py-3 font-poppins text-sm font-semibold text-black
                transition-all duration-200 hover:bg-secondary/80
              "
            >
              Continue
            </button>
          </form>

          {/* Login link */}
          <p className="font-satoshi mt-20 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
