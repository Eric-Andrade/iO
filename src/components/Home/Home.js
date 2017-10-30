import React, {Component} from 'react'
// import styled, { ThemeProvider, css } from 'styled-components'
// import { invertTheme } from '../../utils/constants'
// import styles from './Home.css'
import Services from '../Services/Services'
import services from '../../utils/services.json'

class Home extends Component {
    // state = {  }
  render () {
    return (
      <div>
        {services.services.map(s => <Services {...s} key={s.slug} titleLink />) }
      </div>
    )
  }
}

export default Home
