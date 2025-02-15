import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";

const AvailableFoods = () => {
  const { user } = useContext(AuthContext); // Check if the user is logged in
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [sortByExpiry, setSortByExpiry] = useState(false);
  

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/food`);
        setFoods(response.data);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };
    fetchFoods();
  }, []);

  const handleSort = () => {
    const sortedFoods = [...foods].sort((a, b) => new Date(a.expireDate) - new Date(b.expireDate));
    setFoods(sortedFoods);
    setSortByExpiry(!sortByExpiry);
  };

  const handleViewDetails = (foodId) => {
    if (!user) {
      navigate('/login'); // Redirect to login if user is not logged in
    } else {
      navigate(`/food-details/${foodId}`); // Navigate to food details page
    }
  };

  return (
    <div className=" container mx-auto p-6">
      <h2 className="text-2xl flex items-center justify-center font-bold mb-4">Available Foods</h2>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {foods.map((food) => (
          <div key={food._id} className="card bg-base-100 shadow-xl">
          <figure>
            <img src={food.foodImage} alt={food.foodName} className="w-full h-48 object-cover" />
          </figure>
          <div className="card-body">
            <h3 className="card-title text-lg font-semibold">{food.foodName}</h3>
            <p className="text-gray-600">{food.additionalNotes.slice(0, 85)} ....</p>
            <div className="card-actions justify-between my-2">
              <span className="text-xs mb-2 font-semibold">Expired Date: {food.expireDate}</span>
              <button
                className="btn border-2 border-red-700 text-red-700 "
                onClick={() => handleViewDetails(food._id)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
