import React from 'react'; 
import '../css/footer.css'

function FooterPage () {
    return (
          <div className = "main-footer">
                <footer className="page-footer">
                    <div className="footer">© 2020 Copyright<br></br>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/christalvigil-lillyrose35" target="blank">Connect via LinkedIn</a><br></br>
                        <a href="https://github.com/vichrist" target="blank">Connect via GitHub</a><br></br>
                        {/* <a href="#!" target="blank">Resume</a><br></br> */}
                        {/* <a href="#!" target="blank">Email</a><br></br> */}
                    </div>  
                    </div>
                </footer>
          </div>
      ); 
  };
  
  export default FooterPage; 
  