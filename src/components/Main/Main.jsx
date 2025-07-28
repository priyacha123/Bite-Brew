import React from 'react'
import Card from './Card'
import "./Main.css"

const Main = () => {
  return (
    <>
    <div className="main">
    <div className='search-bar'>
      <input type="text" placeholder='Search' />
    </div>
    <div className="card-container">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
    </div>
    </>
  )
}

export default Main