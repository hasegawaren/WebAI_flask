"use client";

import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useRouter } from 'next/router';

const LoginForm = () => {

  const [state, formAction] = useFormState(login, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.text}>Your Hospital ID</div>
      <input type="text"  name="hospitalID" />
      <div className={styles.text1}>Password</div>
      <input type="password" name="password" />
      <button>Enter</button>
    </form>
  );
};

export default LoginForm;
