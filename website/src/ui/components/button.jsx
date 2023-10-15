import { useState } from 'react'
import styles from './button.module.css'


export const Button = ({ ...props }) => {

  return (
    <button
      className={styles.button}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button