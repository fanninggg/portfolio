import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap';
import { DownSVG } from './svgs'

export const Testimonials = () => {
  const students = require('../data/students.json');
  const colleagues = require('../data/colleagues.json');
  const clients = require('../data/clients.json');

  const [group, setGroup] = useState('students');
  const handleGroupChange = (group) => {
    setGroup(group);
    document.querySelectorAll('.testimonials-carousel').forEach((carousel) => {
      carousel.classList.add('d-none');
    })
    document.querySelector(`.${group}-carousel`).classList.remove('d-none')
  };

  const handleDropdownToggle = (e) => {
    e.currentTarget.querySelector('.testimonials-dropdown-content').classList.toggle('d-none')
  }

  const renderCarouselItems = (items, name) => {
    const testimonials = items.testimonials.map((testimonial) => {
      return (
        <Carousel.Item key={testimonial.id} className="testimonial">
          <img src={testimonial.avatar} alt="" className="" />
          <h6 className="content">{testimonial.content}</h6>
          <Carousel.Caption>
            <p className="author">{testimonial.author}</p>
            <p className="position">{testimonial.position}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })
    return (
      <Carousel indicators={true} controls={false} interval={6000} className={`testimonials-carousel ${name}-carousel`}>
        {testimonials}
      </Carousel>
    )
  }

  return (
    <div className="testimonials portfolio-section">
      <h2>Testimonials</h2>
      <p className="testimonials-tagline">People I've worked with have said some nice things. Hear from my:</p>
      <div className="testimonials-dropdown" onClick={(e) => handleDropdownToggle(e)}>
        <p>{group[0].toUpperCase() + group.substring(1)} <DownSVG /></p>
        <div className="testimonials-dropdown-content d-none">
          <p onClick={() => handleGroupChange('students')}>Students</p>
          <p onClick={() => handleGroupChange('colleagues')}>Colleagues</p>
          <p onClick={() => handleGroupChange('clients')}>Clients</p>
        </div>
      </div>
      <div className="testimonials-carousel-holder">
        {renderCarouselItems(students, 'students')}
        {renderCarouselItems(colleagues, 'colleagues')}
        {renderCarouselItems(clients, 'clients')}
      </div>
    </div>
  )
}
