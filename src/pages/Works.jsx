import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AppContext } from '../App';

export const Works = () => {
  const { works } = useContext(AppContext);
  console.log(works.map(work => work.path));

  return(
    <>
      <h1>
        Au fil des années, nous avons pu accompagner les meilleurs.
      </h1>
      <p>
        Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.
      </p>
      <nav>
        {works.map(work => 
          <Link key={work.id} to={work.path}>{work.path}</Link>
        )
        }
      </nav>
      <Outlet />
    </>
  )
};