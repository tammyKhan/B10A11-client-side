import React from 'react';
import FeaturedFoods from '../components/FeaturedFoods';

const AvailableFoods = () => {
  // Sample data for featured foods
const featuredFoods = [
  { id: 1, name: 'Pizza', description: 'Delicious cheese pizza', price: 9.99, imageUrl: 'https://via.placeholder.com/400' },
  { id: 2, name: 'Burger', description: 'Juicy beef burger', price: 7.49, imageUrl: 'https://via.placeholder.com/400' },
  { id: 3, name: 'Pasta', description: 'Spaghetti with marinara sauce', price: 12.99, imageUrl: 'https://via.placeholder.com/400' },
  { id: 4, name: 'Sushi', description: 'Fresh salmon sushi', price: 14.99, imageUrl: 'https://via.placeholder.com/400' },
  { id: 5, name: 'Salad', description: 'Healthy green salad', price: 5.99, imageUrl: 'https://via.placeholder.com/400' },
  { id: 6, name: 'Sandwich', description: 'Grilled chicken sandwich', price: 6.49, imageUrl: 'https://via.placeholder.com/400' },
];

  return (
    <div>
      <FeaturedFoods featuredFoods={featuredFoods}></FeaturedFoods>
    </div>
  );
};

export default AvailableFoods;