import React, { useState } from 'react';
import { LogoSVG } from './svgs'
import { DarkMode } from './DarkMode'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Modal } from 'react-bootstrap';
import { motion } from "framer-motion"
import resume from '../data/CV.pdf'

export const Landing = () => {
  const [showResume, setShowResume] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const onDocumentLoadSuccess = () => {
    console.log('Upload succesful')
  }

  const handleResumeClose = () => setShowResume(false);
  const handleResumeShow = () => setShowResume(true);

  const handleCodeClose = () => setShowCode(false);
  const handleCodeShow = () => setShowCode(true);

  return (
    // ToDo's:
    // Use API to get info
    // Code Snippet sections
    <div className="landing max-width portfolio-section">
      <div className="navbar">
        <LogoSVG />
        <DarkMode />
      </div>
      <h1 className="landing-title">Hi, I'm Ben <br></br><span className="highlight" id="textHighlight">I'm a developer</span></h1>
      <div className="landing-flex">
      </div>
      <motion.a className="btn-linear landing-btn" onClick={handleResumeShow} whileHover={{ scale: 1.05 }}>View my resume</motion.a>
      <motion.p className="text-link" onClick={handleCodeShow} whileHover={{ scale: 1.05 }} >...or see some code</motion.p>
      <Modal show={showResume} onHide={handleResumeClose} animation={false}>
        <Modal.Body>
          <Document
            file={resume}
            loading={"Resume loading..."}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={1} />
          </Document>
        </Modal.Body>
      </Modal>
      <Modal show={showCode} onHide={handleCodeClose} animation={false} className="code-modal">
        <Modal.Body>
          <iframe src="https://github1s.com/fanninggg/portfolio" title="Website Code" allow></iframe>
        </Modal.Body>
      </Modal>
    </div>
  )
}
