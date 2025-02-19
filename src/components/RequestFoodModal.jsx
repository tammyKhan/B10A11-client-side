import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RequestFoodModal = ({ food, onClose }) => {
  const [notes, setNotes] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRequestFood = async () => {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/request-food`, {
        foodId: food._id,
        userEmail: user.email
      });

      toast.success("Food requested successfully!");

      setTimeout(() => {
        onClose(); 
        navigate("/my-request");
      }, 2000);

  
    } catch (error) {
      console.error("Error requesting food:", error);
      toast.error("Failed to request food");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <ToastContainer></ToastContainer>
      <div className="modal modal-open">
        <div className="modal-box mt-12">
          <h2 className="text-2xl font-bold text-center">Request Food</h2>

          <div className="space-y-4 mt-4">
            <div className="flex flex-col items-center">
              <img
                src={food.foodImage}
                alt="Food"
                className="w-32 h-32 object-cover rounded-lg shadow"
              />
              <p className="text-lg font-semibold mt-2">{food.foodName}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Food ID</label>
                <input type="text" value={food._id} className="input input-bordered w-full" disabled />
              </div>
              <div>
                <label className="text-sm font-medium">Request Date</label>
                <input type="text" value={new Date().toLocaleString()} className="input input-bordered w-full" disabled />
              </div>
              <div>
                <label className="text-sm font-medium">Donator Name</label>
                <input type="text" value={food.donator.name} className="input input-bordered w-full" disabled />
              </div>
              <div>
                <label className="text-sm font-medium">Donator Email</label>
                <input type="text" value={food.donator.email} className="input input-bordered w-full" disabled />
              </div>
              <div>
                <label className="text-sm font-medium">Your Email</label>
                <input type="text" value={user.email} className="input input-bordered w-full" disabled />
              </div>
              <div>
                <label className="text-sm font-medium">Pickup Location</label>
                <input type="text" value={food.pickupLocation} className="input input-bordered w-full" disabled />
              </div>
              <div>
                <label className="text-sm font-medium">Expire Date</label>
                <input type="text" value={food.expireDate} className="input input-bordered w-full" disabled />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Additional Notes</label>
              <textarea
                className="textarea textarea-bordered w-full"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Enter additional notes..."
              ></textarea>
            </div>
          </div>

          <div className="modal-action">
            <button className="btn btn-outline border-2 border-red-700 text-red-700" onClick={onClose}>Cancel</button>
            <button onClick={handleRequestFood}
            className="btn bg-red-700 text-white hover:opacity-60 ">Request</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default RequestFoodModal;
