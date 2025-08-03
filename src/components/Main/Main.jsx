import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Main.css";

const Main = () => {
  const [resLists, setResLists] = useState([]);

  useEffect( () => {
    fetchData();
  }, [] );

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    console.log(json);
    // optional chaining to access nested data
    setResLists(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

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
            const filteredList = resLists.filter( (rating) => rating.info.avgRating > 4.2);
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
