import React, { Component } from 'react'

// React Router
import {Route, Switch} from 'react-router-dom';

// Components
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>    
      </div>
    )
  }
}

export default App;