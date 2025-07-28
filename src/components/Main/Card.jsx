import React from 'react'

const Card = () => {
  return (
       <>
          {/* - Resturant List
          - Image
          - Name
          - Rating
          - Cusines */}
        <div className="card">
          <div className="card-content">
            <img src="https://m.media-amazon.com/images/I/71XtBLJgSsS._UF350,350_QL80_.jpg" alt="" />
            <h2>Resturant Name</h2>
            <h3>Rating: 4.5</h3>
            <h4>Cusines: Indian, Chinese</h4>
          </div>
        </div>
            
    </>
  )
}

export default Card