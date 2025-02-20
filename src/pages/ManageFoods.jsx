import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2"; // Import SweetAlert2

const ManageFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/my-foods?email=${user.email}`)
      .then(res => setFoods(res.data))
      .catch(error => console.error("Error fetching foods:", error));
  }, [user.email]);

  const handleDelete = async (foodId) => {
    // Use SweetAlert2 for confirmation
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/foods/${foodId}`);
        setFoods(foods.filter(food => food._id !== foodId));
        Swal.fire('Deleted!', 'Your food item has been deleted.', 'success'); // Success message
        toast.success("Food deleted successfully");
      } catch (error) {
        console.error("Error deleting food:", error);
        Swal.fire('Error!', 'Failed to delete food', 'error'); // Error message
        toast.error("Failed to delete food");
      }
    }
  };



  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Manage My Foods: {foods.length}</h2>
      {foods.length === 0 ? (
        <p className="text-center text-gray-500">No foods added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-sm sm:text-base">
                <th className="border p-2">Food Name</th>
                <th className="border p-2">Pickup Location</th>
                <th className="border p-2">Expire Date</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {foods.map(food => (
                <tr key={food._id} className="text-center text-sm sm:text-base">
                  <td className="border p-2">{food.foodName}</td>
                  <td className="border p-2">{food.pickupLocation}</td>
                  <td className="border p-2">{food.expireDate}</td>
                  <td className="border p-2 flex flex-col sm:flex-row justify-center gap-2">
                    <button 
                       
                      className="btn bg-green-500 text-white px-3 py-1 rounded hover:bg-green-800 transition"
                    >
                      Update
                    </button>
                    <button 
                      onClick={() => handleDelete(food._id)} 
                      className="btn bg-red-700 text-white px-3 py-1 rounded hover:bg-red-900 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

export default ManageFoods;
