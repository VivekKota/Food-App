import { useState } from "react";
import data from "../../data.json";
import RestaurantCard from "./RestaurantCard";

const filterRestauarants = (searchTxt, restaurants) => {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(searchTxt.toLowerCase());
  });
  return filteredData;
};

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants] = useState(data.data.data);
  const [restaurants, setRestaurants] = useState(data.data.data);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a restaurant"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filterData = filterRestauarants(searchTxt, allRestaurants);
            setRestaurants(filterData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurantList">
        {restaurants.map((item) => (
          <RestaurantCard item={item} key={item.locationId} />
        ))}
      </div>
    </>
  );
};

export default Body;
