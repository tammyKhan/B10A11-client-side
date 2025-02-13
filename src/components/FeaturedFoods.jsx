import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const FeaturedFoods = ({ featuredFoods }) => {
  const { user } = useContext(AuthContext); // Check if the user is logged in
  const navigate = useNavigate();

  const handleViewDetails = (foodId) => {
    if (!user) {
      navigate('/login'); // Redirect to login if user is not logged in
    } else {
      navigate(`/food-details/${foodId}`); // Navigate to food details page
    }
  };

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-center mb-6">What we Offer for you</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {featuredFoods.slice(0, 6).map((food) => (
          <div key={food.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={food.imageUrl} alt={food.name} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg font-semibold">{food.name}</h3>
              <p className="text-gray-600">{food.description}</p>
              <div className="card-actions justify-between mt-4">
                <span className="text-xl font-semibold">${food.price}</span>
                <button
                  className="btn border-2 border-red-700 text-red-700 "
                  onClick={() => handleViewDetails(food.id)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-red-700 rounded-md lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-red-500"
          onClick={() => navigate('/available-foods')}
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default FeaturedFoods;
