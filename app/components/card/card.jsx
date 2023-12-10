import React from 'react'
import './card.css';

const Card = ({ country }) => {
    return (
        <div class="div1">
            <img src={country.flags.png} alt class="pic1" />
            <p className='text-3xl mt-3 truncate '>{country.name}</p>
            <p class="p1 mt-3">Population: {country.population}</p>
            <p class="p2 mt-3">Region: {country.region}</p>
            <p class="p3 mt-3">Capital: {country.capital}</p>
        </div>
    )
}

export default Card