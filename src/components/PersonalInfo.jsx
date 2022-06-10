import React from 'react'
import './PersonalInfo.scss';

const PersonalInfo = ({ personalInfo }) => {
  return (
    <div className="me">
      <img src={personalInfo.image} alt="pic" />
      <div className="card">
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
      </div>
    </div>
  );
};

export default PersonalInfo;