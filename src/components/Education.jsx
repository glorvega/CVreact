import React from 'react'
import "./Education.scss";

const Education = ({ education }) => {
  return (
    <div className="education">
      <div className="education_card">
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)} className="education_card-info">
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;