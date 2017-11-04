import React, { Component } from 'react'
// import styled, { ThemeProvider, css } from 'styled-components'
// import { invertTheme } from '../../utils/constants'
// import styles from './Home.css'
import Services from '../Services/Services'

class Home extends Component {
    // state = {  }
  render () {
    var {s} = this.props
    return (
      <div>
        {s.length
        ? s.map(s => <Services {...s} key={s.slug} titleLink />)
        : <p>Awaiting services...</p> }
      </div>
    )
  }
}

// const Home = ({s}) => (
//   <div>
//     {s.map(s => <Services {...s} key={s.slug} titleLink />) }
//   </div>
// )

export default Home
