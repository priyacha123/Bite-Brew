import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import "./Main.css";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { RES_API } from "../../utils/constants";
import UserContext from "../../utils/UserContext";

const Main = () => {
  const [resLists, setResLists] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResList, setFilteredResList] = useState([]);

  // const ResWithLable = WithPromoteLabel(Card);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();

    console.log("REs API" + json);
    console.log(json);
    // optional chaining to access nested data
    setResLists(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const { loggedInUser, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you're offline!!! Plzz check your connection</h1>;
  }

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
              const filteredRestaurant = resLists.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
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

          <input 
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)} />
        </div>

        <div className="card-container">
          {filteredResList.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={"/restaurant/" + +restaurant.info.id}
              >
                {/* higher order component */}
                {/* {restaurant.info.isOpen ? <ResWithLable {...restaurant.info} /> : 
                <Card {...restaurant.info} /> } */}
                  <Card {...restaurant.info} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Main;
