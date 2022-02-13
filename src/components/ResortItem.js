import React from 'react'

const ResortItem = ({title, image, price}) => {
  return (
    <div class="resort-card">

      <a href = "html/resort-description.html"> 
        <img src={image} alt=""/> 
      </a> 

      <div class="resortContent">
        <h3>{title}</h3>
        <p>${price} per night</p>
      </div>

    </div>
  )
}

export default ResortItem