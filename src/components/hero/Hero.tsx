import React from 'react';
import styles from './Hero.module.scss';

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <figure className={styles.wavesContainer}>
        <img className={styles.img} src="./assets/waves.png" alt="waves pattern" />
      </figure>
      <figure className={styles.palmsContainer}>
        <img className={styles.img} src="./assets/palms.png" alt="roads with palms" />
      </figure>
    </div>
  );
}

export default Hero;
