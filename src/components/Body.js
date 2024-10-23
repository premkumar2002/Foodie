import RestaurantCard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filtlistOfRestaurants, setfiltListOfRestaurant] = useState([]);
  
  const [searchText, setSearchText] = useState("")
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6287557&lng=79.4191795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfiltListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-yellow-200">
      <div className="content-center flex flex-col items-center">
        <div className="search m-4 p2 ">
          <input 
            type="text" 
            placeholder="search" 
            className="border border-solid border-black rounded-lg w-56 p-2"
            value = {searchText} onChange={(e) => {setSearchText(e.target.value)}}
          />
          <button 
            className="mx-4 px-2 py-1 border border-solid border-yellow-300 bg-yellow-500 rounded"
            onClick={() => {
              const filteredres = listOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfiltListOfRestaurant(filteredres);
            }}
          >Search</button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filtlistOfRestaurants.map((restaurant) => {
          // Check if restaurant and its info exist
          if (restaurant?.info && restaurant.info.id) {
            return (
              <Link to={"/restaurants/" + restaurant.info.id}><RestaurantCard
                key={restaurant.info.id}
                resData={restaurant.info}
              />
              </Link>
            );
          }
          return null; // Skip the undefined or incorrect data
        })}
      </div>
    </div>
  );
};

export default Body;
