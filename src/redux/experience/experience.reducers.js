import CV from "../../CV/CV";
import * as actions from "./experience.actions"

const {experience} = CV;

const INITIAL_STATE = {
    experience: experience,
}

const experienceReducer = (state = INITIAL_STATE, action) => {
    const {experience} = state;
    switch(action.type) {
        case actions.ADD_EXPERIENCE:
            return {...state, experience: [...experience, action.payload]}
        case actions.DELETE_EXPERIENCE:
            const experienceFiltered = experience.filter(exp => exp !== action.payload);
            return {...state, experience: [...experienceFiltered]};
            case actions.EDIT_EXPERIENCE:
                const {id, editExperience} = action.payload;           //recuperamos nuestros datos del payload
                const experienceCopy = [...experience];   //copio mi array
                experienceCopy.splice(id, 1, editExperience); //hago un splice, borro el antiguo y añado el nuevo en su posicion, y añado el modicado
                return {...state, experience: [...experienceCopy]};
            default:
                return state;
    }
};

export default experienceReducer;
