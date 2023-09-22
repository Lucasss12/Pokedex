'use client'
import Link from 'next/link';
import React, { useState } from 'react'

export default function Searchbar({pokemon}) {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  }

  const filteredPokemon = pokemon && search.length > 0 && pokemon.filter((pokemon) => {
    return pokemon.name.fr.toLowerCase().includes(search.toLowerCase()) || pokemon.pokedexId.toString().includes(search)
  }
  ).slice(0, 3);

  console.log("filteredPokemon", filteredPokemon);
  console.log("search", search);

  return (
    <div className='max-w-md mx-auto'>
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border border-black">
      <div className="grid place-items-center h-full w-12 text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
        <input className="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="text" id="search" placeholder="Pokemon ou N° dans le pokedex..." onChange={handleInputChange}/> 
    </div>
        {filteredPokemon && (
          <ul className="absolute bg-white rounded-lg overflow-hidden max-w-md z-10">
            {filteredPokemon.map((pokemon, index) => (
              <div key={index} >
                <Link href={`/pokemon/${pokemon.name.fr}`}><li className="px-4 py-2 hover:bg-gray-200">{pokemon.name.fr}</li></Link>
              </div>
            ))}
          </ul>
        )}
  </div>
  )
}