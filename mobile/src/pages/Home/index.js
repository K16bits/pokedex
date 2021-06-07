import React, { useEffect, useState } from 'react';
import { View,Text } from 'react-native';

import api from '../../../services/api'

import {
    Container,
    Wrapper,
    CardWapper,
    CardPokemon,
    Title,
    NamePokemon,
    TypePokemon,
    CardInfo,
} from './styles'

export default function Home(){
    
    const [dados,setdados] = useState([]);  

    useEffect( ()=>{
        const colecao = [];
        for(let x = 1 ; x <= 150;x++){
           colecao.push(api.get(x.toString()).then(Response => Response.data) )
        }            
        
        Promise.all(colecao).then(
            Response =>{
                setdados(Response)
            }
        )
    },[])

    return(
        <Container>
            <Title>PokeDEX</Title>
            <Wrapper>
                <NamePokemon></NamePokemon>
                <NamePokemon></NamePokemon>
                {dados.map( elemento =>{
                    return(
                            <CardWapper key={elemento.id}>
                                <CardPokemon source={{uri:elemento.sprites.front_default}}></CardPokemon>
                                <CardInfo>
                                    <NamePokemon>{elemento.name}</NamePokemon>
                                    <TypePokemon>{elemento.types[0].type.name}</TypePokemon>
                                </CardInfo>
                            </CardWapper>
                    )
                })}
            </Wrapper>
        </Container>
    )
}