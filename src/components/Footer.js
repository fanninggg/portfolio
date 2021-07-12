import React from 'react'
import { motion } from "framer-motion"
import { InstagramSVG, LinkedinSVG, GithubSVG, DribbbleSVG, FooterLogoSVG } from './svgs'

export const Footer = () => {

  return (
    <div className="footer portfolio-section">
      <FooterLogoSVG />
      <p className="max-width text-center">If you've got this far maybe you'd like to know more about me? <br /> We should <motion.a whileHover={{ scale: 1.05 }} href="mailto:fanninggg@gmail.com" target="_blank">book in a chat</motion.a></p>
      <div className="social-links">
        <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/ben-fanning/" className="social-link" target="_blank">
          <LinkedinSVG />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/fanninggg" className="social-link" target="_blank">
          <GithubSVG />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="https://www.instagram.com/benfanning_/" className="social-link" target="_blank">
          <InstagramSVG />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="https://dribbble.com/fanninggg" className="social-link" target="_blank">
          <DribbbleSVG />
        </motion.a>
      </div>
    </div>
  )
}
