import React from 'react'
import "./NavBar.css"

export default function NavBar() {
  return (
    <div className='NavBar'>
      <ul>
        <li>
          <a href='#d' data-text="&nbsp;HOME">&nbsp;HOME&nbsp;</a>
        </li>
        <li>
          <a href='#d' data-text="&nbsp;SKILLS">&nbsp;SKILLS&nbsp;&nbsp;</a>
        </li>
        <li>
          <a href='#d' data-text="&nbsp;PORTFOLIO">&nbsp;PORTFOLIO&nbsp;&nbsp;&nbsp;&nbsp;</a>
        </li>
        <li>
          <a href='#d' data-text="&nbsp;CONTACT">&nbsp;CONTACT&nbsp;&nbsp;&nbsp;</a>
        </li>
      </ul>
    </div>
  )
}
