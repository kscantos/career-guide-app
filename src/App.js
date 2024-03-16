import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage'; 
import Home from './components/HomePage';
import About from './components/AboutusPage';
import Contact from './components/ContactPage';
import Courses from './components/CoursesPage';

function App() {
  const [showMainHeader, setShowMainHeader] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        {showMainHeader && (
          <header className="App-header">
            <div>
              <h1>Workwanders</h1>
              <p>Where your future begins.</p>
            </div>
            <div>
              <nav>
                <ul className="nav-links">
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/courses">Courses</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </nav>
            </div>
          </header>
        )}
        <Switch>
          <Route path="/login">
            <LoginPage setShowMainHeader={setShowMainHeader} />
          </Route>
          <Route path="/signup"> 
            <SignupPage setShowMainHeader={setShowMainHeader} />
          </Route>
          <Route path="/home">
            <Home setShowMainHeader={setShowMainHeader} />
          </Route>
          <Route path="/about">
            <About setShowMainHeader={setShowMainHeader} />
          </Route>
          <Route path="/courses">
            <Courses setShowMainHeader={setShowMainHeader} />
          </Route>
          <Route path="/contact">
            <Contact setShowMainHeader={setShowMainHeader} />
          </Route>
        </Switch>
        <footer className="footer">
          <p>&copy; 2024 Workwanders</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
