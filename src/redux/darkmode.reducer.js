import * as actions from './darkmode.actions';

const INITIAL_STATE = {
  // JSON.parse(localStorage.getItem("darkmode") || (or) false
  isdarkMode: !!JSON.parse(localStorage.getItem("darkmode")),
}

const darkModeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.DARKMODE:
      return {
        ...state,
        // getting value from the action file and changing isdarkMode State.
        isdarkMode: action.payload,
      };
    default:
      return state;
  }
};

export default darkModeReducer;