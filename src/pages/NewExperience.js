import React from 'react'
import { useForm } from 'react-hook-form'
import { addExperience } from '../redux/experience/experience.actions';
import { useDispatch } from 'react-redux';
import "./NewExperience.scss";

const NewExperience = () => {
    const {register, handleSubmit} = useForm();  //register --> coge los cambios de nuestros campos, handleSubmit --> maneja el submit del formulario
    const dispatch = useDispatch();

    const onSubmit = (formData) => {                //en el onsubmit nos llegan los datos directamente del handleSubmit de react-hook-form
        console.log(formData);
        dispatch(addExperience(formData));
    }

  return (
    <form className="experienceForm" onSubmit={handleSubmit(onSubmit)}>
        <label>
            <span>Position</span>
            <input type="text" name="name" {...register('name')}/>
        </label>
        <label>
            <span>Date</span>
            <input type="text" name="date" {...register('date')}/>
        </label>
        <label>
            <span>Location</span>
            <input type="text" name="where" {...register('where')}/>
        </label>
        <label>
            <span>Job description</span>
            <input className="resizable" type="text" name="description" {...register('description')}/>
        </label>
        <button>Add experience</button>
    </form>
  )
}

export default NewExperience
