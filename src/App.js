import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BioPage from './pages/BioPage';
import ProjectsPage from './pages/ProjectsPage';
import CvPage from './pages/CvPage';
import ContactPage from './pages/ContactPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Header />
      <main>
        <TransitionGroup>
          <CSSTransition timeout={700} classNames="fade" key={location.key}>
            <Switch location={location}>
              <Route path="/about" component={AboutPage} />
              <Route path="/bio" component={BioPage} />
              <Route path="/projects" component={ProjectsPage} />
              <Route path="/cv" component={CvPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/" component={HomePage} exact />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </div>
  );
};

export default App;
