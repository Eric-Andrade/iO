import React, { Component } from 'react'
import Services from '../Services/Services'

class Home extends Component {
    // state = {  }
  render () {
    var {services} = this.props
    return (
      <div>
        {services.length
        ? services.map(service => <Services {...service} key={service.slug} titleLink />)
        : <p>No services yet...</p> }
      </div>
    )
  }
}

export default Home
