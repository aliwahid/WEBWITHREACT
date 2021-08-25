import Home from './pages/home';
import About from './pages/Aboutpage';
import React from "react";
import {
  BrowserRouter as Router,Switch,Route
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route exact path="/About">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
