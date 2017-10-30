import React, {Component} from 'react'
// import styled, { ThemeProvider, css } from 'styled-components'
// import { invertTheme } from '../../utils/constants'
// import styles from './ServiceDetails.css'
import Services from '../Services'

class ServiceDetails extends Component {
    // state = {  }
  render () {
    var s = this.props
    return (
      <div>
        <Services {...s.s} />
      </div>
    )
  }
}

export default ServiceDetails
