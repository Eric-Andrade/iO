import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Services.css'

class Services extends Component {
    // state = {  }
  render () {
    var s = this.props
    return (
      <div>
        <h2 className={styles.title}>
          { this.props.titleLink
            ? <Link to={`/services/${s.slug}`}>{s.sName}</Link>
            : s.sName
          }
        </h2>
        <p>{this.props.sInfo}</p>
      </div>
    )
  }
}

export default Services
