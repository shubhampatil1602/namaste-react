import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import ShimmerUI from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER "
    );
    console.log(resId);

    const json = await data.json();
    console.log(json);

    setResInfo(json?.data);
  };

  if (resInfo === null) {
    return <ShimmerUI />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    city,
    avgRating,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(resInfo);

  return (
    <div className="menu">
      <div className="top-menu">
        <p>{city}</p>
        <h1>{name}</h1>
        <div className="rating">
          <p className="avgRating">{avgRating} ⭐️</p>
          <p className="totalRating">{totalRatingsString}</p>
        </div>
      </div>
      <p className="cuisines">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <ul>
        {itemCards?.map((item) => (
          <div className="outer-menu-div" key={item.card.info.id}>
            <div className="inner-menu-div">
              <li>
                <h4>{item.card.info.name} </h4>
                <p>
                  ₹
                  {item.card.info.defaultPrice / 100 ||
                    item.card.info.price / 100}
                </p>
                <p className="menu-des">{item.card.info.description}</p>
              </li>
            </div>
            <div className="menu-img flex">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                  item.card.info.imageId
                }
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
