import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
    const URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    // Check if resInfo is available and has items
    if (!resInfo || resInfo.length === 0) {
        return <div className="text-center mt-4">Loading or No Menu Available</div>;
    }

    return (
        <div className="menu-container p-4">
            <h1 className="heading text-3xl font-bold mb-6">Restaurant Menu</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {resInfo.map((item, index) => {
                    const { name, description, imageId } = item?.card?.info || {};

                    return (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                            {imageId && (
                                <img src={`${URL}${imageId}`} alt={name} className="rounded-md mb-4 w-full h-40 object-cover" />
                            )}
                            <h2 className="text-xl font-semibold mb-2">{name}</h2>
                            <p className="text-gray-700 text-center">{description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RestaurantMenu;