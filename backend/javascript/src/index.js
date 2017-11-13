import React from 'react'
import { render } from 'react-dom'
import { install } from 'offline-plugin/runtime'
import App from './components/App/App'
import './utils/base.css'

render(<App />, document.getElementById('app'))

if (process.env.NODE_ENV === 'production') {
  install()
}
