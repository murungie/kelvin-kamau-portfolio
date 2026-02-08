import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaSlack,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiNotion,
  SiZapier,
  SiAirtable,
  SiMailchimp,
  SiAdobecreativecloud,
  SiEthereum,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

/* ======================
   ABOUT DATA
====================== */
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          { icon: FaHtml5, name: "HTML5" },
          { icon: FaCss3, name: "CSS3" },
          { icon: FaJs, name: "JavaScript" },
          { icon: FaReact, name: "React" },
          { icon: SiNextdotjs, name: "Next.js" },
          { icon: FaWordpress, name: "WordPress" },
        ],
      },
      {
        title: "UI / UX Design",
        icons: [
          { icon: FaFigma, name: "Figma" },
          { icon: SiFramer, name: "Framer" },
          { icon: SiAdobecreativecloud, name: "Adobe Creative Cloud" },
        ],
      },
      {
        title: "Automation & SaaS",
        icons: [
          { icon: SiZapier, name: "Zapier" },
          { icon: SiAirtable, name: "Airtable" },
          { icon: SiMailchimp, name: "Mailchimp" },
          { icon: FaSlack, name: "Slack" },
          { icon: SiNotion, name: "Notion" },
        ],
      },
      {
        title: "Web3 & Blockchain",
        icons: [{ icon: SiEthereum, name: "Ethereum" }],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Full Stack Developer & Automation Consultant",
        stage: "2014 – Present",
      },
      {
        title: "WordPress Plugin & Systems Developer",
        stage: "2016 – Present",
      },
      {
        title: "Web & Mobile Application Developer",
        stage: "2012 – 2014",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "MSc Computer Science – Murang’a University of Technology",
        stage: "In Progress",
      },
      {
        title: "BSc Computer Science – Murang’a University of Technology",
        stage: "2014",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col xl:flex-row gap-x-6">
        {/* LEFT */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="h2"
          >
            Hi, I’m <span className="text-accent">Kelvin</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[520px] mx-auto xl:mx-0 mb-8 px-2 xl:px-0"
          >
            I’m a full stack developer and technical writer with experience in web
            and mobile application development. I design scalable digital
            products, automate business workflows, and build integrations that
            help teams work smarter.
            <br />
            <br />
            I hold a Computer Science degree from Murang’a University of
            Technology and I’m currently pursuing a Master’s in Computer Science.
          </motion.p>

          {/* COUNTERS */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex gap-x-8"
          >
            {[
              { end: 10, label: "Years Experience" },
              { end: 200, label: "Projects Delivered" },
              { end: 50, label: "Automated Systems" },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-3xl font-extrabold text-accent mb-1">
                  <CountUp start={0} end={item.end} duration={4} />
                </div>
                <div className="text-xs uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          className="flex flex-col w-full xl:max-w-[48%] mt-12 xl:mt-0"
        >
          {/* TABS */}
          <div className="flex gap-x-8 mx-auto xl:mx-0 mb-8">
            {aboutData.map((item, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`relative capitalize xl:text-lg transition ${
                  index === i
                    ? "text-accent after:w-full after:bg-accent"
                    : "text-white/60"
                } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div className="flex flex-col gap-y-10">
            {aboutData[index].info.map((item, i) => (
              <div key={i}>
                <div className="font-semibold mb-3 text-white">
                  {item.title}
                </div>

                {/* TEXT (experience / credentials) */}
                {item.stage && (
                  <div className="text-white/60">{item.stage}</div>
                )}

                {/* ICONS (skills only) */}
                {item.icons && (
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-8 mt-4">
                    {item.icons.map(({ icon: Icon, name }, iconI) => (
                      <motion.div
                        key={iconI}
                        whileHover={{ y: -6, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative flex flex-col items-center group"
                      >
                        <div className="text-4xl text-white/90 group-hover:text-accent transition">
                          <Icon />
                        </div>

                        <span className="absolute -bottom-7 text-[11px] uppercase tracking-wider text-white/80 opacity-0 group-hover:opacity-100 transition">
                          {name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;