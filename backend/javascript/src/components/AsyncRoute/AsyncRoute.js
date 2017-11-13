import React, { Component } from 'react'

class AsyncRoute extends Component {
  getInitialState () {
    return {
      loaded: false
    }
  }

  componentDidMount () {
    this.props.loading.then(module => {
      this.component = module.default
      this.setState({loaded: true})
    })
  }

  render () {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />
    } else {
      return <h2 style='color: #5c5c5c'>Loading...</h2>
    }
  }
}

export default AsyncRoute
