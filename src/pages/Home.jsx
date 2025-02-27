import React from 'react';
import Banner from '../components/Banner';
import FeaturedFoods from '../components/FeaturedFoods';
import WhyChooseUs from '../components/WhyChooseUs';
import OurStrength from '../components/OurStrength';

const Home = () => {
 
  return (
    <div className=''>
      <Banner></Banner>
      <FeaturedFoods></FeaturedFoods>
      <WhyChooseUs></WhyChooseUs>
      <OurStrength></OurStrength>
    </div>
  );
};

export default Home;