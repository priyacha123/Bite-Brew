import React, { useState } from "react";
import Card from "./Card";
import "./Main.css";
import restaurantAPI from "../../utils/restaurantAPI";

const Main = () => {
  const [resLists, setResLists] = useState(restaurantAPI.restaurants);

  return (
    <>
      <div className="main">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="filter">
          <button 
          className="filter-btn"
          onClick={ () => {
            const filteredList = resLists.filter( (rating) => rating.info.avgRating > 4.5);
            setResLists(filteredList);
          }}
          >Filter</button>
        </div>
        <div className="card-container">

          {resLists.map((restaurant) => {
            return <Card {...restaurant.info} key={restaurant.info.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Main;
