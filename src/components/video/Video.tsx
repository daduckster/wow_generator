import React from 'react';
import ReactPlayer from 'react-player';
import styles from './Video.module.scss';

function Video() {
  return (
    <section className={styles.videoContainer}>
      <div className={styles.videoBox}>
        <ReactPlayer
          url="https://videos.ctfassets.net/bs8ntwkklfua/3gDqWsIvAZri5egyZobFze/08624850f28338348825e46c8a1f3d26/Marmaduke_Wow_3_1080p.mp4"
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
