import React, { useState, lazy, Suspense, memo } from "react";
import { motion } from "framer-motion";

import myImage from "../../assets/My-image.webp";

import {
  ImageContainer,
  SummaryContainer,
  AboutMeTitle,
  AboutMeContainer,
  AboutMeBody,
  AboutMeplace,
  AboutMebutton,
} from "./AboutMe.styled.jsx";
const ContactModal = lazy(() => import("./ContactModal.jsx"));

function AboutMe() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ borderRadius: "10px", width: "fit-content" }}
    >
      <AboutMeContainer>
        <ImageContainer>
          <img
            src={myImage}
            alt="Profile"
            loading="lazy"
            width="300"
            height="300"
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
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

        {/* ✅ Lazy loaded modal */}
        <Suspense fallback={null}>
          {modalOpen && (
            <ContactModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
            />
          )}
        </Suspense>
      </AboutMeContainer>
    </motion.div>
  );
}

// ✅ Prevent unnecessary re-renders
export default memo(AboutMe);