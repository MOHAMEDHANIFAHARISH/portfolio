import React,{useState} from 'react'
import "./qualification.css";

const Qualification = () => {
    const[toggleState, setToggleState]=useState(1);

    const toggleTab=(index)=>{
      setToggleState(index);
  
    };
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personel Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState===1 ? "qualification__button qualification__active button--flex":"qualification__button button--flex"} onClick={()=> toggleTab(1)}>
                    <i className="bx bxs-graduation qualification__icon"></i>
                   Education
                </div>
            
                <div className={toggleState===2 ? "qualification__button qualification__active button--flex":"qualification__button button--flex"} onClick={()=> toggleTab(2)}>
                <i class="uil uil-award"></i>
                    Certification
                </div>
            </div>
           
          
            
            <div className="qualification__sections">
                <div className={toggleState===1 ? "qualification__content qualification__content-active":"qualification__content "}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Computer Science and Engineering</h3>
                            <span className="qualification__subtitle">Mohamed Sathak A.J College Of Engineering - Chennai</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                &nbsp;2020 - 2024
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Higher Secondary</h3>
                            <span className="qualification__subtitle">Best Matriculation Higher Secondary School - Sirkali</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>&nbsp;2019 - 2020 
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={toggleState===2 ? "qualification__content qualification__content-active":"qualification__content "}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Responsive Web Design</h3>
                            <span className="qualification__subtitle">FreeCodeCamp</span>
                            
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">CCNA</h3>
                            <span className="qualification__subtitle">Cisco</span>
                            
                        </div>
                        
                    </div>


                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Introduction to Cloud</h3>
                            <span className="qualification__subtitle">IBM</span>
                            
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Front-end Development</h3>
                            <span className="qualification__subtitle">GUVI</span>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification