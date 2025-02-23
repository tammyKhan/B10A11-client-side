import React from 'react';
import Banner from '../components/Banner';
import FeaturedFoods from '../components/FeaturedFoods';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
 
  return (
    <div className=''>
      <Banner></Banner>
      <FeaturedFoods></FeaturedFoods>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;