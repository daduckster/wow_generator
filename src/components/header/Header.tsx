import React from 'react';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.header}>OWEN WILSON WOW GENERATOR</h1>
    </div>
  );
}

export default Header;
