import React, { useEffect } from "react";
import "./ProjectComponent.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Lazy import components only when in view
import AboutMeDetails from "../Details/AboutMeDetails";
import Projects from "../Details/Projects";
import Skills from "../Details/Skills";
import Whoiam from "../Details/Whoiam";

export default function ProjectComponent() {
  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hidden: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const Box = ({ component }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={controls}
        style={{ minHeight: "300px" }} // ✅ Avoid CLS by setting min-height
      >
        {component}
      </motion.div>
    );
  };

  return (
    <div className="ProjectMainDiv">
      <div id="about">
        <Box component={<AboutMeDetails />} />
      </div>
      <div id="projects">
        <Box component={<Projects />} />
      </div>
      <div id="skills">
        <Box component={<Skills />} />
      </div>
      <div id="whoiam">
        <Box component={<Whoiam />} />
      </div>
    </div>
  );
}
