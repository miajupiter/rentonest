import { useState } from 'react'
import styles from './counters.module.css'
import { Tabs, Tab,NotFoundPage } from 'nextra-theme-docs'

function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }
// const d=()=><NotFoundPage  />
  return (
    <div>
      <button onClick={handleClick} className={styles.counter}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default function MyApp() {
  return <MyButton />
}