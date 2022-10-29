import React from 'react'
import "./MainPage.css"

export default function MainPage() {

  let body = document.body

  document.addEventListener('mousemove', (e) => {
    let el = document.createElement('div');
    el.setAttribute('class', 'trail')
    el.setAttribute('style', `left: ${e.clientX - 10}px; top: ${e.clientY - 10}px`);
    el.onanimationend = () => {
      el.remove()
    }
    body.insertAdjacentElement('beforeend', el)
  })


  return (
    <div className='MainPage'>
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
          <span className='Name'>f</span>
          <span className='Name'>r</span>
          <span className='Name'>o</span>
          <span className='Name'>n</span>
          <span className='Name'>t</span>
          <span className='Name'>e</span>
          <span className='Name'>n</span>
          <span className='Name'>d</span>
          <div className='Name'> </div>
          <span className='Name'>d</span>
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
    </div>
  )
}
