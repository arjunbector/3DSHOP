import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        3<span>D</span>SHOP
      </div>
      <div className={styles.right}>
        <ul>
          <li><a>Products</a></li>
          <li><a>Explore</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
