"use client";
import React from 'react'
import SearchBar from './components/searchbar/search'
import data from './data.json';
import Card from './components/card/card';
import { searchByName, searchByRegion } from './functions';


const HomePage = () => {

  console.log(searchByRegion(data, "africa"));



  return (
    <main className="home-page">
      <SearchBar />
      <section className="cards p-6 flex justify-around items-center flex-wrap">
        {
          data
            ? data.map((ele) => {
              return <Card country={ele} />
            })

            : "loading"

        }

      </section>

    </main>
  )
}

export default HomePage