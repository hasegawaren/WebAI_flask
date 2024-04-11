"use client"

import Image from "next/image";
import styles from "./home.module.css";
import React, { useState, useEffect} from "react";
import Link from 'next/link';

function Home() {

  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
    .then((Response) => Response.json())
    .then((data) => {
      setMessage(data.message);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Hello User</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
          <Link href="./DKD"><button className={styles.button} >DKD Predictor</button></Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/illustration.png"  fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;
