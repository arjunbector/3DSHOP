import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "./ProductPage.module.css";
import { useLocation } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

const ProductPage = (props) => {
  const location = useLocation();
  console.log(location.state.title);
  const Model = (args) => {
    const { scene } = useGLTF(location.state.model);
    return <primitive object={scene} {...args} />;
  };
  return (
    <div className={styles.page}>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
        className={styles.canvas}
      >
        <color attach="background" args={["#737373"]} />
        <PresentationControls
          speed={1.5}
          global
          zoom={10}

          //   polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={"studio"} />
          <Model scale={0.8} />
        </PresentationControls>
      </Canvas>
      <div className={styles.description}>
        <h1>{location.state.title}</h1>
        <p>₹{location.state.price}</p>
        <div className={styles.btns}>
          <button className={styles.btn}>Add to cart</button>
          <button className={styles.btn}>
            <FaCamera /> Virtual Try
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
