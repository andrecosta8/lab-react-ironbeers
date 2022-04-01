import React from 'react'
import { Header } from '../Header'

export function NewBeer() {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const body = {
      name: form.name.value,
      tagline: form.tagline.value,
      description: form.description.value,
      first_brewed: form.first_brewed.value,
      brewers_tip: form.brewers_tip.value,
      attenuation_level: form.attenuation_level.value,
      contributed_by: form.contributed_by.value,
    };
    async function postData() {
      const response = await fetch(
        'https://ih-beers-api2.herokuapp.com/beers/new', body);
      return response;
    }
    postData()
      
  };

  return (
     <>
      <Header />
      <div>
        <h1>New Beer</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label name="name">Name</label>
            <br />
            <input type="text" name="name" />
          </div>
          <br />
          <div>
            <label name="tagline">Tagline</label>
            <br />
            <input type="text" name="tagline" />
          </div>
          <br />
          <div>
            <label name="description">Description</label>
            <br />
            <textarea name="description" id="" cols="30" rows="10"></textarea>
          </div>
          <br />
          <div>
            <label name="first_brewed">First Brewed</label>
            <br />
            <input type="text" name="first_brewed" />
          </div>
          <br />
          <div>
            <label name="brewers_tip">Brewers Tip</label>
            <br />
            <input type="text" name="brewers_tip" />
          </div>
          <br />
          <div>
            <label name="attenuation_level">Attenuation Level</label>
            <br />
            <input type="number" name="attenuation_level" />
          </div>
          <br />
          <div>
            <label name="contributed_by">Contributed by</label>
            <br />
            <input type="text" name="contributed_by" />
          </div>
          <br />
          <button type="submit">Add New</button>
        </form>
      </div>
      </>
  )
}

