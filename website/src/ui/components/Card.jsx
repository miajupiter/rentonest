import React from 'react'
import styles from '@/styles/Home.module.css'

export const Card = (props = {}) => {

  const InnerCard = () => <>
    <h2 className={styles.cardTitle}>
      {props.icon}
      <div>{props.title || ''}<span> -&gt;</span></div>
    </h2>
    {props.children}
  </>

  if (props.href) {
    return <a
      href={props.href}
      className={styles.card}
      target={props.target}
      title={props.title}
    >
      <InnerCard />
    </a>
  } else {
    return <div className={styles.card}><InnerCard /></div>
  }

}
