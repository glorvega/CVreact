import { useState } from 'react';
import './Darkmode.scss';

const Darkmode = () => {
    const [dark, setDark] = useState(false);
    console.log('Dark mode', dark);
  return (
    <div className={dark ? 'dark_mode' : ''}>
        <p>parrafito para comprobar que estoy en dark mode</p>
        <button type="button" onClick={()=>setDark(!dark)}>Cambiar</button>
    </div>
  )
}

export default Darkmode
