import React, { Component } from 'react'

// React Router
import {Route} from 'react-router-dom';

// Components
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/home' component={Home} />
      </div>
    )
  }
}

export default App;