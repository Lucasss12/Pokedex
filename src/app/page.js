'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image'
import Searchbar from '../app/component/searchbar/searchbar'

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

  const getTypeClass = (type) => {
    switch (type) {
      case 'Plante':
        return 'bg-green-400'
      case 'Feu':
        return 'bg-red-400'
      case 'Eau':
        return 'bg-blue-400'
      case 'Insecte':
        return 'bg-yellow-400'
      case 'Normal':
        return 'bg-gray-400'
      case 'Electrik':
        return 'bg-yellow-300'
      case 'Poison':
        return 'bg-purple-400'
      case 'Fée':
        return 'bg-pink-400'
      case 'Vol':
        return 'bg-blue-200'
      case 'Combat':
        return 'bg-red-600'
      case 'Psy':
        return 'bg-purple-500'
      case 'Sol':
        return 'bg-yellow-600'
      case 'Roche':
        return 'bg-yellow-500'
      case 'Spectre':
        return 'bg-purple-600'
      case 'Dragon':
        return 'bg-red-800'
      case 'Ténèbres':
        return 'bg-gray-800'
      case 'Acier':
        return 'bg-gray-600'
      case 'Glace':
        return 'bg-blue-300'
      default:
        return 'bg-gray-400'
    }
  }

  const message = pokemonData === null ? 'Loading' : pokemonData[5];
  console.log(message);


  return (
    <main>
      <Searchbar />
      {pokemonData === null ? (
        <div>Loading...</div> // Affiche l'indicateur de chargement lorsque isLoading est vrai
      ) : (
        pokemonData.map((pokemon, index) => (
          <div key={index}>
            <div className={`h-72 w-56 ${getTypeClass(pokemon.types[0].name)} border border-fuchsia-500 p-5 pt-0`}>
              <Image className='border border-y-amber-300' src={pokemon.sprites.regular} alt={pokemon.name.fr}  width={500} height={500}/>
              <h1 className='flex justify-start text-l font-semibold mb-3'>no. {pokemon.pokedexId}</h1> 
              <h1 className='flex justify-start text-xl font-semibold'>{pokemon.name.fr}</h1>
              <div className='flex justify-start'> {/* Utilisation d'une div pour afficher les types côte à côte */}
                {pokemon.types.map((pokemonType, index) => (
                  <h1 key={index} className='text-xl font-semibold mr-1'>{pokemonType.name}</h1>
                ))}
            </div>
            </div>
          </div>
        ))
      )}
    </main>
  )
}
