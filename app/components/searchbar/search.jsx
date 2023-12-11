"use client";
import React, { useEffect, useRef, useState } from 'react'
import './search.css';
import { searchByName, searchByRegion } from '@/app/functions';
import data from '../../data.json';
const SearchBar = ({ countries, setCountries }) => {
    const [query, setQuery] = useState("");
    const select = useRef();



    const handleChange = (e) => {
        setQuery(e.target.value);
        select.current.value = "all"
    }

    useEffect(() => {
        const newData = searchByName(data, query);
        if (newData != null) {
            setCountries(newData)
        }
    }, [query])

    return (

        <div class="conteanar mt-10">
            <div class="search">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search " name="region" placeholder="search for acontry...." onChange={handleChange} />

            </div>

            <div class="sel">
                <label for="filter">filter by region</label>
                <select ref={select} name="region" id="filter" onChange={(e) => {

                    const newData = searchByRegion(data, e.target.value);
                    if (newData != null) {
                        setCountries(newData);
                    }


                }}>
                    <option value="all">All</option>

                    <option value="asia">Asia</option>
                    <option value="africa">Africa</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                    <option value="americas">Americas</option>

                </select>
            </div>

        </div>
    )
}

export default SearchBar



