import React from 'react'
import styles from "./Card.module.css"
import { useNavigate } from 'react-router-dom'
const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div 
    onClick={()=>{
      navigate("/product",{state:{
        ...props,
      }} )
    }} className={styles.card}>
      <div className={`${styles['img-div']}`}>
        <img src={props.img} alt="" />
      </div>
      <div className={styles.description}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.price}>₹{props.price}</p>
        {/* {false && <p className={styles.price}>₹{props.model}</p>} */}
      </div>
    </div>
  )
}

export default Card
