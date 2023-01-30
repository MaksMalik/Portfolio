import React from 'react'
import "./Portfolio.css"

export default function Portfolio() {

  return (
    <section className='Portfolio section' id='PORTFOLIO'>
      <div className='Portfolio-text showText parallaxTitle '>PORTFOLIO</div>
      <div className='Portfolio-box'>
        <div className='Portfolio-mobile '>Portfolio</div>
        <div className='Portfolio-box-row'>
          <a href='https://deliverto.netlify.app/' target="_blank" rel="noreferrer"><div className='Portfolio-box-element'></div></a>
          <a href='https://exxpenses.netlify.app/' target="_blank" rel="noreferrer"><div className='Portfolio-box-element'></div></a>
        </div>
        <div className='Portfolio-box-row'>
          <a href='https://one-future.netlify.app/' target="_blank" rel="noreferrer"><div className='Portfolio-box-element'></div></a>
          <a href='https://oxoxo.netlify.app/' target="_blank" rel="noreferrer"><div className='Portfolio-box-element'></div></a>
          <a href='https://vault-storage.netlify.app/' target="_blank" rel="noreferrer"><div className='Portfolio-box-element'></div></a>
        </div>
      </div>
    </section>
  )
}
