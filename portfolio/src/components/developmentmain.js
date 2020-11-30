import React from "react";
import '../css/developmentmain.css'; 


function DevelopmentMain() {
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
      
      <h1 className='development'>Bill Boards</h1>
      <ul>
          <a href="https://sleepy-eyrie-55325.herokuapp.com/" target="_blank"><li>Deployed App</li></a>
          <a href="https://github.com/vichrist/BillBoards" target="_blank"><li>GitHub Repository</li></a>
      </ul>
        {/* <img src= "../images/Project1" alt="project 1" width="1200"/> */}
    </div><div className="card">
  </div>


    <div className="jumbotron">
      
        <h1 className='development'>Weather Trips</h1>
        <ul>
            <a href="https://mmcginley32.github.io/project1/index.html" target="_blank"><li>Deployed App</li></a>
            <a href="https://github.com/mmcginley32/project1" target="_blank"><li>GitHub Repository</li></a>
        </ul>
          {/* <img src= "../images/project2" alt="project 2" width="1200"/> */}
      </div><div className="card">
    </div>

    <div className="jumbotron">
      
        <h1 className='development'>Eat-Da-Burger</h1>
        <ul>
            <a href="https://stormy-tundra-38579.herokuapp.com/" target="_blank"><li>Deployed App</li></a>
            <a href="https://github.com/vichrist/Add-Da-Burger-App" target="_blank"><li>GitHub Repository</li></a>
        </ul>
          {/* <img src= "../images/Project3" alt="project 3" width="1200"/> */}
      </div><div className="card">
    </div>

    <div className="jumbotron">
      
        <h1 className='development'>Password Generator</h1>
        <ul>
            <a href="https://vichrist.github.io/Password-Generator-/" target="_blank"><li>Deployed App</li></a>
            <a href="https://github.com/vichrist/Password-Generator-" target="_blank"><li>GitHub Repository</li></a>
        </ul>
          {/* <img src= "../images/project4" alt="project 4" width="1200"/> */}
      </div><div className="card">
    </div>

    <div className="jumbotron">

        <h1 className='development'>Work Day Planner</h1>
        <ul>
            <a href="https://vichrist.github.io/Work-Day-Planner/" target="_blank"><li>Deployed App</li></a>
            <a href="https://github.com/vichrist/WK-5Homework" target="_blank"><li>GitHub Repository</li></a>
        </ul>
          {/* <img src= "../images/Project5" alt="project 5" width="1200"/> */}
      </div><div className="card">
    </div>

    <div className="jumbotron">
      
        <h1 className='development'>Weather Dashboard</h1>
        <ul>
            <a href="https://vichrist.github.io/vichrist.wk6.github.io/" target="_blank"><li>Deployed App</li></a>
            <a href="https://github.com/vichrist/WK-6Homework" target="_blank"><li>GitHub Repository</li></a>
        </ul>
          {/* <img src= "../images/Project6" alt="project 6" width="1200"/> */}
      </div><div className="card">
    </div>


  </div>
  <br></br>
</div>
  );
}

export default DevelopmentMain;