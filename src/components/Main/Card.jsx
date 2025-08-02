import React from 'react'




const Card = (props) => {
  return (
       <>
          {/* - Resturant List
          - Image
          - Name
          - Rating
          - Cusines */}
        <div className="card">
          <div className="card-content">
            <img src= {`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.cloudinaryImageId}`} alt={props.name} />
            <h2>{props.name} </h2>
            <p><strong>Price: </strong>{props.costForTwo} </p>
            <p> <strong>Cuisines: </strong> {props.cuisines.join(", ")}</p>
            <p> <strong>Distance: </strong> {props.sla.lastMileTravelString} </p>
            <p> <strong>Rating: </strong> {props.avgRating} star</p>
          </div>
        </div>
            
    </>
  )
}

export default Card