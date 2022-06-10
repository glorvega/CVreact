import React from 'react'

const Experience = ({ experience }) => {
  return (
    <div className="experience">
      <img src={me.image} alt="" />
      <div className="card">
      <h2>
        {me.name} {me.lastName}
      </h2>
        <p>🗺️{me.city} </p>
        <p>🗓️{me.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + me.email}>
          tony@starkindustries.com
          </a>
        </p>
        <p>📱 {me.phone}</p>
        <p>💾<a href={me.gitHub}>
            GitHub
          </a></p>
      </div>
    </div>
  );
};

export default Experiencie;