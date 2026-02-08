import { motion } from "framer-motion";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import ServiceSlider from "../../components/ServiceSlider";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },  
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70 },
  },
};

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-primary/30 py-36">
      {/* PARALLAX DECOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        className="absolute inset-0 pointer-events-none"
      >
        <Circles />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col xl:flex-row gap-x-14 items-center"
        >
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            className="text-center xl:text-left xl:w-[35%]"
          >
            <motion.h2
              variants={fadeUp}
              className="h2 mb-4"
            >
              Services<span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="max-w-[420px] mx-auto xl:mx-0 mb-10 text-white/70"
            >
              I help businesses and individuals turn ideas into high-performing
              digital products — blending strategy, design, and development into
              experiences that convert and scale.
            </motion.p>

            {/* MICRO CTA */}
            <motion.div
              variants={fadeUp}
              className="text-sm text-accent tracking-wide"
            >
              Scroll → Discover more
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={fadeUp}
            className="xl:w-[65%] w-full"
          >
            <ServiceSlider />
          </motion.div>
        </motion.div>
      </div>

      {/* FLOATING BULB */}
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