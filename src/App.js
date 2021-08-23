import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BioPage from './pages/BioPage';
import ProjectsPage from './pages/ProjectsPage';
import CvPage from './pages/CvPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/about" component={AboutPage} />
        <Route path="/bio" component={BioPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/cv" component={CvPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/" component={HomePage} exact />
      </main>
    </Router>
  );
};

export default App;
