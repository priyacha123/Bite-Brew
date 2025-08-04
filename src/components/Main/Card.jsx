import { CDN_URL } from "../../utils/constants"


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
            <img src= { CDN_URL + props.cloudinaryImageId } alt={props.name} />
            <h2>{props.name} </h2>
            <p><strong>Price: </strong>{props.costForTwo} </p>
            <p> <strong>Cuisines: </strong> {props.cuisines.join(", ")}</p>
            <p> <strong>Distance: </strong> {props.sla.lastMileTravelString} </p>
            <p> <strong>Rating: </strong> {props.avgRatingString} star</p>
          </div>
        </div>
            
    </>
  )
}

export default Card