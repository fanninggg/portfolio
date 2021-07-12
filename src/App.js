import { Landing, About, Projects, Testimonials, Footer } from './components'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div>
      <Landing />
      <About />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
