import React from 'react'
import { useEffect, useState } from 'react';
import { Header } from '../Header';


export function RandomBeer() {
  const [beer, setBeer] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/random'
      );
      const data = await response.json();
      setBeer(data);

    }
    fetchData();
  }, []);

  return (
    <>
       <Header />
       <div>
        <img src={beer.image_url} alt="image of beer" />
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </>
  )
}

