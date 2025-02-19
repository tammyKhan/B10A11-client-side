import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import FoodCard from "../components/FoodCard";

const AvailableFoods = () => {
  const { user } = useContext(AuthContext); 
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [sortByExpiry, setSortByExpiry] = useState(false);
  

  useEffect(() => {
    fetchFoods();
  }, [sortByExpiry]); 

  const fetchFoods = async () => {
    try {
      const sortQuery = sortByExpiry ? "?sortBy=expiry" : "";
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/food${sortQuery}`);
      setFoods(response.data);
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };
  
  const handleSort = () => {
    setSortByExpiry(!sortByExpiry); // Sort Toggle
  };

  return (
    <div className=" container mx-auto p-6">
      <h2 className="text-2xl flex items-center justify-center font-bold mb-4">Available Foods</h2>
      <div className="flex items-center justify-end">
         {/*  Sorting Button */}
       <button onClick={handleSort} className="cursor-pointer bg-red-700 text-white hover:bg-white hover:text-red-700 hover:border-2 border-red-700 px-4 py-2 rounded-md mb-4">
        {sortByExpiry ? "Show Default Order" : "Sort by Expiry Date"}
      </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {foods.map((food) => (
           <FoodCard
           key={food._id}
           food={food}
           ></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
