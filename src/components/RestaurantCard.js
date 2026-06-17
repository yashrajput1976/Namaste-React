import { RES_CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
  } = resData.card.card.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={RES_CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="res-name"> {name}</h3>
      <h4 className="res-cuisine">{cuisines.join(" | ")}</h4>
      <h4 className="res-rating"> {avgRatingString}</h4>
      <h4 className="res-rating"> {costForTwo}</h4>
      <h4 className="res-delivery-time">{sla.slaString} mins</h4>
    </div>
  );
};
export default RestaurantCard;
