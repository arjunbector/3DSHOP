import styles from "./Home.module.css";
import Card from "../Card/Card";
import productsData from "../../data/data";
import Categories from "../Categories/Categories";

const Home = () => {

  const cards = productsData.map((product) => {
    return (
      <Card
        img={product.img}
        key={product.id}
        title={product.name}
        price={product.price}
        model={product.model}
      />
    );
  });

  return (
    <>
      <Categories />
      <div className={styles.home}>{cards}</div>
    </>
  );
};

export default Home;
