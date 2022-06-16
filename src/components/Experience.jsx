import React from 'react'
import "./Experience.scss";

const Experience = ({ experience }) => {
  return (
    <div className="experience">
      <div className="experience_card">
      {experience.map((item)=> {
        return (
           <div key={JSON.stringify(item)} className="experience_card-info">
           <p className="name">{item.name}</p>
           <p>{item.date}</p>
           <p>{item.where}</p>
           <p>{item.description}</p>
          </div>
        )
              })}
        </div>
    </div>
  );
};

export default Experience;