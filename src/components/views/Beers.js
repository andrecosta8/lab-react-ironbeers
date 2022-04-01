import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Header } from '../Header'

export function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
'https://ih-beers-api2.herokuapp.com/beers'
      );
      const data = await response.json();
      setBeers(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
    
     <div>
        <h1>Beers</h1>
        {beers.map((beer) => (
          <div className="each-beer">
            <img src={beer.image_url} alt="" />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>
              <button>See more</button>
            </Link>
          </div>
        ))}
     </div>
     </>
  )
}
