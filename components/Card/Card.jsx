import React from 'react'
import styles from "./Card.module.css"
const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={`${styles['img-div']}`}>
        <img src={props.img} alt="" />
      </div>
      <div className={styles.description}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.price}>{props.price}</p>
      </div>
    </div>
  )
}

export default Card
