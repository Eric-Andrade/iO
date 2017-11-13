import React, {Component} from 'react'
import Services from '../Services'

class ServiceDetails extends Component {
    // state = {  }
  render () {
    var service = this.props
    return (
      <div>
        <Services {...service.service} />
      </div>
    )
  }
}

export default ServiceDetails
