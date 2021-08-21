import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkExperiencePage from './pages/WorkExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import CvPage from './pages/CvPage';
import ContactPage from './pages/CvPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/about" component={AboutPage} />
        <Route path="/work-experience" component={WorkExperiencePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/cv" component={CvPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/" component={HomePage} />
      </main>
    </Router>
  );
};

export default App;
