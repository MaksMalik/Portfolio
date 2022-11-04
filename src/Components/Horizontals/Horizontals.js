import React, { useEffect } from 'react'
import "./Horizontals.css"
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';


export default function Horizontals() {
  useEffect(() => {
    console.log("asdas")
    const scrollContainer = document.getElementById("Hor");

    scrollContainer.addEventListener('wheel', event => {
      event.preventDefault();
      scrollContainer.scrollBy({
        left: event.deltaY * 0.5,
        behavior: 'smooth'
      });
    })

  })

  return (
    <main className='BoxHorizontals'>

      <div className='Horizontals' id='Hor'>
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </main>
  )
}
