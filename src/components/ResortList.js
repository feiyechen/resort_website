import React from 'react'
import ResortItem from './ResortItem';
import image1 from '../assets/img/resort1.webp';
import image2 from '../assets/img/resort2.webp';
import image3 from '../assets/img/resort3.webp';
import image4 from '../assets/img/resort4.webp';

const ResortList = () => {
  return (
    <section id="section-resort-list">
      <div class= "container">
        <h1>Featured Resort</h1>
        <div class="grid grid-gap-1 grid-row-gap-2 grid-col-4">
          <ResortItem title="resort1" image={image1} price="100.00"/>
          <ResortItem title="resort2" image={image2} price="200.00"/>
          <ResortItem title="resort3" image={image3} price="300.00"/>
          <ResortItem title="resort4" image={image4} price="400.00"/>
        </div>
      </div>
    </section>
  )
}

export default ResortList