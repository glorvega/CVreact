import React from 'react'
import './PersonalInfo.scss';

const PersonalInfo = ({ personalInfo }) => {
  /* let aboutToString = JSON.stringify(personalInfo.about); */
  
  return (
    <div className="me">
      <img src={personalInfo.image} alt="pic" />
      <div className="card_info">
      <h2>
        {personalInfo.name} {personalInfo.lastName}
      </h2>
        <p>🗺️{personalInfo.city} </p>
        <p>🗓️{personalInfo.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + personalInfo.email}>
          glorvega93@hotmail.com
          </a>
        </p>
        <p>📱 {personalInfo.phone}</p>
        <p>💾<a href={personalInfo.gitHub}>
            GitHub
          </a></p>
  {/*         <p>{aboutToString}</p> */}
      </div>
    </div>
  );
};

export default PersonalInfo;