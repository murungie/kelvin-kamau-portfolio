import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { motion } from "framer-motion";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";
import { serviceData } from "./serviceData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ServiceSlider = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          320: { slidesPerView: 1.05, spaceBetween: 16 },
          640: { slidesPerView: 1.5, spaceBetween: 18 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        className="pb-28"   // ⬅ important: space for dots + CTA
      >
        {serviceData.map((item, i) => (
          <SwiperSlide key={i}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="
                group relative
                h-[360px] sm:h-[380px]
                rounded-2xl
                bg-[rgba(65,47,123,0.28)]
                backdrop-blur-xl
                border border-white/10
                p-6
                flex flex-col
                overflow-hidden
              "
            >
              {/* ICON */}
              <div className="text-3xl text-accent mb-4">
                <item.Icon />
              </div>

              {/* TITLE */}
              <h3 className="text-base font-semibold mb-2">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <div className="relative flex-1">
                <motion.p
                  className="
                    text-sm text-white/70 leading-relaxed
                    sm:opacity-0 sm:translate-y-6
                    sm:group-hover:opacity-100
                    sm:group-hover:translate-y-0
                    transition-all duration-300
                  "
                >
                  {item.description}
                </motion.p>
              </div>

              {/* FOOTER */}
              <div className="flex items-center justify-between pt-4">
                <Link
                  href="/work"
                  className="
                    text-xs uppercase tracking-widest
                    text-white/60 hover:text-accent
                    transition
                  "
                >
                  Explore
                </Link>

                <RxArrowTopRight
                  className="
                    text-xl
                    text-white/60
                    group-hover:text-accent
                    group-hover:rotate-45
                    transition-all duration-300
                  "
                />
              </div>

              {/* GLOW */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-[radial-gradient(circle_at_bottom,rgba(239,68,68,0.35),transparent_65%)]
                "
              />
            </motion.article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CTA */}
      <div className="relative z-30 flex justify-center mt-6">
        <Link
          href="/contact"
          className="
            inline-flex items-center gap-2
            px-6 py-3 rounded-full
            bg-accent text-primary font-semibold
            hover:scale-105 transition
            shadow-lg shadow-accent/30
          "
        >
          Let’s Connect
          <RxArrowTopRight />
        </Link>
      </div>
    </div>
  );
};

export default ServiceSlider;