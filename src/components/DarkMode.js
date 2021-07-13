import React, { useState } from 'react'
import { motion } from "framer-motion";
import { LightSVG, DarkSVG } from './svgs'

export const DarkMode = () => {
  const [darkMode, setdarkMode] = useState(true);
  let theme

  const toggleSwitch = () => {
    setdarkMode(!darkMode)
    if (theme === "light") {
      document.body.classList.replace("light", "dark")
      localStorage.setItem("theme", "dark")
      theme = "dark"
    } else {
      document.body.classList.replace("dark", "light")
      localStorage.setItem("theme", "light")
      theme = "light"
    }
  }

  if (localStorage) {
    theme = localStorage.getItem("theme")
  }
  if (theme === "light" || theme === "dark") {
    document.body.classList.add(theme)
  } else {
    document.body.classList.add("dark")
  }

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <div id="dark-mode-switch" className={darkMode ? 'dark' : 'light'} data-mode={darkMode} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring} >
        <DarkSVG dark={darkMode} />
        <LightSVG dark={darkMode} />
      </motion.div>
    </div>
  )
}
