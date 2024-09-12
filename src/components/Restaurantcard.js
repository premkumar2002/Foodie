const RestaurantCard = (props) => {
    const { restData } = props;

    const {
        name, 
        cuisines, 
        avgRating, 
        costForTwo, 
        deliveryTime, 
        cloudinaryImageId
    } = restData?.data;

    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo" 
                 src= {cloudinaryImageId} 
                 />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} ⭐</h5>
            <h5>₹{costForTwo / 100 } For Two</h5>
            <h5>{deliveryTime} mins</h5>
        </div>
    )
};

export default RestaurantCard;