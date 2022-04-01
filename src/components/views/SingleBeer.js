
import { Header } from '../Header'
import {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function SingleBeer() {
  const [beer, setBeer] = useState([]);
  const { beerId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      const data = await response.json();
      setBeer(data);
      console.log(data)
    
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div>
        <img src={beer.image_url} alt="" />
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </>
  );
}