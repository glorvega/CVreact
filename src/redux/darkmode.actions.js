export const DARKMODE = 'DARKMODE';
export const LIGHTMODE = 'LIGHTMODE';

export const setDarkmode = () => dispatch => {
  const darkmodeOn = {
    type: DARKMODE,
  };

  dispatch(darkmodeOn);
};

export const setLightmode = () => dispatch => {
  dispatch({
    type: LIGHTMODE,
  });
}