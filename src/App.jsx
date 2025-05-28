import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Exp from './components/Exp'
import Project from './components/Project'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/experience' element={<Exp />}/>
        <Route path='/projects' element={<Project />}/>
      </Routes>
    </Router>

  )
}

export default App
