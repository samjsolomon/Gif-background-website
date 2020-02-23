import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Header from './components/Header';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from './components/About';
import Services from './components/Services';


function App() {
  return (
    <Router>
      <div className="App">  
        <Nav />
          <Switch>
            <Route path="/" exact component={Header}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/services" component={Services}/>
            
          </Switch>
      </div>
    </Router>
  );
}

export default App;
