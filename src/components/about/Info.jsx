import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
  
   <div className="about__box">
   <a href="#home" className='box__link'>
    <i class='bx bx-award about__icon'></i>
        <h3 className="about__title">Fresher</h3>
        <span className="about__subtitle">Looking for my new opportunity</span>
        </a>
    </div>
    <div className="about__box">
    <a href="#portfolio" className='box__link'>
    <i class='bx bx-briefcase about__icon' ></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">15+ Projects</span>
        </a>
    </div>
    <div className="about__box">
    <a href="#contact" className='box__link'>
    <i class='bx bx-support about__icon' ></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
        </a>
    </div>
    </div>
  )
}

export default Info