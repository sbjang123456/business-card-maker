import React, { memo } from 'react';
import styles from './Footer.module.css';

const Footer = memo((props) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>Code your JangSu!</p>
    </footer>
  );
});

export default Footer;
