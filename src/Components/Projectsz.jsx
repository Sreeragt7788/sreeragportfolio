import React from 'react';
import './Projectsz.css';

function Projectsz() {
  return (
    <section id="projects" className="projects-section">
      <h2>PROJECT</h2>
      <div className="projects-list">
        <div className="project">
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/497f7e176731731.Y3JvcCw4MDMsNjI4LDI5OCw3OQ.jpg" alt="Project 1" />
          <h3>KERALA TOURISM</h3>
          
        </div>
        <div className="project">
          <img src="https://miro.medium.com/v2/resize:fit:1200/1*hRxAkRdeqMAvAsfGqtHEiA.jpeg" alt="Project 2" />
          <h3>FETCH USER</h3>
          
        </div>
        <div className="project">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bBJqI_AGCWN2btSOKecfGNFs6BC0Zvh2NQ&s" alt="Project 3" />
          <h3>FOOD SPOT IN PALAKKAD</h3>
          
        </div>
      </div>
    </section>
  );
}

export default Projectsz;
