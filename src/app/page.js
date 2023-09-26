'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image'
import Searchbar from '../app/component/searchbar/searchbar'
import Link from 'next/link';
import getTypeClass from '../app/utils/typesClass'

export default function Home() {

  const [pokemonData, setPokemonData] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://api-pokemon-fr.vercel.app/api/v1/gen/1')
        setPokemonData(response.data)
      } catch (error) {
          console.log(error)
        }
      };
    fetchPokemon()
  }, [])


  return (
    <main>
      <Searchbar pokemon={pokemonData}/>
      {pokemonData === null ? (
        <div>Chargement du pokedex...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {pokemonData.map((pokemon, index) => (
          <div key={index} className='flex justify-center py-4 sm:py-8 rounded-lg'>
            <div className={`h-72 w-56 sm:w-72 md:w-72 rounded-md p-3 sm:p-5 pt-0  hover:scale-110 transform transition-transform duration-300`}>
              <Link href={`/pokemon/${index + 1}`}><Image className='bg-stone-100 bg-opacity-70 rounded-lg' src={pokemon.sprites.regular} alt={pokemon.name.fr} width={500} height={500} /></Link>
              <div className='pl-2'>
                <h1 className='flex justify-start text-sm sm:text-l mb-2 sm:mb-3 text-gray-600'>N°. {pokemon.pokedexId}</h1>
                <h1 className='flex justify-start text-lg sm:text-xl font-semibold mb-1'>{pokemon.name.fr}</h1>
                <div className='flex justify-start'>
                  {pokemon.types.map((pokemonType, index) => (
                    <div key={index}>
                      <p className={`text-sm sm:text-l mr-1 h-6 w-16 rounded-sm flex justify-center items-center ${getTypeClass(pokemonType.name)[0]}`}>{pokemonType.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      )}
    </main>
  )
}