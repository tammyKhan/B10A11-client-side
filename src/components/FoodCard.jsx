import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({food}) => {
  return (
    <div  className="card bg-base-100 shadow-xl">
    <figure>
      <img src={food.foodImage} alt={food.foodName} className="w-full h-48 object-cover" />
    </figure>
    <div className="card-body">
      <h3 className="card-title text-lg font-semibold">{food.foodName}</h3>
      <p className="text-gray-600">{food.additionalNotes.slice(0, 85)} ....</p>
      <div className="card-actions justify-between my-2">
        <span className="text-xs mb-2 font-semibold">Expired Date: {food.expireDate}</span>
        <Link to={`/food-details/${food._id}`}
          className="btn border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white "
        >
          View Details
        </Link>
      </div>
    </div>
  </div>
  );
};

export default FoodCard;