import React from "react";
import '../css/homemain.css'; 



function HomeMain() {
  return (
    <div className="background-image">
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
      </nav>
      <br></br>
  
      <div className="jumbotron">
      <div className="container-home">

      <h1>Development Standards for Structural Design</h1>
      <p>
        As a developer it is not only my mission to meet my clients objectives, but a vision to build a solid  relationship that will entrust my services on an ongoing basis. Allow me to provide structural quality code strategies that will not only see to enhance your Search Engine Optimization, but standards that will provide access to a range of users via responsive layouts, integrated testing strategies that will prevent delays when it's time to go web-live, and compatibility that will give access to the majority of web-broswers therefore promoting larger customer base activity. 
    </p>
    <div className="card">
    </div>
   </div>
  </div>

  <div className="jumbotron">
      <div className="container-home">

      <h1>UI Standards for Structural Design</h1>
      <p>
        The user interface (UI) design standards are concepts that are integrated within the development stage of building an engaging user experience. Let's get innovative in the stage of creativity and enhance both the usability and beauty of your website.  
    </p>
    <div className="card">
    </div>
   </div>
  </div>
  <br></br>
</div>
  );
}

export default HomeMain;