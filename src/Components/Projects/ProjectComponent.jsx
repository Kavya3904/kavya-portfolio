import React from "react";
import "./ProjectComponent.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import AboutMeDetails from "../Details/AboutMeDetails";
import Projects from "../Details/Projects";
import Skills from "../Details/Skills";
import Whoiam from "../Details/Whoiam";
export default function ProjectComponent() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, scale: 0.7, transition: { duration: 0.2 } }, 
  };

  const Box = ({ num }) => {
    const control = useAnimation();
    const [ref, inView] = useInView({
      threshold: 0, 
    });

    useEffect(() => {
      if (inView) {
        console.log("Box is in view", inView);
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <div>{num} </div>
      </motion.div>
    );
  };
  return (
    <div className="ProjectMainDiv">
      <div id="about">
        <Box num={<AboutMeDetails />} />
      </div>
      <div id="projects">
        <Box num={<Projects />} />
      </div>
      <div id="skills">
        <Box num={<Skills />} />
      </div>
      <div id="Who I Am">
        <Box num={<Whoiam />} />
      </div>
    </div>
  );
}
