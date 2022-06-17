import React from 'react';
import ReactPlayer from 'react-player';
import styles from './Video.module.scss';
import { MovieData } from '../../types/movieData';

interface PropTypes {
  data: MovieData
}

function Video({ data }: PropTypes) {
  return (
    <section className={styles.videoContainer}>
      <div className={styles.videoBox}>
        <ReactPlayer
          url={data.video}
          playing
          controls
          width="100%"
          height="auto"
        />
      </div>
    </section>
  );
}

export default Video;
