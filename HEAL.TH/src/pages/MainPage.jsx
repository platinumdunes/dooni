import React from 'react';
import Cards_Home from './Cards_Home';
import GoToSelfD from './GoToSelfD';
import Carousel from './Carousel';
import Hero from './hero';

function switch_page() {
  return (
    <div style={{ background: '#566d6c' }}>
      <Hero/>
      <Cards_Home/>
      <GoToSelfD />
      <Carousel/>
    </div>
  )
}

export default switch_page