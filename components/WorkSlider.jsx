import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Full Stack Web Platform",
          path: "/thumb1.jpg",
          link: "/projects/fullstack-platform",
        },
        {
          title: "Custom WordPress System",
          path: "/thumb2.jpg",
          link: "/projects/wordpress-system",
        },
        {
          title: "Automation Dashboard",
          path: "/thumb3.jpg",
          link: "/projects/automation-dashboard",
        },
        {
          title: "Web3 Smart Contract App",
          path: "/thumb4.jpg",
          link: "/projects/web3-app",
        },
      ],
    },
    {
      images: [
        {
          title: "CRM Integration",
          path: "/thumb4.jpg",
          link: "/projects/crm-integration",
        },
        {
          title: "SaaS Landing Page",
          path: "/thumb1.jpg",
          link: "/projects/saas-landing",
        },
        {
          title: "API-Based Platform",
          path: "/thumb2.jpg",
          link: "/projects/api-platform",
        },
        {
          title: "Workflow Automation",
          path: "/thumb3.jpg",
          link: "/projects/workflow-automation",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={24}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="w-full"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {slide.images.map((image, imageI) => (
              <div
                key={imageI}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group bg-black"
              >
                {/* IMAGE */}
                <Image
                  src={image.path}
                  alt={image.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                             opacity-0 group-hover:opacity-100 transition duration-500"
                  aria-hidden
                />

                {/* CONTENT */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <div className="translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className="text-sm font-semibold mb-2">
                      {image.title}
                    </h4>

                    <Link
                      href={image.link}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent hover:underline"
                    >
                      View Project
                      <BsArrowRight aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;