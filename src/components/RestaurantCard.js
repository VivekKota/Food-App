const RestaurantCard = ({ item }) => {
  return (
    <div className="RestaurantCard">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item?.info?.cloudinaryImageId}`}
      ></img>
      <h3>{item?.info?.name}</h3>
      <h4>{item?.info?.cuisines.join(", ")}</h4>
      <h4>{item?.info?.sla?.lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;
