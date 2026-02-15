"use client";

import { motion } from "framer-motion";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { fadeIn } from "../variants";

const services = [
  {
    title: "Full Stack Development",
    desc: "Architecting scalable, secure web & mobile applications using modern frameworks. From MVPs to enterprise platforms built for long-term growth.",
  },
  {
    title: "Automation & AI Systems",
    desc: "AI integrations, intelligent workflows & automation pipelines that reduce operational friction and increase efficiency.",
  },
  {
    title: "Blockchain Solutions",
    desc: "Decentralized applications, smart contracts & secure Web3 ecosystems engineered for reliability and performance.",
  },
];

const projects = [
  {
    title: "Enterprise SaaS Platform",
    desc: "Multi-tenant SaaS system with advanced analytics, role-based access control & cloud-native deployment.",
  },
  {
    title: "AI Automation Dashboard",
    desc: "Intelligent data processing dashboard with AI decision logic & automated reporting workflows.",
  },
  {
    title: "Blockchain Marketplace",
    desc: "Secure decentralized trading platform with smart contracts and wallet integrations.",
  },
];

const Home = () => {
  return (
    <div className="bg-primary/60 relative overflow-hidden text-white">

      {/* ================= HERO SECTION (LOCKED HEIGHT) ================= */}
      <section className="relative h-screen">

        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">

            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              Transforming Ideas <br />
              Into <span className="text-accent">Digital Reality</span>
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-white/80"
            >
              I’m a <span className="font-semibold">Full Stack Developer & Writer</span>{" "}
              building secure, scalable digital systems that combine performance,
              design, and measurable business impact. From intelligent automation
              systems to decentralized architectures, I develop solutions that
              remain adaptable in rapidly evolving markets.
            </motion.p>

            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>

            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE AREA */}
        <div className="w-[1280px] h-full absolute right-0 bottom-0 pointer-events-none">

          <div
            role="img"
            className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge"
            aria-hidden
          />

          <ParticlesContainer />

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1 }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
          >
            <Avatar />
          </motion.div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-28 bg-gradient-to-b from-black to-primary/20 relative z-10">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl font-semibold text-teal-500">Engineering Services</h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Comprehensive digital solutions engineered for scalability, security,
            and long-term technological sustainability.
          </p>
        </div>

        <div className="container mx-auto grid md:grid-cols-3 gap-10">
          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-accent transition duration-500"
            >
              <h3 className="text-xl font-semibold mb-4 text-emerald-500">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/services"
            className="px-10 py-4 border border-accent text-accent rounded-full hover:bg-accent hover:text-black transition-all duration-300"
          >
            View More Services →
          </a>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-28 bg-gradient-to-b from-black to-primary/20 relative z-10">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl font-semibold text-teal-500">Featured Projects</h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Selected systems demonstrating technical depth, performance engineering,
            and scalable architecture.
          </p>
        </div>

        <div className="container mx-auto grid md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href="/work"
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-accent transition duration-500"
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-600">
                {project.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {project.desc}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/work"
            className="px-10 py-4 bg-accent text-black font-semibold rounded-full hover:scale-105 transition duration-300"
          >
            Explore Full Portfolio →
          </a>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 py-28 bg-gradient-to-b from-black to-primary/20 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-6 text-teal-500">
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-white/60 mb-10">
            Let’s collaborate and transform your idea into a high-performance
            digital product.
          </p>

          <a
            href="/contact"
            className="px-12 py-5 bg-orange-500 text-black font-semibold rounded-full hover:scale-110 transition-all duration-300"
          >
            Contact Me →
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;