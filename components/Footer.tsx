import Image from "next/image";
import styles from "../styles/Footer.module.less";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.box}></div>
    </footer>
  );
};

export default Footer;
