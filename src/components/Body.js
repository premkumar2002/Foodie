import RestaurantCard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

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
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
            type="text" 
            placeholder="search" 
            className="search-box"
            value = {searchText} onChange={(e) => {setSearchText(e.target.value)}}
          />
          <button 
            className="filter-btn"
            onClick={() => {
              const filteredres = listOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfiltListOfRestaurant(filteredres);
            }}
          >Search</button>
        </div>
      </div>
      <div className="res-container">
        {filtlistOfRestaurants.map((restaurant) => {
          // Check if restaurant and its info exist
          if (restaurant?.info && restaurant.info.id) {
            return (
              <RestaurantCard
                key={restaurant.info.id}
                resData={restaurant.info}
              />
            );
          }
          return null; // Skip the undefined or incorrect data
        })}
      </div>
    </div>
  );
};

export default Body;
