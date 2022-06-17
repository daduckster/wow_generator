import React from 'react';
import styles from './Info.module.scss';

function Info() {
  return (
    <section className={styles.infoContainer}>
      <header className={styles.infoHeader}>wow info</header>
      <div className={styles.textWrapper}>
        <div className={styles.lineBox}>
          <p className={styles.sectionName}>movie:</p>
          <p>&quot;Marmaduke&quot;</p>
        </div>
        <div className={styles.lineBox}>
          <p className={styles.sectionName}>year:</p>
          <p>2010</p>
        </div>
        <div className={styles.lineBox}>
          <p className={styles.sectionName}>timestamp:</p>
          <p>00:33:14</p>
        </div>
        <div className={styles.lineBox}>
          <p className={styles.sectionName}>current wow:</p>
          <p>3</p>
        </div>
        <div className={styles.lineBox}>
          <p className={styles.sectionName}>total wows:</p>
          <p>4</p>
        </div>
      </div>
      <div className={styles.posterBox}>
        <img className={styles.poster} src="https://images.ctfassets.net/bs8ntwkklfua/1M4wQc5Rkk9mlcKB5Z4fga/25fef21907983d1d667e7e28c6a0ed14/Marmaduke_Poster.jpg" alt="poster of the movie" />
      </div>
    </section>
  );
}

export default Info;
