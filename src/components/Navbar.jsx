import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return(
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/works'>Works</NavLink>
    </div>
  )
};