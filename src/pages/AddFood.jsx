import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; 
import axios from "axios";
import { format } from "date-fns";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const quantity = form.quantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expireDate = form.expireDate.value;

    //  formate expireDate by date-fns 
    const formattedExpireDate = format(new Date(expireDate), "yyyy-MM-dd hh:mm a");

    const additionalNotes = form.additionalNotes.value;
    const donator = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    };
   
    const status = "available";

    const foodData = {
      foodName,
      foodImage,
      quantity,
      pickupLocation,
      expireDate: formattedExpireDate,  
      additionalNotes,
      donator,
      status,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-food`,
        foodData
      );
      console.log(data);
      
      toast.success("Food added successfully!");
      setTimeout(() => navigate("/available-foods"), 1000)
    } catch (error) {
      console.error("Error adding food:", error);
      toast.error("Failed to add food");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a Food Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="foodName"
          placeholder="Food Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="foodImage"
          placeholder="Food Image URL"
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="pickupLocation"
          placeholder="Pickup Location"
          className="input input-bordered w-full"
          required
        />
        <div className="flex items-center justify-center">
          <label className="text-gray-500 w-1/3 pl-3">
            Expired Date:
          </label>
          <input
            type="datetime-local"
            name="expireDate"
            className="input input-bordered ml-2 w-full"
            required
          />
        </div>
        <textarea
          name="additionalNotes"
          placeholder="Additional Notes"
          className="textarea textarea-bordered w-full"
        />

        <button type="submit" className="btn btn-neutral w-full" disabled={loading}>
          {loading ? "Adding..." : "Add Food"}
        </button>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddFood;
