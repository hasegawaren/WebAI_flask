import Image from "next/image";
import styles from "./dkd.module.css";
import Link from 'next/link';

export const metadata = {
  title: "DKD Predictor",
};


const AboutPage = () => {

  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.patient}>
        <div className={styles.text1}>Name : Phichittra Jeenduang</div>   
        <div className={styles.text2}>ID : 64109010353</div>
      </div>
      <div className={styles.form}>
        <div>1. Age (Year)</div>
        <div>2. Diabetes Duration (Year)</div>
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
          <div><Link href="../predict-result"><button className={styles.btn}><img src="/icon/clipboard.svg"  /> Predict</button></Link></div>
        </form>
      </div>
      </div>
  );
};

export default AboutPage;
