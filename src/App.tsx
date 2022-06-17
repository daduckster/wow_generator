import React from 'react';
import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import Video from './components/video/Video';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';
import PlayBtn from './components/playBtn/PlayBtn';

function App() {
  return (
    <div>
      <Hero />
      <Header />
      <Video />
      <PlayBtn />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
