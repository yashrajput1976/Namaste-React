import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  // const [ListOfRestaurent, setListOfRestaurent] = useState(resList.data.cards);
  const [ListOfRestaurent, setListOfRestaurent] = useState([]);
  const [ListOfFilteredRestaurent, setListOfFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log("Search Text : " + searchText);
  const fetchData = async () => {
    const CORS_PROXY = "https://corsproxy.io/?";

    // const timer = new Promise((resolve) => setTimeout(resolve, 3000));
    // await timer;

    const data = await fetch(
      CORS_PROXY +
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2039776&lng=72.8353358&collection=80423&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
    );
    const json = await data.json();
    // console.log(json);
    const filteredList = json.data.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    );
    setListOfRestaurent(filteredList);
    setListOfFilteredRestaurent(filteredList);
    // console.log(filteredList);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return ListOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = ListOfRestaurent.filter(
              (res) => res.card.card.info.avgRating > 4.5,
            );
            setListOfRestaurent(filterdList);
          }}
        >
          Top Rated Restaurant
        </button>
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filterdListOfRes = ListOfRestaurent.filter((res) =>
              res.card.card.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase()),
            );
            setListOfFilteredRestaurent(filterdListOfRes);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {ListOfFilteredRestaurent.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
