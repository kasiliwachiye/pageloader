import React from "react";
import { motion } from "framer-motion"

const Header = () => {
  return (
    <motion.div className="header" initial={{ opacity: 0, y: -180}} animate={{opacity: 1, y: 0}} transition={{ease: 'easeInOut', duration: 1, delay: 0.6}} >
      <div className="header-inner">
        <div className="logo">Kasili.</div>
        <nav className="nav">
          <li>
            <a href="/kubuni">Kubuni</a>
          </li>
          <li>
            <a href="/stratijiki">Stratijiki</a>
          </li>
          <li>
            <a href="/kutuhusu">Kutuhusu</a>
          </li>
        </nav>
        <div className="contact">
          <a href="/contact">Tujumiane</a>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
