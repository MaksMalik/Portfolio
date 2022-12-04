import React from 'react'
import "./Skills.css"

export default function Skills() {

  const ref = React.useRef()
  React.useEffect(() => {
/*     const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { entry.target.classList.add('showText') }
          else { entry.target.classList.remove('showText') }
        })
      })

    const observerScaleMobile = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { entry.target.classList.add('showText') }
          else { entry.target.classList.remove('showText') }
        })
      })

    const hiddenElementSkill = document.querySelectorAll('.hiddenText');
    hiddenElementSkill.forEach((el) => {
      observer.observe(el)
    })

    const hiddenScaleMobile = document.querySelectorAll('.hide-scale-mobile');
    hiddenScaleMobile.forEach((el) => {
      observerScaleMobile.observe(el)
    }) */


    const observerScale = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { entry.target.classList.add('show-scale') }
          /* else { entry.target.classList.remove('show-scale') } */
        })
      })

    const hiddenElementScale = document.querySelectorAll('.hide-scale');
    hiddenElementScale.forEach((el) => {
      observerScale.observe(el)
    })
  }, [ref]
  )

  return (
    <section className='Skills section' id='SKILLS'>
      <div className='Skills-text showText parallaxTitle'>SKILLS</div>
      <div className='Skills-box'></div>

    </section>
  )
}