import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import Image from "next/image";

const LoginPage = () => {

  return (
    <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Login</h1>
      <LoginForm />
    </div>
    <div className={styles.imgContainer}>
      <Image src="/illustration-login.png"  fill className={styles.heroImg}/>
    </div>
  </div>
  );
};

export default LoginPage;
