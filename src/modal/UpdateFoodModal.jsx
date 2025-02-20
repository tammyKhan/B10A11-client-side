import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateFoodModal = ({ foodId, closeModal, refreshFoods }) => {
  const [food, setFood] = useState({
    name: "",
    quantity: "",
    expireDate: "",
    additionalNotes: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch the current food data based on the foodId
    if (foodId) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/food/${foodId}`)
        .then((response) => setFood(response.data))
        .catch((error) => console.error("Error fetching food data:", error));
    }
  }, [foodId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood({ ...food, [name]: value });
  };

  const handleSaveUpdate = () => {
    if (!food.name || !food.quantity || !food.expireDate) {
      Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "Please fill in all required fields.",
      });
      return;
    }

    setLoading(true);

    // Send PUT request to update the food item
    axios
      .put(`${import.meta.env.VITE_API_URL}/foods/${foodId}`, food)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Food information updated successfully.",
        });
        refreshFoods(); // Refresh the food list
        closeModal(); // Close the modal
      })
      .catch((error) => {
        console.error("Error updating food:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "There was an error updating the food.",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Update Food</h3>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={food.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={food.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Expire Date</label>
            <input
              type="date"
              name="expireDate"
              value={food.expireDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Additional Notes</label>
            <textarea
              name="additionalNotes"
              value={food.additionalNotes}
              onChange={handleChange}
            />
          </div>
        </form>
        <div className="modal-actions">
          <button onClick={closeModal}>Cancel</button>
          <button
            onClick={handleSaveUpdate}
            disabled={loading}
            className={loading ? "btn-loading" : ""}
          >
            {loading ? "Saving..." : "Save Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateFoodModal;
