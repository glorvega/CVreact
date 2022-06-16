import React from 'react'
import './About.scss';

const About = ({about}) => {
  return (
    <div className="about">
    <div className="about-container">
    {about.map((item)=> {
        return (
            <div key={JSON.stringify(item)}>
                <p className="about-container__info">{item.info}</p>
            </div>
        )
    })}
    </div>
    </div>
  )
}

export default About