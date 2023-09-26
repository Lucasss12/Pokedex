'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import getTypeClass from '../../utils/typesClass'
import etoile from '../../images/etoile.png'
import Link from 'next/link';

export default function Pokemon({params}) {
    const [pokemon, setPokemon] = useState({})
    const [pokemonShiny, setPokemonShiny] = useState("regular")

    useEffect(() => {
        const fetchPokemonWithId = async () => {
          try {
            const response = await axios.get(`https://api-pokemon-fr.vercel.app/api/v1/pokemon/${params.id}/[region]`)
            setPokemon(response.data)
          } catch (error) {
              console.log(error)
            }
          };
          fetchPokemonWithId()
      }, [params.id])

      const handleShiny = () => {
        setPokemonShiny(pokemonShiny === 'regular' ? 'shiny' : 'regular');
      };

      return (
        <div>
          {Object.keys(pokemon).length === 0 ? (
            <p>chargement de la page </p>
          ) : (
            <div className='flex justify-center'>
              <div className='bg-stone-100 bg-opacity-70 border border-black rounded-lg w-full sm:w-12/12 md:w-9/12 flex flex-col sm:flex-row'>
      
                <div className='flex items-center sm:w-1/2'>
                  <Image className='rounded-lg' src={pokemon.sprites[pokemonShiny]} alt={pokemon.name.fr} width={500} height={500} />
                </div>
      
                <div className='text-2xl px-4 py-4 sm:px-8 sm:py-4'>
                  <h1 className='font-semibold mb-4'>{pokemon.name.fr} <span className='text-gray-600'>N° {pokemon.pokedexId}</span></h1>
      
                  <div className='flex justify-start items-center my-3'><p className='mr-2'>Types : </p>
                    {pokemon.types.map((pokemonType, index) => (
                      <div key={index}>
                        <p className={`text-sm sm:text-l mx-1 h-6 w-16 rounded-sm flex justify-center items-center ${getTypeClass(pokemonType.name)[0]}`}>{pokemonType.name}</p>
                      </div>
                    ))}
                  </div>
      
                  <div className='bg-gradient-to-tr from-blue-400 to-cyan-400 text-white grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 p-3 rounded-lg hover:shadow-xl'>
                    {Object.entries(pokemon.stats).map(([statName, statValue], index) => (
                      <div key={index}>
                        <p>{statName}: {statValue}</p>
                      </div>
                    ))}
                  </div>
      
                  <div className='bg-gradient-to-tr from-red-400 to-pink-300 text-white grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 p-3 rounded-lg hover:shadow-xl'>
                    <p>Taille : {pokemon.height}</p>
                    <p>Poids : {pokemon.weight}</p>
                  </div>
      
                  <div className='flex items-center mt-4'>
                    <p className='text-xl'>Voir le pokemon en shiny</p>
                    <button onClick={handleShiny}>
                      <Image className='w-12 m-3' src={etoile} alt='etoile'></Image>
                    </button>
                  </div>
      
                  <div className='flex font-semibold mt-3 text-base sm:text-lg lg:text-xl'>
                    {pokemon.evolution?.pre?.map((evolution, index) => (
                      <div key={index} className='mr-4'>
                        {evolution.name && <Link href={`/pokemon/${evolution.name}`}>{evolution.name}</Link>}
                      </div>
                    ))}
                    <p className='mr-4'>{pokemon.evolution ? pokemon.name.fr : ''}</p>
                    {pokemon.evolution?.next?.map((evolution, index) => (
                      <div key={index} className='mr-4'>
                        {evolution.name && <Link href={`/pokemon/${evolution.name}`}>{evolution.name}</Link>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )
      
}