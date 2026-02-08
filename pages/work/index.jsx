import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-32 xl:py-36 flex items-center relative">
      <Circles />

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-10 items-center">

          {/* LEFT: TEXT */}
          <div className="text-center xl:text-left xl:w-[32vw] flex flex-col mb-10 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-10"
            >
              Selected <span className="text-accent">Work</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[420px] mx-auto xl:mx-0 mb-6"
            >
              A curated collection of projects where I design, build, and ship
              scalable digital products. My work spans full-stack web
              applications, custom WordPress systems, workflow automation, and
              Web3 integrations.
            </motion.p>

            <motion.p
              variants={fadeIn("up", 0.55)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[420px] mx-auto xl:mx-0 text-sm text-white/60"
            >
              Each project focuses on performance, usability, and long-term
              maintainability — built to solve real business problems, not just
              look good.
            </motion.p>
          </div>

          {/* RIGHT: SLIDER */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Work;