import React from "react";
import Image from "next/image";

import sarah from "@/assets/testimonials/sarah.png";
import james from "@/assets/testimonials/james.png";
import alex from "@/assets/testimonials/alex.png";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: sarah,
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: james,
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: alex,
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

const Testimonials = () => {
  return (
    <section
      className="w-full px-4 py-20"
      style={{
        background:
          "radial-gradient(ellipse at top, rgba(204,255,0,0.60) 0%, rgba(255,255,255,0.9) 55%, rgba(0,59,226,0.4) 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl space-y-14">

        {/* ── Top: Heading left | Description right ── */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          {/* Heading */}
          <h2 className="font-poppins text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            Discover What Our <br /> Community Is Saying
          </h2>

          {/* Description */}
          <p className="font-satoshi self-center text-sm leading-relaxed text-gray-500 md:text-base">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm"
            >
              {/* Avatar */}
              <div className="relative h-14 w-14 overflow-hidden rounded-full">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name + Role */}
              <div>
                <p className="font-poppins text-base font-semibold text-gray-900">
                  {t.name}
                </p>
                <p className="font-satoshi text-sm text-primary">{t.role}</p>
              </div>

              {/* Divider */}
              <hr className="border-gray-100" />

              {/* Quote */}
              <p className="font-satoshi text-sm leading-relaxed text-gray-500">
                {t.quote}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;