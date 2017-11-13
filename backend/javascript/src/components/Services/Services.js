import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Services.css'

class Services extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  // state = {  }
  render () {
    var service = this.props
    return (
      <div>
        <h2 className={styles.title}>
          { this.props.titleLink
            ? <Link to={`/services/${service.slug}`}>{service.sName}</Link>
            : service.sName
          }
        </h2>
        <h4 className={styles.subtitle}>{this.props.sInfo}</h4>
      </div>
    )
  }
}

export default Services
