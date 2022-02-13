import React from 'react'
import resort1 from '../assets/img/resort1.webp'

const ResortItem = () => {
  return (
    <div class="resort-card">

      <a href = "html/resort-description.html"> 
        <img src={resort1} alt=""/>   
      </a> 

      <div class="resortContent">
        <h3>Resort 1</h3>
        <p>$70.00 per night</p>
      </div>

    </div>
  )
}

export default ResortItem