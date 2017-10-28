import React, { Component } from 'react'
import 'normalize.css'
import styled, { ThemeProvider, css } from 'styled-components'
import styles from './App.css'
import { colors } from './utils/constants'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`

class App extends Component {
    // state = {  }
  render () {
    return (
      <ThemeProvider theme={colors}>
        <div>
          <h1 className={styles.heading}>Hello world!</h1>
          <Button>Click me</Button>
          <Button primary>Click me too</Button>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
