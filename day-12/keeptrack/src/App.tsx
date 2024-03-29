import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import { NavLink, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './home/HomePage';





function App() {
  return (
    // <div>

    // <blockquote cite="Benjamin Franklin">
    //   Tell me and I forget, teach me and I may remember, involve me and I learn.
    // </blockquote>
    // </div>

    // <div className="container">    // (before router)
    //   <ProjectsPage />
    // </div>
    <Router>
      <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          Projects
        </NavLink>
      </header>

      <div className='container'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>

      </div>
    </Router>


  );
}


export default App;
