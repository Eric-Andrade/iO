import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './About/About'
import Analytics from './Analytics/Analytics'
// import Header from './Header/Header'
import Home from './Home/Home'
import Services from './Services/Services'

class Navigator extends Component {
    // state = {  }
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/analytics' component={Analytics} />
          <Route path='/services' component={Services} />
        </div>
      </Router>
    )
  }
}

export default Navigator
