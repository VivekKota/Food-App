const RestaurantCard = ({ item }) => {
  return (
    <div className="RestaurantCard">
      <img src={item?.heroImgUrl}></img>
      <h3>{item?.name}</h3>
      <h4>{item?.establishmentTypeAndCuisineTags.join(", ")}</h4>
      <h4>{item?.averageRating} Rating</h4>
    </div>
  );
};

export default RestaurantCard;
