"use client";
import React, { useState } from 'react'
import SearchBar from './components/searchbar/search'
import data from './data.json';
import Card from './components/card/card';
import { searchByName, searchByRegion } from './functions';


const HomePage = () => {

  const [countries, setCountries] = useState(data);



  return (
    <main className="home-page">

      <SearchBar countries={countries} setCountries={setCountries} />
      <section className="cards p-6 flex justify-around items-center flex-wrap">
        {
          countries
            ? countries.map((ele) => {
              return <Card country={ele} />
            })

            : "loading"

        }

      </section>

    </main>
  )
}

export default HomePage