import React, { useEffect, useState } from 'react'
import "./NavBar.css"

export default function NavBar() {

  const [currentPage, setCurrentPage] = useState("HOME")

  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const links = document.querySelectorAll(".link")
    const navBar = document.querySelector(".ulNavBar")

    window.onscroll = function () {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
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
      
      links.forEach((element) => {
        if (element.style.color === "white" && element.classList.contains("even")) {
          navBar.style.backgroundColor = "var(--background)"
        }
        if (element.style.color === "white" && element.classList.contains("odd")) {
          navBar.style.backgroundColor = "rgb(19, 19, 19)"
        }
      })
    }
  })
  



  window.addEventListener('click', function(e){   
    if (!document.getElementById('navbarMm').contains(e.target)) {
      document.getElementById("checkBoxNavBar").checked = false;
    }
  });

  return (
    <>
    <div className='NavBar PC'>
      <ul className='ulNavBar'>
        <li>
          <a className="link active odd" href='#HOME' data-text="&nbsp;HOME">&nbsp;HOME&nbsp;</a>
        </li>
        <li>
          <a className="link even" href='#SKILLS' data-text="&nbsp;SKILLS">&nbsp;SKILLS&nbsp;&nbsp;</a>
        </li>
        <li>
          <a className="link odd" href='#PORTFOLIO' data-text="&nbsp;PORTFOLIO">&nbsp;PORTFOLIO&nbsp;&nbsp;&nbsp;&nbsp;</a>
        </li>
        <li>
          <a className="link even" href='#CONTACT' data-text="&nbsp;CONTACT">&nbsp;CONTACT&nbsp;&nbsp;&nbsp;</a>
        </li>
      </ul>
      <div className='Navbar__icons'>
          <a href='https://www.linkedin.com/in/maksmalik' target="_blank" rel="noreferrer"><div className='Navbar__icon icon1'></div></a>
          <a href='https://github.com/MaksMalik' target="_blank" rel="noreferrer"><div className='Navbar__icon icon2'></div></a>
      </div>
    </div>




      <nav className="navbarM" id='navbarMm'>
        <div className="navbar-container container">
            <input type="checkbox" name="" id="checkBoxNavBar"></input>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
              <li>
                <a className="link active" href='#HOME' data-text="&nbsp;HOME">&nbsp;HOME&nbsp;</a>
              </li>
              <li>
                <a className="link" href='#SKILLS' data-text="&nbsp;SKILLS">&nbsp;SKILLS&nbsp;&nbsp;</a>
              </li>
              <li>
                <a className="link" href='#PORTFOLIO' data-text="&nbsp;PORTFOLIO">&nbsp;PORTFOLIO&nbsp;&nbsp;&nbsp;&nbsp;</a>
              </li>
              <li>
                <a className="link" href='#CONTACT' data-text="&nbsp;CONTACT">&nbsp;CONTACT&nbsp;&nbsp;&nbsp;</a>
              </li>
              <li>
                <div className='Navbar__icons'>
                  <a href='https://www.linkedin.com/in/maksmalik' target="_blank" rel="noreferrer"><div className='Navbar__icon icon1'></div></a>
                  <a href='https://github.com/MaksMalik' target="_blank" rel="noreferrer"><div className='Navbar__icon icon2'></div></a>
                </div>
              </li>
            </ul>
        </div>
      </nav>
    </>
  )
}
