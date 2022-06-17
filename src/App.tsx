import React, { useEffect, useState } from 'react';
import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import Video from './components/video/Video';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';
import PlayBtn from './components/playBtn/PlayBtn';
import { MovieData } from './types/movieData';

function App() {
  const [data, setData] = useState<MovieData>();
  async function getMovieData() {
    const response = await fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random\n');
    const [newData] = await response.json();
    if (!newData) return;
    setData({
      movie: newData.movie,
      year: newData.year,
      timestamp: newData.timestamp,
      currentWow: newData.current_wow_in_movie,
      totalWows: newData.total_wows_in_movie,
      poster: newData.poster,
      video: newData.video['1080p'],
    });
  }
  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <div>
      <Hero />
      <Header />
      {data && (<Video data={data} />)}
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <PlayBtn getMovieData={getMovieData} />
      {data && (<Info data={data} />)}
      <Footer />
    </div>
  );
}

export default App;
