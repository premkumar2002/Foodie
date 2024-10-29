import { CDN_URL } from "../utils/constants";
import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;

  // Correctly destructure the resData object
  const { cloudinaryImageId, name, avgRating, costForTwo, sla, cuisines } = resData;

  return (
    <div className="p-4 m-4 w-72 h-96 bg-white rounded-3xl transform transition-transform duration-300 hover:scale-105" >
      <img
        className="rounded-lg h-40 w-72"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="m-1 italic text-pink-950">
        <h3 className="font-bold text-yellow-800 text-lg">{name}</h3>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        <h4> {cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
