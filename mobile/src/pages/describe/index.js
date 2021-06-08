import React, { useEffect, useState } from 'react'
import api from '../../../services/api'

import {
    Wrapper,
    Name,
    ImagePokemon,
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
                    image:data.data.sprites.front_default
                })
            })
    }
    ,[])

    return(
        <Wrapper>
            <ImagePokemon source={{uri:pokemonInfo.image}}></ImagePokemon>
            <Name>{pokemonInfo.nome}</Name>
        </Wrapper>
    )
}