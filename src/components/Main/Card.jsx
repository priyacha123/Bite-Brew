import { useContext } from "react";
import { CDN_URL } from "../../utils/constants";
import UserContext from "../../utils/UserContext";

const Card = (props) => {
  const {
    name,
    costForTwo,
    cuisines,
    sla,
    avgRatingString,
    cloudinaryImageId,
  } = props;

  const { loggedInUser }= useContext(UserContext);
  return (
    <>
      <div className="card">
        <div className="card-content">
          <img src={CDN_URL + cloudinaryImageId} alt={name} />
          <h2>{name} </h2>
          <p>
            <strong>Price: </strong>
            {costForTwo}{" "}
          </p>
          <p>
            {" "}
            <strong>Cuisines: </strong> {cuisines.join(", ")}
          </p>
          <p>
            {" "}
            <strong>Distance: </strong> {sla.lastMileTravelString}{" "}
          </p>
          <p>
            {" "}
            <strong>Rating: </strong> {avgRatingString} star
          </p>
          <p> {loggedInUser} </p>
        </div>
        {/* <div className="card-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="view-details">View Details</button>
          </div> */}
      </div>
    </>
  );
};

// Higher Order Component
// imput -> Restaurant Card ==> Output -> Restaurant Card with a label
// export const  WithPromoteLabel = ( ) => {
//   return (props) => {
//     return (
//       <div className="label-card">
//         <label htmlFor="">Promoted</label>
//         <Card {...props} />
//       </div>
//     )
//   }
// }

export default Card;
