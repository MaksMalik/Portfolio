import React from 'react'
import "./MainPage.css"

export default function MainPage() {

  const body = document.body

  document.addEventListener('mousemove', (e) => {
    const el = document.createElement('div');
    el.setAttribute('class', 'trail')
    el.setAttribute('style', `left: ${e.clientX}px; top: ${e.clientY}px`);
    el.onanimationend = () => {
      el.remove()
    }
    body.insertAdjacentElement('beforeend', el)
  })


  document.addEventListener('mouseover', (e) => {
    e.target.classList.contains("Name") && e.target.classList.add("rubberBand")
    setTimeout(() => {
      e.target.classList.remove("rubberBand");
    }, "1000")
  })

  return (
    <section className='MainPage section' id='HOME'>
      <div className='NameText'>
        <div>
          <span className='Name'>H</span>
          <span className='Name'>i</span>
          <span className='Name'>,</span>
        </div>
        <div>
          <span className='Name'>I</span>
          <span className='Name'>'</span>
          <span className='Name'>m</span>
          <div className='Name'> </div>
          <span className='Name'>M</span>
          <span className='Name'>a</span>
          <span className='Name'>k</span>
          <span className='Name'>s</span>
          <span className='Name'>,</span>
        </div>
        <div>
          <span className='Name'>F</span>
          <span className='Name'>r</span>
          <span className='Name'>o</span>
          <span className='Name'>n</span>
          <span className='Name'>t</span>
          <span className='Name'>e</span>
          <span className='Name'>n</span>
          <span className='Name'>d</span>
          <div className='Name'> </div>
          <span className='Name'>D</span>
          <span className='Name'>e</span>
          <span className='Name'>v</span>
          <span className='Name'>e</span>
          <span className='Name'>l</span>
          <span className='Name'>o</span>
          <span className='Name'>p</span>
          <span className='Name'>e</span>
          <span className='Name'>r</span>
        </div>
      </div>

      <div className='button'>
        <a href='#CONTACT'>
          CONTACT ME
        </a>

        <a href='#CV'>
          DOWNLOAD CV
          <i className="fa-sharp fa-solid fa-file-arrow-down"></i>
        </a>
      </div>

      <div className='scroll'>
        <a href='#SKILLS'>
          <i className="fa-solid fa-computer-mouse"></i>
        </a>
      </div>
    </section>
  )
}
