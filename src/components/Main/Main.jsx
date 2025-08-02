import React from "react";
import Card from "./Card";
import "./Main.css";
import restaurantAPI from "../../utils/restaurantAPI";

const Main = () => {


  return (
    <>
      <div className="main">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="card-container">
          {restaurantAPI.restaurants.map((restaurant) => {
            return <Card {...restaurant.info} key={restaurant.info.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Main;
