import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaCode , FaTools , FaUserPlus , FaUserAstronaut } from "react-icons/fa";
import "./Sidebar.css";

const navItems = [
  { icon: <FaUserAstronaut  />, label: "About", target: "about" },
  { icon: <FaCode  />, label: "Projects", target: "projects" },
  { icon: <FaTools />, label: "Skills", target: "skills" },
  { icon: <FaUserPlus  />, label: "Who Am I", target: "Who I Am" }
];

export default function TopNav() {
 const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -60; 
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
  return (
    <motion.div
      className="top-nav"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {navItems.map((item, index) => (
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="nav-btn"
          key={index}
          onClick={() => scrollToSection(item.target)}
        >
          {item.icon}
          <span className="nav-label">{item.label}</span>
        </motion.button>
      ))}
    </motion.div>
  );
}
