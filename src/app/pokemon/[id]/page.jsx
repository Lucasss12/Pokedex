'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Pokemon({params}) {
    const [pokemon, setPokemon] = useState({})

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

      const message = pokemon === null ? 'Loading' : pokemon;
      console.log("pokemon", message);

  return (
    <div>
        {Object.keys(pokemon).length === 0 ?  (
            <p>chargement de la page </p>
        ) : (
            <div className='bg-amber-200'>
                <div>
                    <Image className='bg-stone-200 rounded-lg' src={pokemon.sprites.regular} alt={pokemon.name.fr} width={500} height={500} />
                </div>
            </div>
        )}
    </div>
  )
}