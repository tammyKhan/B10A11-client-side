import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";

const MyRequest = () => {
  const { user } = useContext(AuthContext);
  const [requestedFoods, setRequestedFoods] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/my-requests?email=${user.email}`)
        .then((res) => setRequestedFoods(res.data))
        .catch((error) => console.error("Error fetching requested foods:", error));
    }
  }, [user?.email]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">My Requested Foods: {requestedFoods.length}</h2>

      {requestedFoods.length === 0 ? (
        <p className="text-center text-gray-500">No requested foods yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            {/* Table Header */}
            <thead className="bg-gray-200 text-gray-700">
              <tr className="text-left">
                <th className="px-4 py-2 border">Food Name</th>
                <th className="px-4 py-2 border">Donor</th>
                <th className="px-4 py-2 border hidden md:table-cell">Pickup Location</th>
                <th className="px-4 py-2 border hidden sm:table-cell">Expire Date</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {requestedFoods.map((food) => (
                <tr key={food._id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">{food.foodName}</td>
                  <td className="px-4 py-2 border">{food.donator.name}</td>
                  <td className="px-4 py-2 border hidden md:table-cell">{food.pickupLocation}</td>               
                  <td className="px-4 py-2 border hidden sm:table-cell">{food.expireDate}</td>
                  <td className="px-4 py-2 border font-semibold text-red-600">
                    {food.status}
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

export default MyRequest;
