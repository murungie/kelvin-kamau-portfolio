"use client";

import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const ongoingProjects = [
  {
    title: "AI-Powered Business Assistant",
    desc: "Building an intelligent workflow assistant that automates operations and reporting for SMEs.",
  },
  {
    title: "Cloud SaaS Platform Upgrade",
    desc: "Migrating legacy infrastructure to scalable, containerized cloud-native architecture.",
  },
];

const upcomingProjects = [
  {
    title: "Decentralized Identity System",
    desc: "A Web3 identity solution focused on privacy, ownership, and secure authentication.",
  },
  {
    title: "AI Content Automation Suite",
    desc: "Automated content generation and publishing system powered by LLM integrations.",
  },
];

const testimonials = [
  {
    name: "Startup Founder",
    quote:
      "Kamau delivered beyond expectations. The system was fast, scalable, and designed with long-term growth in mind.",
  },
  {
    name: "Operations Director",
    quote:
      "Our workflow automation reduced manual tasks by over 60%. Extremely reliable and well-engineered solution.",
  },
];

const Work = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#0f172a] py-32 xl:py-36 text-white overflow-hidden">

      <Circles />

      {/* Glow Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-[140px] top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      <div className="container mx-auto">

        {/* ================= SELECTED WORK ================= */}
        <div className="flex flex-col xl:flex-row gap-x-12 items-center mb-28">

          <div className="text-center xl:text-left xl:w-[32vw] flex flex-col mb-10 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="h2 xl:mt-10"
            >
              Selected <span className="text-accent">Work</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="max-w-[420px] mx-auto xl:mx-0 mb-6"
            >
              A curated collection of projects where I design, build, and ship
              scalable digital products across SaaS, automation, and Web3 ecosystems.
            </motion.p>

            <motion.p
              variants={fadeIn("up", 0.55)}
              initial="hidden"
              animate="show"
              className="max-w-[420px] mx-auto xl:mx-0 text-sm text-white/60"
            >
              Each project focuses on performance, usability, and long-term
              maintainability.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>

        {/* ================= ONGOING ================= */}
        <section className="mb-24">
          <h3 className="text-3xl font-semibold text-center mb-12">
            Ongoing Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {ongoingProjects.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-accent transition duration-500"
              >
                <h4 className="text-xl font-semibold text-accent mb-4">
                  {item.title}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= UPCOMING ================= */}
        <section className="mb-24">
          <h3 className="text-3xl font-semibold text-center mb-12">
            Upcoming Innovations
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingProjects.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-2xl border border-white/10 hover:border-accent transition duration-500"
              >
                <h4 className="text-xl font-semibold text-accent mb-4">
                  {item.title}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="mb-28">
          <h3 className="text-3xl font-semibold text-center mb-12">
            What Clients Say
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10"
              >
                <p className="text-white/80 italic mb-4">
                  “{item.quote}”
                </p>
                <p className="text-accent text-sm font-semibold">
                  — {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="text-center">
          <h3 className="text-3xl font-semibold mb-6">
            Have a Project in Mind?
          </h3>

          <p className="text-white/60 mb-10 max-w-xl mx-auto">
            Let’s collaborate to design and engineer a solution that drives measurable impact.
          </p>

          <a
            href="/contact"
            className="px-12 py-5 bg-accent text-black font-semibold rounded-full hover:scale-110 hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition-all duration-300"
          >
            Start a Project →
          </a>
        </section>

      </div>

      <Bulb />
    </div>
  );
};

export default Work;