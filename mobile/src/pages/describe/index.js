import React, { useEffect, useState } from 'react'
import api from '../../../services/api'

import {
    Container,
    Card,
    DataInfo,
    ImagePokemon,
    PokemonInfo
} from './styles'


export default function Describe({route}){
    const {idPokemon} = route.params;
    const [pokemonInfo,SetpokemonInfo] = useState('');
    
    useEffect(()=>{
        api.get(idPokemon.toString()).then(
            data =>{ 
                SetpokemonInfo({
                    id:data.data.id,
                    nome:data.data.name,
                    image:data.data.sprites.other['official-artwork'].front_default,
                    tipo: data.data.types[0].type.name,
                    altura: data.data.height,
                    peso: data.data.weight
                })
            })
    }
    ,[])

    return(
        <Container>
            <Card>
                <ImagePokemon source={{uri:pokemonInfo.image}}></ImagePokemon>
                <PokemonInfo>
                    <DataInfo>N: {pokemonInfo.id}</DataInfo>
                    <DataInfo>Nome: {pokemonInfo.nome}</DataInfo>
                    <DataInfo>Tipo: {pokemonInfo.tipo}</DataInfo>
                    <DataInfo>Altura: {pokemonInfo.altura} ?</DataInfo>
                    <DataInfo>Peso: {pokemonInfo.peso} ?</DataInfo>
                </PokemonInfo>
            </Card>
        </Container>
    )
}