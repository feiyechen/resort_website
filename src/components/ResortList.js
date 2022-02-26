import React, { useState, useEffect } from 'react'
import ResortItem from './ResortItem';
//#region import local images
import image1 from '../assets/img/resort1.webp';
import image2 from '../assets/img/resort2.webp';
import image3 from '../assets/img/resort3.webp';
import image4 from '../assets/img/resort4.webp';
//#endregion

const ResortList = () => {

  const [resorts, setResorts] = useState([{
    id: 0,
    title: "",
    price: 0,
    img: null
  }])

  useEffect(()=>{
    fetch("http://localhost:8000/resorts")
    .then (
      response => response.json()
      )
    .then (
      json => {
        setResorts(json);
      }
    ).catch (
      err => {
        console.log(`Error ${err}`);
      }
    )
  }, [])

  return (
    <section id="section-resort-list">
      <div className= "container">
        <h1>Featured Resort</h1>
        <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
          
          {/**
            * <ResortItem title="resort1" image={image1} price="100.00"/>
            * <ResortItem title="resort2" image={image2} price="200.00"/>
            * <ResortItem title="resort3" image={image3} price="300.00"/>
            * <ResortItem title="resort4" image={image4} price="400.00"/>
            */}

          {resorts.map(item => (
            <ResortItem title={item.title} image={item.img} price={item.price}/>
          ))}

        </div>
      </div>
    </section>
  )
}

export default ResortList