import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';

const ResortDescPage = () => {

  const [resort, setResort] = useState({
      id: 0,
      title: "",
      img: null,
      description: "",
      price: 0
  })

  const { id } = useParams();

  useEffect(()=>{

    fetch(`http://localhost:8000/resorts/${id}`)
    .then (
      response => response.json()
    )
    .then (
      json => {
        setResort(json);
      }
    ).catch (
      err => {
        console.log(`Error ${err}`);
      }
    )

  }, [])

  return (
    <div className='grid grid-row-3' id='main-container'>
        <Header />
        <main>
            <section id='resort-description-section'>
                <div className='container grid grid-col-4 grid-gap-2'>

                    <img src={resort.img} alt='' />

                    <div className='resort-description-content-area'>
                        <h2>{resort.title}</h2>
                        <p>${resort.price} per night</p>
                        <h3>Details</h3>
                        <p>{resort.description}</p>
                    </div>

                </div>
            </section>
        </main>
        <Footer />
    </div>
  )

}

export default ResortDescPage;