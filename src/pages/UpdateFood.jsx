import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UpdateFood = () => {
 const {id} = useParams()
 const [startDate, setStartDate] = useState(new Date())
  const navigate = useNavigate();
  const [food, setFood] = useState({});
  
  useEffect(() => {
    fetchFood();
  }, [id]); 

  const fetchFood = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/food/${id}`);
      setFood(response.data);
      setStartDate(new Date(response.data.expireDate))
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const quantity = form.quantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expireDate = form.expireDate.value;


    const additionalNotes = form.additionalNotes.value;
 
    const status = "available";

    const foodData = {
      foodName,
      foodImage,
      quantity,
      pickupLocation,
      expireDate,  
      additionalNotes,
      status,
    };

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/update-food/${id}`,
        foodData
      );
      console.log(data);
      
      toast.success("Food Updated successfully!");
      setTimeout(() => navigate("/manage-foods"), 1000)
    } catch (error) {
      console.error("Error updating food:", error);
      toast.error("Failed to update food");
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">UPDATE A FOOD ITEM</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
        <label htmlFor="foodName">Food Name</label>
        <input
          type="text"
          name="foodName"
          defaultValue={food.foodName}
          id='foodName'
          className="input input-bordered w-full"
        />
        </div>
        <div>
          <label htmlFor="foodImage">Food Image URL</label>
          <input
          type="text"
          name="foodImage"
          defaultValue={food.foodImage}
          id='foodImage'
          className="input input-bordered w-full"
        />
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input
          type="number"
          defaultValue={food.quantity}
          name="quantity"
          id='quantity'
          className="input input-bordered w-full"
        />
        </div>
        <div>
          <label  htmlFor='pickupLocation'>Pickup Location</label>
        <input
          type="text"
          defaultValue={food.pickupLocation}
          name="pickupLocation"
          id='pickupLocation'
          className="input input-bordered w-full"
        />
        </div>
        <div >
          <label >
            Expired Date:
          </label>
          <DatePicker
            type="datetime-local" 
            selected={startDate}
            onChange={date => setStartDate(date)}
            name="expireDate"
            id='expireDate'
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="additionalNotes">Additional Notes</label>
        <textarea
          defaultValue={food.additionalNotes}
          id='additionalNotes'
          name="additionalNotes"
          className="textarea textarea-bordered w-full"
        />
        </div>

        <button type="submit" className="btn btn-neutral w-full" >
         Save
        </button>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateFood;