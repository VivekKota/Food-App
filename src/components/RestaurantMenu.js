import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  console.log(id);

  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restauantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantMenu(id);
  }, [id]);

  async function getRestaurantMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.102490199999997&restaurantId=${id}`
    );
    const jsonData = await data.json();

    setRestaurantInfo(jsonData?.data?.cards[2]?.card?.card?.info);
    setRestaurantMenu(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
    console.log(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );
    console.log(jsonData.data);
  }

  if (!restauantInfo) {
    return <Shimmer />;
  } else {
    return (
      <div className="restauarntMenu">
        <div>
          <h3>{restauantInfo.name}</h3>
          <img
            style={{ height: "200px", width: "300px" }}
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restauantInfo?.cloudinaryImageId}`}
          />

          <h4>{restauantInfo?.costForTwoMessage}</h4>
          <h4>{restauantInfo?.cuisines?.join(", ")}</h4>
          <h4>{restauantInfo?.avgRating}</h4>
          <h4>{restauantInfo?.sla?.lastMileTravelString}</h4>
          <h4>{restauantInfo?.totalRatingsString}</h4>
        </div>
        <div>
          <h1>Menu</h1>
          <ul>
            {Array.isArray(restaurantMenu) &&
              restaurantMenu.map((item, index) => (
                <li key={index}>{item?.card?.info?.name}</li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default RestaurantMenu;
