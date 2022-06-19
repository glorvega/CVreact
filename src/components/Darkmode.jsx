/* import { useEffect } from "react"; */
import { useDispatch, useSelector } from "react-redux";
import { handledarkMode } from "../redux/darkmode.actions";
import "./Darkmode.scss";

//implementar spanishMode

const Darkmode = () => {
  //Creamos la constante dispatch con el hook useDispatch de redux para lanzar las acciones más adelante
  const dispatch = useDispatch();

  //Creamos la constante mode, que gracias al hook useSelector de redux, buscará el la propiedad darkModeObject em el rootReducer del store, guardando así en mode el estado
  const mode = useSelector((state) => state.darkModeObject);

  // Creamos la constante isdarkMode con la propiedad isdarkMode del mode, porque mode es el estado completo
  const isdarkMode = mode.isdarkMode

  // function to be fired on onChange method to switch the mode
  const switchDarkMode = () => {
    isdarkMode
      ? dispatch(handledarkMode(false))
      : dispatch(handledarkMode(true));
  };

  /* useEffect(() => {
    
    document.body.style.backgroundColor = isdarkMode ? "#292c35" : "#fff";
  }, [isdarkMode]); */
  return (


<div id="darkmode">
<div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          // onChange prop to fire our internal function for changing the dark mode value
        onChange={switchDarkMode}
        // checking checked prop with dark mode state
        checked={isdarkMode}

        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
</div>
  );
};

export default Darkmode;
