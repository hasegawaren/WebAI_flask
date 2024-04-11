import Image from "next/image";
import styles from "./about.module.css";

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
      <div className={styles.form}>
        <div>1. Age (Year)</div>
        <div>2. Duration (Year)</div>
        <div>3. BMI (kg/m2)</div>
        <div>4. SBP (mmHg)</div>
        <div>5. HDL (mg/DL)</div>
        <div>6. DBP (mmHg)</div>
        <div>7. FBS (mg/DL)</div>
        <div>8. HbA1C (%)</div>
        <div>9. CHO (mg/DL)</div>
        <div>10. TG (mg/DL)</div>
        <div>11. LDL (mg/DL)</div>
      </div>
      <div className={styles.input}>
      <form >
          <div><input className={styles.inputstyle} type="text"/></div>
          <div><input className={styles.inputstyle} type="text"/></div>
          <div><input className={styles.inputstyle} type="text"/></div>
          <div><input className={styles.inputstyle} type="text"/></div>
          <div><input className={styles.inputstyle} type="text"/></div>
          <div><input className={styles.inputstyle} type="text"/></div>
          <div><input className={styles.inputstyle}type="text"/></div>
          <div><input className={styles.inputstyle} type="text"/></div>
          <div><input className={styles.inputstyle}  type="text"/></div>
          <div><input className={styles.inputstyle} type="text"/></div>
          <input className={styles.inputstyle} type="text"/>
          <div className={styles.text}>Please check the information before predict</div>
          <div><button className={styles.btn}><img src="/icon/clipboard.svg"  /> Predict</button></div>
        </form>
      </div>
      </div>
  );
};

export default AboutPage;
