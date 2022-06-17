import React from 'react';
import styles from './Info.module.scss';
import { MovieData } from '../../types/movieData';

interface PropTypes {
  data: MovieData
}

function Info({ data }: PropTypes) {
  return (
    <section className={styles.infoContainer}>
      <header className={styles.infoHeader}>wow info</header>
      <div className={styles.textWrapper}>
        <div className={styles.lineBox}>
          <p className={styles.sectionName}>movie:</p>
          <p>
            &quot;
            {data.movie}
            &quot;
          </p>
        </div>
        <div className={styles.lineBox}>
          <p className={styles.sectionName}>year:</p>
          <p>{data.year}</p>
        </div>
        <div className={styles.lineBox}>
          <p className={styles.sectionName}>timestamp:</p>
          <p>{data.timestamp}</p>
        </div>
        <div className={styles.lineBox}>
          <p className={styles.sectionName}>current wow:</p>
          <p>{data.currentWow}</p>
        </div>
        <div className={styles.lineBox}>
          <p className={styles.sectionName}>total wows:</p>
          <p>{data.totalWows}</p>
        </div>
      </div>
      <div className={styles.posterBox}>
        <img className={styles.poster} src={data.poster} alt="poster of the movie" />
      </div>
    </section>
  );
}

export default Info;
