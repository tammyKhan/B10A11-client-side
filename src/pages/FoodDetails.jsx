import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RequestFoodModal from "../components/RequestFoodModal";

const FoodDetails = () => {
  const { id } = useParams(); //  Get Food ID from URL
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/food/${id}`)
      .then((res) => {
        setFood(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <span className="loading loading-bars loading-lg flex mx-auto"></span>
    );
  }
  if (!food) return <p className="text-center text-red-500">Food Not Found</p>;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={food.foodImage}
            alt={food.foodName}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">{food.foodName}</h1>
          <p className="text-xs text-gray-600">
            {food.additionalNotes || "No additional information available."}
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-gray-500">Quantity</span>
              <p className="text-sm font-bold">{food.quantity}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Pickup Location</span>
              <p className="text-sm font-bold">{food.pickupLocation}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Expiration Date</span>
              <p className="text-sm  font-bold">
                {food.expireDate || "N/A"}
              </p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Status</span>
              
              <p className="text-sm font-bold">{food.status}</p>
              
            </div>
          </div>

          {/* Request Button */}
          <button onClick={() => setShowModal(true)}
           className=" btn text-white w-full mt-5 bg-red-700 rounded-md hover:bg-white hover:text-red-700 hover:border-2 border-red-700 cursor-pointer">Request Food</button>
        </div>
      </div>
       {/* Modal */}
       {showModal && (
        <RequestFoodModal 
          food={food} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </div>
  );
};

export default FoodDetails;
