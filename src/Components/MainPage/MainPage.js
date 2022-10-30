import React from 'react'
import "./MainPage.css"

export default function MainPage() {

  /* document.addEventListener('mouseover', (e) => {
    e.target.classList.contains("Name") && e.target.classList.add("rubberBand")
    setTimeout(() => {
      e.target.classList.remove("rubberBand");
    }, "1000")
  }) */

  return (
    <section className='MainPage section' id='HOME'>
      <div className='NameText'>
        <div>
          <span className='Name'>H</span>
          <span className='Name'>i</span>
          <spna className='Name'>,</spna>
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
      <div className='button'>
        <a href='#CONTACT'>
          CONTACT ME
        </a>
        <a href='../../../public/Download/Maksymilian_Malik_CV.pdf' download>
          DOWNLOAD CV
          <i className="fa-sharp fa-solid fa-file-arrow-down"></i>
        </a>
      </div>
      </div>


        

      <div className='scroll'>
        <a href='#SKILLS'>
          <i className="fa-solid fa-computer-mouse"></i>
        </a>
      </div>
    </section>
  )
}
