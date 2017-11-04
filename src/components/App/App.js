import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'normalize.css'
import { ThemeProvider } from 'styled-components'
import { colors } from '../../utils/constants'

import Header from '../Header/Header'
import Navigator from '../navigations'

class App extends Component {
// state = {  }
  render () {
    return (
      <Router>
        <div>
          <ThemeProvider theme={colors}>
            <Header />
          </ThemeProvider>
          <ThemeProvider theme={colors}>
            <Navigator />
          </ThemeProvider>
        </div>
      </Router>
    )
  }
}

export default App
