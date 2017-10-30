import React, { Component } from 'react'
import 'normalize.css'
import { ThemeProvider } from 'styled-components'
import { colors } from './utils/constants'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Navigator from './components/navigations'
import services from './utils/services.json'
import About from './components/About/About'
import Analytics from './components/Analytics/Analytics'
import Home from './components/Home/Home'
import ServiceDetails from './components/Services/ServiceDetails/ServiceDetails'
import E404 from './components/404/404'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <ThemeProvider theme={colors}>
            <Header />
          </ThemeProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/analytics' component={Analytics} />
            <Route path='/services/:slug' component={props => {
              const s = services.services.filter(s => props.match.params.slug === s.slug)
              return <ServiceDetails s={s[0]} />
            }} />
            <Route component={E404} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
