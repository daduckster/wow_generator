import React from 'react';
import styles from './PlayBtn.module.scss';

interface PropTypes {
  getMovieData: () => void
}

function PlayBtn({ getMovieData }: PropTypes) {
  return (
    <div className={styles.playBtnContainer}>
      <button onClick={getMovieData} className={styles.playBtn} type="button">GET WOWED!</button>
    </div>
  );
}

export default PlayBtn;
