import RestaurantCard from "./Restaurantcard";
import resList from "../utils/mockData"; 
const Body =() => {
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn">Search</button>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for restaurants..."
                />
            </div>
            <div className="res-container">
                {
                    resList.map((restaurant) => (
                        <RestaurantCard key = {restaurant.data.id} restData = {restaurant} />
                    ))
                }
            </div>
        </div>
   )
};

export default Body;