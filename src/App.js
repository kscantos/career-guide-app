import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'; 
import Header from './components/Header.js'; 
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage'; 
import Home from './components/HomePage';
import About from './components/AboutusPage';
import Contact from './components/ContactPage';
import Courses from './components/CoursesPage';
import Footer from './components/Footer.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup"> 
            <SignupPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
