import React from 'react'
import "./Portfolio.css"

export default function Portfolio() {

  return (
    <section className='Portfolio section' id='PORTFOLIO'>
      <div className='Portfolio-text showText parallaxTitle '>PORTFOLIO</div>
      <div className='Portfolio-box hide-scale'>
        <div className='Portfolio-box-row'>
          <div className='Portfolio-box-element'></div>
          <div className='Portfolio-box-element'></div>
          <div className='Portfolio-box-element'></div>
        </div>
        <div className='Portfolio-box-row'>
          <div className='Portfolio-box-element'></div>
          <div className='Portfolio-box-element'></div>
          <div className='Portfolio-box-element'></div>
        </div>
      </div>
    </section>
  )
}
