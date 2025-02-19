import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";

const MyRequest = () => {
  const { user } = useContext(AuthContext);
  const [requestedFoods, setRequestedFoods] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/my-requests?email=${user.email}`)
      .then(res => setRequestedFoods(res.data))
      .catch(error => console.error("Error fetching requested foods:", error));
  }, [user.email]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">My Requested Foods</h2>
      {requestedFoods.length === 0 ? (
        <p className="text-center text-gray-500">No requested foods yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {requestedFoods.map(food => (
            <div key={food._id} className="bg-white shadow-lg p-4 rounded-lg">
              <img src={food.foodImage} alt={food.foodName} className="w-full h-40 object-cover rounded-md"/>
              <h3 className="text-xl font-bold mt-2">{food.foodName}</h3>
              <p className="text-sm text-gray-500">{food.pickupLocation}</p>
              <p className="text-sm text-gray-500">Expires: {food.expireDate}</p>
              <span className="text-red-600 font-semibold">Status: {food.status}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRequest;
