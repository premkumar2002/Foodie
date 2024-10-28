import RestaurantCard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filtlistOfRestaurants, setfiltListOfRestaurant] = useState([]);
  
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfiltListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-200 min-h-screen py-10">
      <div className="flex flex-col items-center">
        <div className="search flex items-center gap-4 mb-8">
          <input 
            type="text" 
            placeholder="Search restaurants..." 
            className="border border-gray-300 rounded-lg w-64 p-3 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button 
            className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition ease-in-out duration-150"
            onClick={() => {
              const filteredres = listOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfiltListOfRestaurant(filteredres);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 justify-center p-4">
        {filtlistOfRestaurants.map((restaurant) => {
          // Check if restaurant and its info exist
          if (restaurant?.info && restaurant.info.id) {
            return (
              <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
                <RestaurantCard resData={restaurant.info} />
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
