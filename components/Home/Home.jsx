import styles from "./Home.module.css";
import Card from '../Card/Card'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import productsData from "../../data/data";

const Home = () => {
    const navigate = useNavigate();
    const[name, setName] = useState("arjun") 

    const cards = productsData.map((product)=>{
        return(
            <Card
            img = {product.img}
            key={product.id}
            title={product.name}
            price={product.price}
            />
        )
    })

  return (
    <div className={styles.home}>
      {cards}
      <button
      onClick={()=>{
        navigate('/product', {state:{
            name: name
        }})
      }}
      >click me</button>
    </div>
  )
}

export default Home
