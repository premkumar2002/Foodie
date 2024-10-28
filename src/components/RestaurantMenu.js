import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
    const URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
    const { resId } = useParams();
    const dispatch = useDispatch();
    
    // Fetch the restaurant menu data
    const resInfo = useRestaurantMenu(resId);

    // Handle add item to cart, including image URL
    const handleItem = (item) => {
        dispatch(addItem({
            ...item,
            image: item.imageId ? `${URL}${item.imageId}` : null,
        }));
    };

    // Show loading or no menu message
    if (!resInfo || resInfo.length === 0) {
        return <div className="text-center mt-4">Loading or No Menu Available</div>;
    }

    return (
        <div className="container mx-auto p-6 flex flex-col items-center">  
            <h1 className="text-4xl font-bold mb-8">Restaurant Menu</h1>
            <div className="grid grid-cols-1 gap-6 w-full max-w-3xl">
                {resInfo.map((item, index) => {
                    const itemCards = item.card?.card?.itemCards || [];

                    return itemCards.map((cardItem, cardIndex) => {
                        const { name, description, imageId, price } = cardItem.card?.info || {};
                        
                        return (
                            <div key={`${index}-${cardIndex}`} className="flex items-center bg-white shadow-lg rounded-lg p-4 max-w-full">
                                <div className="flex flex-col w-3/4">
                                    <h2 className="text-2xl font-semibold mb-2">{name}</h2>
                                    <p className="text-lg text-gray-800 font-medium mb-1">₹ {price / 100}</p>
                                    <p className="text-gray-600 text-sm">{description}</p>
                                </div>
                                {imageId && (
                                    <div className="relative w-1/4 ml-4">
                                        <img
                                            src={`${URL}${imageId}`}
                                            alt={name}
                                            className="rounded-md object-cover w-40 h-32"
                                        />
                                        <button 
                                            className="absolute bottom-2 right-2 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full hover:bg-black transition duration-200"
                                            onClick={() => handleItem({
                                                ...cardItem.card?.info,
                                                image: `${URL}${imageId}`
                                            })}
                                        >
                                            Add +
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    });
                })}
            </div>
        </div>
    );
};

export default RestaurantMenu;
