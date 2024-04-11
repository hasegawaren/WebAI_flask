import Image from "next/image";
import styles from "./result.module.css";

export const metadata = {
  title: "DKD Predictor",
};


const AboutPage = () => {

  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.patient}>
        <div>Name : Phichittra Jeenduang</div>   
      </div>
      <div className={styles.imgContainer}>
        <Image src="/Kidney.png"  fill className={styles.img}/>
      </div>
          <div className={styles.text}>Stage 1</div>
          <div className={styles.text1}>Kidney damage present but normal kidney function and a GFR of 90% or above.</div>
          <div><button button className={styles.btn}>
            <img src="/icon/person.svg"/>Patient</button></div>
      </div>
  );
};

export default AboutPage;
