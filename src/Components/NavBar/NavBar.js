import React, { useEffect, useState } from 'react'
import "./NavBar.css"

export default function NavBar() {

  const [currentPage, setCurrentPage] = useState("HOME")

  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const links = document.querySelectorAll(".link")
    window.onscroll = function () {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
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
    <div className='NavBar'>
      <ul>
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
      </ul>
    </div>
  )
}
