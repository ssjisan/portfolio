import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Projects from './Components/Projects/Projects';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home/Home';
import Contact from './Components/Contact/Contact';
import Myself from './Components/Myself/Myself';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/myself">
          <Myself></Myself>
        </Route>
        <Route>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
