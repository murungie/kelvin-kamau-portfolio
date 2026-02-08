import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Product Manager",
    message:
      "Kelvin delivered exactly what we needed — a scalable, well-structured web application with clean code and solid documentation. His ability to understand business requirements and translate them into technical solutions is impressive.",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Startup Founder",
    message:
      "Working with Kelvin was smooth from start to finish. He automated several workflows for our team using Zapier and Make, saving us countless hours each week. Highly reliable and proactive.",
  },
  {
    image: "/t-avt-3.png",
    name: "John Doe",
    position: "Technical Lead",
    message:
      "Kelvin has a strong grasp of both frontend and backend development. He also supported our Web3 integration by building and testing smart contracts securely. A great problem-solver and communicator.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[420px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-6 md:px-16">
            {/* LEFT: avatar + name */}
            <div className="w-full max-w-[300px] flex flex-col items-center text-center mx-auto md:mx-0">
              <div className="mb-3">
                <Image
                  src={person.image}
                  width={96}
                  height={96}
                  alt={person.name}
                  className="rounded-full"
                />
              </div>

              <div className="text-lg font-medium">{person.name}</div>
              <div className="text-[12px] uppercase tracking-widest text-white/60">
                {person.position}
              </div>
            </div>

            {/* RIGHT: quote */}
            <div className="flex-1 flex flex-col justify-center relative md:pl-16">
              {/* divider */}
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-[180px] w-[1px] bg-white/20" />

              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-hidden
                />
              </div>

              {/* message */}
              <p className="text-center md:text-left xl:text-lg text-white/80 leading-relaxed">
                {person.message}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;