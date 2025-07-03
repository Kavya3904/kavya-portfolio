import React from "react";
import myImage from "../../assets/My-image.jpeg";
import { motion } from "framer-motion";
import {
  ImageContainer,
  SummaryContainer,
  AboutMeTitle,
  AboutMeContainer,
  AboutMeBody,
  AboutMeplace,
  AboutMebutton,
} from "./AboutMe.styled.jsx";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "linear" }}
      style={{
        borderRadius: "10px",
        width: "fit-content",
      }}
    >
      <AboutMeContainer>
        <ImageContainer>
          <img src={myImage} alt="Profile" />
        </ImageContainer>
        <SummaryContainer>
          <AboutMeTitle>Kavya Mavila</AboutMeTitle>
          <AboutMeBody>Software Developer & Mentor</AboutMeBody>
          <AboutMeplace>Calicut , India</AboutMeplace>
        </SummaryContainer>
        <AboutMebutton>Let's Talk</AboutMebutton>
      </AboutMeContainer>
    </motion.div>
  );
}
