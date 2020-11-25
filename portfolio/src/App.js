import React, { Component } from 'react';

// import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import AboutPage from './pages/about';
import HomePage from './pages/home';
import DevelopmentPage from './pages/development';
import ContactPage from './pages/contact';
import HelloBootstrap from './components/boostratp';



class App extends Component {
  render() {
    return (
      <div> 
        <AboutPage />
        <HomePage />
        <DevelopmentPage />
        <ContactPage /> 
        <HelloBootstrap />
      </div>
    );
  }
}

export default App;