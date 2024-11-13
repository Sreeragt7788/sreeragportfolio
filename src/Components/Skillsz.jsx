import React from 'react';
import './Skillsz.css';

function Skillsz() {
  return (
    <section id="skills" className="skills-section">
      <h2>SKILLS</h2>
      <div className="skills-list">
        <div className="skill">
          <h4>Frontend</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skill">
          <h4>Backend</h4>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="skill">
          <h4>Tools</h4>
          <ul>
            <li>Git</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skillsz;
