// import React, { useEffect, useState } from 'react'
import useRestaurantMenu from '../../utils/useRestaurantMenu';
import Shimmer from '../Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
const { resId } = useParams();

const resInfo = useRestaurantMenu(resId);
    
    if (!resInfo) return <Shimmer />;

    const info = resInfo?.cards[2]?.card?.card?.info;

    const {name, avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName, sla, slugString} = info;


    const itemcards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards

  return (
    <>
    <div className="menu">
        <h1> {name} </h1>
        <div className="infoCard">
            <h3> {avgRating} {"(" + totalRatingsString +")" } - {costForTwoMessage} </h3>
            <p> {cuisines.join(", ")} </p>
            <p>Outlet: {areaName} </p>
            <p>{sla?.slaString} </p>
            <p>{slugString}</p>
        </div>
        <h2> {resInfo.city} </h2>
        <ul>
            {itemcards.map((item) => {
                return <li key={item.card.info.id} >{item.card.info.name} </li>

            } )}

        </ul>
    </div>
    </>
  )
}

export default RestaurantMenu