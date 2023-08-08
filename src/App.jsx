import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Works } from './pages/Works';
import { Work } from './components/Work';
import './App.css';
import { Navbar } from './components/Navbar';
import {useState, useEffect, createContext} from 'react';

const works = [
  { 
    id:1,
    path: 'platon-study-case',
    slug: 'platon',
    title : 'Le challenge',
    description: "Platon a décidé de se lancer à l'époque malgré une crise économique difficile. Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence."
  },
  { 
    id:2,
    path: 'solane-study-case',
    slug: 'solane',
    title : 'Solane est le premier vendeur de fraises du Poitou-Charentes',
    description: "Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné."
  },
  {
    id:3,
    path: 'sedal-study-case',
    slug: 'solane',
    title: "Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas",
    description: 'Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l\'ont dit, "les derniers seront les premiers".'
  }
];

export const AppContext = createContext()

function App() {
  const [dayMode, setDayMode] = useState(localStorage.getItem('dayMode') || true);
  
  useEffect(() => {
    if (dayMode) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  }, [dayMode]); 

  return (
    <>
      <div className='App'>
        <AppContext.Provider value={{works, dayMode, setDayMode}}>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='works' element={<Works />}>
                {works.map(work => 
                  <Route key={work.id} path={work.path} element={<Work key={work.id} title={work.title} description={work.description} path={work.path}/>} />
                )}
              </Route>
              <Route path='*' element={<h1>Error !!!!!!!!!!!!!!!!</h1>}/>
            </Routes>
          </Router>
        </AppContext.Provider>
      </div>
    </>
  )
}

export default App
