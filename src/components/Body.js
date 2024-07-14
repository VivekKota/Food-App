import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const filterRestauarants = (searchTxt, restaurants) => {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant?.info.name
      .toLowerCase()
      .includes(searchTxt.toLowerCase());
  });
  return filteredData;
};

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(
      json?.data.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!allRestaurants) return null;

  if (allRestaurants.length == 0) {
    return <Shimmer />;
  } else {
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
              setFilteredRestaurants(filterData);
            }}
          >
            Search
          </button>
        </div>
        <div className="restaurantList">
          {filteredRestaurants.length == 0 ? (
            <h1>No restaurants match your filter</h1>
          ) : (
            filteredRestaurants.map((item) => (
              <Link to={"/restaurant/" + item?.info?.id} key={item?.info?.id}>
                <RestaurantCard item={item} />
              </Link>
            ))
          )}
        </div>
      </>
    );
  }
};

export default Body;
