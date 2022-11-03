import React from 'react'
import "./Skills.css"

export default function Skills() {

  const ref = React.useRef()
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('showText')
        })
      })

    const hiddenElementSkill = document.querySelectorAll('.hiddenText');
    hiddenElementSkill.forEach((el) => {
      observer.observe(el)
    })
  }, [ref]
  )

  return (
    <section className='Skills section' id='SKILLS'>
      <div className='Sills-text hiddenText'>SKILLS</div>
    


    </section>
  )
}
