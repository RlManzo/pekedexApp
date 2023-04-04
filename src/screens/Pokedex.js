import { View, Text, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react';
import React from 'react'
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../PokemonList';


export default function Pokedex() {
    const [pokemons, setPokemons] = useState()
    useEffect(()=>{
      (async()=>{
       await loadPokemons()
      })();
    },[])

    const loadPokemons = async ()=>{
        try{
            const response = await getPokemonApi()
            const pokemonsArray = []
            for await (const pokemonItem of response.result){
             const pokemonDetails = await getPokemonDetailsByUrlApi(pokemonItem.url)
             pokemonsArray.push({
                id: pokemonDetails.id,
                name: pokemonDetails.name,
                type: pokemonDetails.types[0].type.name,
                order: pokemonDetails.order,
                imagen: pokemonDetails.sprites.other['official-artwork'].front_default
             })
            }
            setPokemons([...pokemons, ...pokemonsArray])
        }catch(error){ 
        console.log(error)}

    }
    return (
    <View style={styles.container}>
      <PokemonList pokemons={pokemons}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });