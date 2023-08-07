import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Works } from './pages/Works';
import './App.css'
import { Navbar } from './components/Navbar';
import {useState, useEffect} from 'react'

function App() {
  const [dayMode, setDayMode] = useState(true);

  const works = [
    { title : 'f',
      slug: 'h',
      description: 'g'
    },
    { title : '1',
    slug: '2',
    description: '3'
  }
  ]

  useEffect(() => {
    if (dayMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [dayMode]); 

  return (
    <>
      <div className='App'>
        <Router>
          <button className='btn' onClick={()=> {setDayMode(!dayMode)}}>{dayMode ? 'Passez en mode sombre' : 'Passez en mode clair'}</button>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/works' element={<Works />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
