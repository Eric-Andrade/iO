import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import services from '../utils/services.json'
import AsyncRoute from './AsyncRoute/AsyncRoute'

class Navigator extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={props => <AsyncRoute props={Object.assign({}, props, services)} loading={System.import('./Home/Home')} />} />
        <Route path='/about' component={props => <AsyncRoute props={props} loading={System.import('./About/About')} />} />
        <Route path='/analytics' component={props => <AsyncRoute props={props} loading={System.import('./Analytics/Analytics')} />} />
        <Route path='/services/:slug' component={props => {
          const service = services.services.filter(service => props.match.params.slug === service.slug)
          return <AsyncRoute props={Object.assign({}, props, {service: service[0]})} loading={System.import('./Services/ServiceDetails/ServiceDetails')} />
        }} />
        <Route component={props => <AsyncRoute props={props} loading={System.import('./404/404')} />} />
      </Switch>
    )
  }
}

export default Navigator
