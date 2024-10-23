import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Groceries = () => {
    const URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

    const [storeInfo, setStoreInfo] = useState(null);
    const [error, setError] = useState('');

    // Fetch data
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP');
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const json = await response.json();
            // Set store information
            setStoreInfo(json.data.storeDetails);
        } catch (err) {
            setError(err.message);
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!storeInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="menu-container">
            <h1 className="heading">Grocery Store: {storeInfo.name}</h1>
            <div className="menu-grid">
                {storeInfo.categories.map((category) => (
                    <div key={category.id} className="menu-item">
                        <img 
                            src={`${URL}${category.imageId}`} // Assuming imageId is available
                            alt={category.name}
                            className="menu-item-image"
                        />
                        <h2>{category.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Groceries;