import React, {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FoodCard from './FoodCard';
import axios from 'axios';

const FeaturedFoods = () => {
  const navigate = useNavigate();

  const [featuredFoods, setFeaturedFoods] = useState([]);

  useEffect(() => {
    fetchFeaturedFoods();
  }, []);

  const fetchFeaturedFoods = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/featured-foods`);
      setFeaturedFoods(response.data);
    } catch (error) {
      console.error("Error fetching featured foods:", error);
    }
  };


  return (
    <div className="my-12 container px-6 mx-auto">
      <h2 className="text-2xl font-bold text-center  mt-16 mb-11">"Sharing is Caring: Featured Foods for You!" 🥗</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {featuredFoods.map((food) => (
           <FoodCard
           key={food._id}
           food={food}
           ></FoodCard>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-red-700 rounded-md lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-red-500 cursor-pointer"
          onClick={() => navigate('/available-foods')}
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default FeaturedFoods;
