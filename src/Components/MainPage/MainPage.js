import React, { useEffect, useState } from 'react'
import "./MainPage.css"

export default function MainPage() {

  /* RUBBER BAND
  
  
    document.addEventListener('mouseover', (e) => {
    e.target.classList.contains("Name") && e.target.classList.add("rubberBand")
    setTimeout(() => {
      e.target.classList.remove("rubberBand");
    }, "1000")
  }) */


  /*  MOUSE FOLLOW FOR MAKS
      const body = document.body
  
  
      function parallaxF(e) {
        this.querySelectorAll(".parallax").forEach(element => {
          const speed = element.getAttribute("data-speed")
          const x = (window.innerWidth - e.pageX * speed) / 1000
          const y = (window.innerHeight - e.pageY * speed) / 1000
          element.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
  
  
      }
  
      document.addEventListener('mousemove', (e) => {
        if (window.matchMedia("(pointer: coarse)").matches) {
          const el = document.createElement('div');
          el.setAttribute('class', 'trail')
          el.setAttribute('style', `left: ${e.clientX}px; top: ${e.clientY}px`);
          el.onanimationend = () => {
            el.remove()
          }
          body.insertAdjacentElement('beforeend', el)
        }
      })
    
    if (("ontouchstart" in document.documentElement)) { }
    else {
      document.addEventListener("mousemove", parallaxF)
    } */




  const [currentPage, setCurrentPage] = useState("HOME")

  useEffect(() => {

    const triangleParallax = document.querySelectorAll(".parallaxTriangle")
    const textMaksParallax = document.querySelectorAll(".NameText")
    const skillsText = document.querySelectorAll(".Skills-text")
    const contactText = document.querySelectorAll(".Contact-text")
    const portfolioText = document.querySelectorAll(".Portfolio-text")


/*     const titleParallax = document.querySelectorAll(".parallaxTitle")
 */    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;


    window.onscroll = function () {
      let value = window.scrollY
      let value2 = document.body.scrollHeight

      if (viewportWidth > 768) {
        triangleParallax.forEach((item) => {
          item.style.cssText = `translate: 0 ${-value}px; scale: ${1 + value / 100}`
        })

        textMaksParallax.forEach((item) => {
          item.style.translate = `0 ${-value * 0.42}px`
        })

        skillsText.forEach((item) => {
          item.style.cssText = `translate: 0 ${-1600 + value2 / value * 400}px`
        })

        portfolioText.forEach((item) => {
          item.style.cssText = `translate: 0 ${-1600 + value2 / value * 800}px`
        })

        contactText.forEach((item) => {
          item.style.cssText = `translate: 0 ${-1600 + value2 / value * 1200}px`
        })
      }







      /* titleParallax.forEach((item) => {
        item.style.cssText = `translate: ${value * 0.01}px 0;`
      })
      console.log(titleParallax) */


      const sections = document.querySelectorAll("section")
      const links = document.querySelectorAll(".link")
      const portfolioElements = document.querySelectorAll(".Portfolio-box-element")

      if (viewportWidth < 560) {
        portfolioElements.forEach((portfolioElement) => {
          let rect = portfolioElement.getBoundingClientRect();
          console.log(rect.top);
          if (window.innerHeight / 2 > rect.top) {
            portfolioElement.style.transform = "scale(1.1)"
            portfolioElement.style.filter = "grayscale(0)"
          }

          if (window.innerHeight / 3.5 > rect.top) {
            portfolioElement.style.transform = "scale(1)"
            portfolioElement.style.filter = "grayscale(0.9)"
          }


          if (window.innerHeight / 2 < rect.top) {
            portfolioElement.style.transform = "scale(1)"
            portfolioElement.style.filter = "grayscale(0.9)"
          }

      

          
        })
      }

      sections.forEach((section) => {
        let sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          setCurrentPage(section.getAttribute("id"))
        }
      })

      links.forEach((item) => {
        item.style.cssText = "color: white"
        if (item.href.includes(currentPage)) {
          item.style.cssText = "color: white";
          item.classList.remove("active")
        }
        else {
          item.style = "color: transparent"
        }
      })
    }
  })

  return (
    <section className='MainPage section' id='HOME'>
      <div className='NameText' id='NameText'>
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
          <span className='Name parallax' data-speed="5">M</span>
          <span className='Name parallax' data-speed="5">a</span>
          <span className='Name parallax' data-speed="5">k</span>
          <span className='Name parallax' data-speed="5">s</span>
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
          <a href="/Maksymilian_Malik_CV.pdf" download="Maksymilian_Malik_CV.pdf">
            DOWNLOAD CV
            <i className="fa-sharp fa-solid fa-file-arrow-down"></i>
          </a>
        </div>
      </div>




      <div className='scroll'>
        <a href='#SKILLS'>
          <i className="fa-solid fa-computer-mouse" ></i>
        </a>
      </div>

      <div className='triangle-right parallaxTriangle' data-speed="4"></div>
      <div className='triangle-left parallaxTriangle' data-speed="4"></div>

    </section>
  )
}
