import React from 'react';
import './App.css';
import Abouts from './Components/Abouts';
import Skillsz from './Components/Skillsz';
import Projectsz from './Components/Projectsz';
import Contacts from './Components/Contacts';


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Abouts />
        <Skillsz />
        <Projectsz />
        <Contacts />
      </main>

      <footer>
        <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

