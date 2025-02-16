import React from 'react';
import Banner from '../components/Banner';
import FeaturedFoods from '../components/FeaturedFoods';

const Home = () => {
 
  return (
    <div className=''>
      {/* Banner */}
      <Banner></Banner>
      <FeaturedFoods></FeaturedFoods>
    </div>
  );
};

export default Home;