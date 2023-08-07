import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { AppContext } from '../App';

export const Navbar = () => {
  const {dayMode, setDayMode} = useContext(AppContext);

  return(
    <div>
      <button className='btn' onClick={()=> {setDayMode(!dayMode)}}>{dayMode ? 'Passez en mode sombre' : 'Passez en mode clair'}</button>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/works'>Works</NavLink>
    </div>
  )
};