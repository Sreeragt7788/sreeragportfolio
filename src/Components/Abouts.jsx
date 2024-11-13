import React from 'react';
import './Abouts.css';


function Abouts() {
  return (
    <section id="about" className="about-section">
      <div className='about-img'>
        <img src='https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg' alt='profile'></img>
      </div>
      <h2>ABOUT ME</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
          Hi, I'm Sreerag T, a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. I specialize in creating dynamic, user-friendly web applications that are both scalable and efficient. With a keen interest in problem-solving and continuous learning, I enjoy bringing innovative ideas to life through code.

          My technical skills span various programming languages and frameworks, including <strong>HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB</strong>. I have hands-on experience in designing responsive user interfaces and building robust back-end architectures. Whether it's building seamless front-end experiences or optimizing server-side performance, I strive for clean, maintainable code and effective solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Abouts;