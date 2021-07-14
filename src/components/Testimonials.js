import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap';
import { DownSVG } from './svgs'

export const Testimonials = () => {

  const [clients, setClients] = useState([])
  const [students, setStudents] = useState([]);
  // const [colleagues, setColleagues] = useState([]);
  const [group, setGroup] = useState('clients');

  useEffect(() => {
    fetch("https://pacific-badlands-49664.herokuapp.com/api/v1/testimonials/clients")
      .then(response => response.json())
      .then(data => setClients(data))
    fetch("https://pacific-badlands-49664.herokuapp.com/api/v1/testimonials/students")
      .then(response => response.json())
      .then(data => setStudents(data))
    // fetch("https://pacific-badlands-49664.herokuapp.com/api/v1/testimonials/colleagues")
    //   .then(response => response.json())
    //   .then(data => setColleagues(data))
  }, [])

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
    if (items.length > 0) {
      const testimonials = items.map((testimonial) => {
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
  }

  return (
    <div className="testimonials portfolio-section">
      <h2>Testimonials</h2>
      <p className="testimonials-tagline">People I've worked with have said some nice things. Hear from my:</p>
      <div className="testimonials-dropdown" onClick={(e) => handleDropdownToggle(e)}>
        <p>{group[0].toUpperCase() + group.substring(1)} <DownSVG /></p>
        <div className="testimonials-dropdown-content d-none">
          <p onClick={() => handleGroupChange('clients')}>Clients</p>
          <p onClick={() => handleGroupChange('students')}>Students</p>
          {/* <p onClick={() => handleGroupChange('colleagues')}>Colleagues</p> */}
        </div>
      </div>
      <div className="testimonials-carousel-holder">
        {renderCarouselItems(clients, 'clients')}
        {renderCarouselItems(students, 'students')}
        {/* {renderCarouselItems(colleagues, 'colleagues')} */}
      </div>
    </div>
  )
}
