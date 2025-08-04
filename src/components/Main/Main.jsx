import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Main.css";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";

const Main = () => {
  const [resLists, setResLists] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResList, setFilteredResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    // optional chaining to access nested data
    setResLists(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering
  // if(resLists.length === 0) {
  //   return <Shimmer />
  // }

  return resLists.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="main">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchBtn"
            onClick={() => {
              const filteredRestaurant = resLists.filter(
                (res) => { return res.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              setFilteredResList(filteredRestaurant);
            }}
          >
            Search
          </button>
            <button
            className="filterBtn"
            onClick={() => {
              const filteredList = resLists.filter(
                (rating) => rating.info.avgRatingString > 4.2
              );
              setFilteredResList(filteredList);
            }}
          >
            Filter
          </button>
        </div>
          
        <div className="card-container">
          {filteredResList.map((restaurant) => {
            return <Link
            key={restaurant.info.id}
            to={"/restaurant/" +  + restaurant.info.id}
            ><Card {...restaurant.info} />;
            </Link> 
          })}
        </div>
      </div>
    </>
  );
};

export default Main;
