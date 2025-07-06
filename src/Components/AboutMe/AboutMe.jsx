import React, { useState } from "react";
import { motion } from "framer-motion";
import myImage from "../../assets/My-image.jpg";

import {
  ImageContainer,
  SummaryContainer,
  AboutMeTitle,
  AboutMeContainer,
  AboutMeBody,
  AboutMeplace,
  AboutMebutton,
} from "./AboutMe.styled.jsx";

import ContactModal from "./ContactModal.jsx";

export default function AboutMe() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "linear" }}
      style={{ borderRadius: "10px", width: "fit-content" }}
    >
      <AboutMeContainer>
        <ImageContainer>
          <img src={myImage} alt="Profile" loading="lazy" />
        </ImageContainer>

        <SummaryContainer>
          <AboutMeTitle>Kavya Mavila</AboutMeTitle>
          <AboutMeBody>Software Developer & Mentor</AboutMeBody>
          <AboutMeplace>Calicut , India</AboutMeplace>
        </SummaryContainer>

        <motion.div
          style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          <AboutMebutton onClick={() => setModalOpen(true)}>
            Let's Connect
          </AboutMebutton>
        </motion.div>

        <ContactModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </AboutMeContainer>
    </motion.div>
  );
}
