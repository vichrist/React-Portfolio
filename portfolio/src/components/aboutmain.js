import React from "react";
import '../css/aboutmain.css'; 
import '../images/christal.jpg';


function AboutMain() {
  return (
    <div className="background-image">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">Christal Vigil
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item ">
              <a className="nav-link" href="/">
                Home 
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="about">
                About
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="development">
                Development
              </a>
            </li>
          </ul>
        </div>
      </nav><br></br>

  

      <div className="jumbotron">
      
      <h1>Full Stack Web Developer</h1>
        <p>
        Opportunity is what has allowed me to discover both my interests and passions. The idea of exerting knowledge to serve as a resource of any sort is a reward of its own. While I have embarked a few different journeys, I have realized that my interests and passions have led to very different paths and for the first time, I have finally experienced a passion for something---full stack web development!
        </p>   
        <p className="quote"><q>Sometimes in the wave of change we find our true direction.</q> Author Unknown</p>
   
      </div>
      <div className="card">
    </div>
   </div>
   <br></br>
  </div>
  );
}

export default AboutMain;