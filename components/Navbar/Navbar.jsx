import { useState } from "react";
import styles from "./Navbar.module.css";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { CiShoppingCart } from "react-icons/ci";
import { BiUserVoice } from "react-icons/bi";

const Navbar = () => {
  const [input, setInput] = useState("");
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          3<span>D</span>SHOP
        </div>
        <div className={`${styles["input-div"]}`}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search 3DSHOP"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <HiMiniMagnifyingGlass className={styles.searchIcon} />
        </div>
        <div className={`${styles["voice-assistant-wrapper"]}`}>
          <BiUserVoice className={styles.voiceIcon} />
          Virtual Assistant
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.cartDiv}>
          <div className={styles.cartItems}>0</div>
          <CiShoppingCart className={styles.cart} />
        </div>
        CART
      </div>
    </div>
  );
};

export default Navbar;
