import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
  const [ListOfRestaurent, setListOfRestaurent] = useState(resList.data.cards);

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          debugger;
          const filterdList = ListOfRestaurent.filter(
            (res) => res.card.card.info.avgRating > 4.5,
          );
          setListOfRestaurent(filterdList);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="res-container">
        {ListOfRestaurent.map((restaurant) => (
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
