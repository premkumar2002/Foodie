import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import { API_URL } from "../utils/constants";
const RestaurantMenu = () => {
    const URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

    const {resId} = useParams();
    const [resInfo, setresInfo] = useState(null);
    //fetchdata
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setresInfo(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    };

    return (
            <div className="menu-container">
                <h1 className="heading">
                    Restaurant Menu
                </h1>
                <div className="menu-grid">
                    {resInfo.map((item, index) => {
                        const { name, description, imageId, category } = item.card.info;
                        return (
                            <div key={index} className="menu-item">
                                <img src={URL + imageId} alt={name} className="menu-item-image" />
                                <h2>{name}</h2>
                                <h3>{category}</h3>
                                <p>{description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
};

export default RestaurantMenu;