import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from './components/pages/Notfound';
import Adduser from './components/users/Adduser';
import Showusers from './components/users/Showusers';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home/>
        <Switch>
          <Route exact path='/' component={Adduser} />
          <Route exact path='/showusers' component={Showusers} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
