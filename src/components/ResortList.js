import React from 'react'
import ResortItem from './ResortItem';

const ResortList = () => {
  return (
    <section id="section-resort-list">
      <div class= "container">
        <h1>Featured Resort</h1>
        <div class="grid grid-gap-1 grid-row-gap-2 grid-col-4">
          <ResortItem />
          <ResortItem />
          <ResortItem />
          <ResortItem />
        </div>
      </div>
    </section>
  )
}

export default ResortList