import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import RecommendedMenu from "./RecommendedMenu";
import { useState } from "react";

const RestaurantMenu = () => {

  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const info = resInfo?.cards[2]?.card?.card?.info;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
    slugString,
  } = info;

  const itemcards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
      ?.itemCards;

  console.log("itemcards");
  console.log(itemcards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
      ?.categories;

  console.log("categories");
  console.log(categories);

  const categorySection =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => {
        return (
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  console.log("categorySection");
  console.log(categorySection);

  return (
    <>
      <div className="menu">
        <h1> {name} </h1>
        <div className="infoCard">
          <h3>
            {" "}
            {avgRating} {"(" + totalRatingsString + ")"} - {costForTwoMessage}{" "}
          </h3>
          <p> {cuisines.join(", ")} </p>
          <p>Outlet: {areaName} </p>
          <p>{sla?.slaString} </p>
          <p>{slugString}</p>
        </div>
        <h2> {resInfo.city} </h2>

              <ul>
        {itemcards?.map((item) => {
          return <li key={item?.card?.info?.id}> {item?.card?.info?.name} </li>;
        })}

        {categories?.map((item) => {
          return <li> {item?.itemCards[0]?.card?.info?.name} </li>;
        })}
      </ul>

        {categorySection?.map((category, index) => 
              <RecommendedMenu
              key={category?.card?.card.title}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
              />
          )
        }
      </div>
    </>
  );
};

export default RestaurantMenu;
