import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Modal, Carousel } from 'react-bootstrap';

export const Projects = () => {
  const data = require('../data/projects.json');
  const [show, setShow] = useState(false);
  const [selectedProject, setselectedProject] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const determineFadeDirection = (index) => {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 769) return 'fade-up';
    if (index === 0 || index === 3 || index === 6) return 'fade-left';
    if (index === 2 || index === 5 || index === 8) return 'fade-right';
    return 'fade-up';
  }

  const handleClick = (id) => {
    setselectedProject(data.projects[id])
    setShow(true);
  }

  const renderProjects = () => {
    const projectCards = data.projects.slice(1, data.projects.length).map((project, index) => {
      return (
        <div key={project.id} data-project={project.id} className="project" data-aos={determineFadeDirection(index + 1)}>
          <img src={project.splash} alt="" className="project-img" />
          <div className="project-info">
            <h3>{project.tagline}</h3>
            <motion.button whileHover={{ scale: 1.1 }} className="btn-linear" onClick={() => handleClick(project.id)}>See More</motion.button>
          </div>
        </div>
      )
    })
    return (
      <div className="projects-grid">
        <div key={data.projects[0].id} data-project={data.projects[0].id} className="project" data-aos={determineFadeDirection(0)}>
          <img src={data.projects[0].splash} alt="" className="project-img" />
          <div className="project-info">
            <h3>{data.projects[0].tagline}</h3>
            <motion.button whileHover={{ scale: 1.1 }} className="btn-linear" onClick={() => handleClick(data.projects[0].id)}>See More</motion.button>
          </div>
        </div>
        {projectCards}
      </div>
    )
  }

  const renderCarouselOrVideo = () => {
    if (selectedProject.id === 0) {
      return (
        <video className="video" controls>
          <source src="https://i.imgur.com/7Im5zPd.mp4" type="video/mp4"></source>
        </video>
      )
    } else if (Object.keys(selectedProject).length > 0) {
      const slides = selectedProject.images.map((image, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              src={image}
              alt="Test"
            />
          </Carousel.Item>
        )
      })
      return (
        <Carousel indicators={false}>
          {slides}
        </Carousel>
      )
    } else {
      return
    }
  }

  return (
    <div className="projects max-width portfolio-section">
      <h2>My Recent Work</h2>
      <p>Here are a few of the projects I've worked on recently. Want to see more? <motion.a whileHover={{ scale: 1.05 }} href="mailto:fanninggg@gmail.com" className="linear-link" target="_blank">Email Me</motion.a></p>
      {renderProjects()}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>
          {renderCarouselOrVideo()}
          <div className="role">{selectedProject ? selectedProject.role : ''}</div>
        </Modal.Body>
        <div className="modal-details">
          <h3>{selectedProject ? selectedProject.title : ''}</h3>
          <p className="project-tagline">{selectedProject ? selectedProject.tagline : ''}</p>
          <div className="modal-divider"></div>
          <p className="project-description">{selectedProject ? selectedProject.description : ''}</p>
          <div className="modal-actions">
            <motion.a whileHover={{ scale: 1.1 }} className="btn-linear" target="_blank" href={selectedProject ? selectedProject.href : ''}>Visit Website</motion.a>
            <svg className="close-btn" onClick={handleClose} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8325 10.0001L19.6203 2.21215C20.1271 1.70557 20.1271 0.88651 19.6203 0.379933C19.1137 -0.126644 18.2947 -0.126644 17.7881 0.379933L10.0001 8.16793L2.21233 0.379933C1.70552 -0.126644 0.886688 -0.126644 0.380111 0.379933C-0.126704 0.88651 -0.126704 1.70557 0.380111 2.21215L8.16787 10.0001L0.380111 17.7881C-0.126704 18.2947 -0.126704 19.1138 0.380111 19.6204C0.632569 19.8731 0.964513 20 1.29622 20C1.62793 20 1.95963 19.8731 2.21233 19.6204L10.0001 11.8324L17.7881 19.6204C18.0408 19.8731 18.3725 20 18.7042 20C19.0359 20 19.3676 19.8731 19.6203 19.6204C20.1271 19.1138 20.1271 18.2947 19.6203 17.7881L11.8325 10.0001Z" fill="white" fillOpacity="0.6" />
            </svg>
          </div>
        </div>
      </Modal>
    </div>
  )
}
