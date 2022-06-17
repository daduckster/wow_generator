import React from 'react';
import styles from './PlayBtn.module.scss';

function PlayBtn() {
  return (
    <div className={styles.playBtnContainer}>
      <button className={styles.playBtn} type="button">GET WOWED!</button>
    </div>
  );
}

export default PlayBtn;
