export const DARKMODE = 'DARKMODE';
// setea nuestro darkmode según sea e= false o e= true
export const handledarkMode = (e) => async (dispatch) => {
    // getting the true or false value from the parameter and saving that to localstorage
    localStorage.setItem("darkmode", e);
  
    //dispatch data to reducer to be accessed as payload.action
    dispatch({
      type: DARKMODE,
      payload: e,
    });
  };