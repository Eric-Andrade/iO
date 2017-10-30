import React from 'react'
import styles from './Button1.css'
// import styled, { css } from 'styled-components'

// const Button = styled.button`
//   border-radius: 3px;
//   padding: 0.25em 1em;
//   margin: 0 1em;
//   background: ${props => props.theme.WHITE};
//   color: ${props => props.theme.PRIMARY};
//   border: 2px solid ${props => props.theme.PRIMARY};

//   ${props => props.primary && css`
//     background: ${props => props.theme.PRIMARY};
//     color: white;
//   `}
// `

export default function SimpleButton ({ children, onPress, disabled }) {
  return (
    <button className={styles.button1} onClick={onPress} disabled={disabled} >
      {children}
    </button>
  )
}
