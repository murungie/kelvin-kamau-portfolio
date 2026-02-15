import { motion } from "framer-motion";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import ServiceSlider from "../../components/ServiceSlider";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-primary/30 py-36">

      {/* ===== Background ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        className="absolute inset-0 pointer-events-none"
      >
        <Circles />
      </motion.div>

      <div className="container mx-auto relative z-10">

        {/* ===== EXISTING TOP SECTION (UNCHANGED STRUCTURE) ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col xl:flex-row gap-x-14 items-center mb-28"
        >
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            className="text-center xl:text-left xl:w-[35%]"
          >
            <motion.h2 variants={fadeUp} className="h2 mb-4">
              End-to-End Digital Product
              <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="max-w-[420px] mx-auto xl:mx-0 mb-10 text-white/70"
            >
              From infrastructure and AI systems to brand positioning and growth —
              I design, build, and scale modern digital products.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="text-sm text-accent tracking-wide"
            >
              Scroll → Discover more
            </motion.div>
          </motion.div>

          {/* RIGHT SLIDER (UNCHANGED) */}
          <motion.div
            variants={fadeUp}
            className="xl:w-[65%] w-full"
          >
            <ServiceSlider />
          </motion.div>
        </motion.div>

        {/* ===================================================== */}
        {/* ===== NEW PREMIUM SERVICES SHOWCASE SECTION ===== */}
        {/* ===================================================== */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-24"
        >

          {/* ===== ENGINEERING & ARCHITECTURE ===== */}
          <motion.div variants={fadeUp} className="text-center">
            <h3 className="text-3xl font-semibold mb-4">
              Engineering & Architecture
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              Scalable systems designed for performance, intelligence, and resilience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Integrated Platforms",
                desc: "LLM integrations, automation pipelines, and intelligent workflows that enhance decision-making.",
              },
              {
                title: "Distributed Architecture",
                desc: "Event-driven microservices, API ecosystems, and scalable backend systems.",
              },
              {
                title: "Cloud-Native Infrastructure",
                desc: "Containerized deployments, CI/CD pipelines, and production-grade environments.",
              },
              {
                title: "Scalable Data Systems",
                desc: "High-performance databases, caching layers, and messaging systems built for growth.",
              },
              {
                title: "Security & Observability",
                desc: "Zero-trust architecture, monitoring, logging, and production hardening.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-accent/40"
              >
                <h4 className="text-lg font-semibold mb-3 group-hover:text-accent transition">
                  {item.title}
                </h4>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ===== PRODUCT ENGINEERING ===== */}
          <motion.div variants={fadeUp} className="text-center pt-16">
            <h3 className="text-3xl font-semibold mb-4">
              Product Engineering
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto mb-10">
              Building complete, maintainable digital products ready for real-world scale.
            </p>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="max-w-3xl mx-auto bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8"
            >
              <h4 className="text-xl font-semibold mb-3 text-accent">
                SaaS Product Engineering
              </h4>
              <p className="text-white/70">
                Multi-tenant platforms engineered for scalability, performance,
                and long-term evolution.
              </p>
            </motion.div>
          </motion.div>

          {/* ===== GROWTH & BRAND ===== */}
          <motion.div variants={fadeUp} className="text-center pt-16">
            <h3 className="text-3xl font-semibold mb-4">
              Growth & Brand Systems
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto mb-14">
              Scaling visibility, strengthening identity, and positioning products
              for measurable market success.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Digital Growth & SEO",
                  desc: "Technical SEO, analytics integration, and conversion-driven performance optimization.",
                },
                {
                  title: "Brand & Identity Systems",
                  desc: "Logo systems, visual identity frameworks, and UI direction aligned with strategy.",
                },
                {
                  title: "Product Launch Strategy",
                  desc: "Go-to-market planning, funnel architecture, and measurable growth experimentation.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-accent/40 transition-all duration-300"
                >
                  <h4 className="font-semibold mb-3 group-hover:text-accent transition">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Floating Bulb (kept intact) */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Bulb />
      </motion.div>

    </section>
  );
};

export default Services;