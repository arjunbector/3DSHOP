import styles from "./Categories.module.css";
const Categories = () => {
  return (
    <div className={styles.categories}>
        <ul>
            <li>Mobiles</li>
            <li>Electronics</li>
            <li>Home Appliances</li>
            <li>Fashion</li>
            <li>Beauty</li>
            <li>Computers</li>
        </ul>
    </div>
  )
}

export default Categories
