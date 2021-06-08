import React, { useEffect, useState } from 'react'
import { Text } from 'react-native';
import api from '../../../services/api'

import {
    Wrapper,
    Card,
    Name,
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
                    altura: data.data.height,
                    peso: data.data.weight
                })
            })
    }
    ,[])

    return(
        <Wrapper>
            <Card>
                <ImagePokemon source={{uri:pokemonInfo.image}}></ImagePokemon>
                <PokemonInfo>
                    <Name>{pokemonInfo.nome}</Name>
                    <Text>{pokemonInfo.altura}</Text>
                    <Text>{pokemonInfo.peso}</Text>
                </PokemonInfo>
            </Card>
        </Wrapper>
    )
}