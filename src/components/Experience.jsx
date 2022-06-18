import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteExperience } from '../redux/experience/experience.actions';
import "./Experience.scss";
import { Link } from 'react-router-dom';

const Experience = (/* { experience } */) => {
  const {experience} = useSelector(state => state.experience);
  const dispatch = useDispatch();
  return (
    <div className="experience">
      <div className="experience_card">
      {experience.map((item, index)=> {
        return (
           <div key={JSON.stringify(item)} className="experience_card-info">
           <p className="name">{item.name}</p>
           <p>{item.date}</p>
           <p>{item.where}</p>
           <p>{item.description}</p>
           <div className="experience_card-button">
           <Link to={`/editexperience/${index}`}><button>Edit</button></Link>
             <button onClick={()=>{dispatch(deleteExperience(item))}}>Delete</button>
           </div>
          </div>
        )
              })}
        </div>
    </div>
  );
};

export default Experience;