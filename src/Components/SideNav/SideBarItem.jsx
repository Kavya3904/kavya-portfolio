import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SideBarItem = ({ icon, label }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="sidebar-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="icon">{icon}</div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="label"
            initial={{ opacity: 0, width: 10 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideBarItem;