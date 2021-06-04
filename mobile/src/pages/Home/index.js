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
    
    const URLbulba = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    
    const [dados,setdados] = useState('');

    const [imagePokemon,setimagePokemon] = useState('');
    const [name,setname] = useState('');
    const [type,settype] = useState('');

    async function getdata(){
        const dado = await api.get('/charmander').then( Response=>{
            setdados(Response.data);
            //setimagePokemon(Response.data);
            setname(Response.data.name)
            settype(Response.data.types[0].type.name)
            setimagePokemon(Response.data.sprites.front_default)
        });      
    }
    useEffect(()=>{
        getdata();
    },[])
    

    return(
        <Container>
            <Title>PokeDEX</Title>
            <Wrapper>
                <CardWapper>
                    <CardPokemon source={{uri:imagePokemon}}></CardPokemon>
                    <CardInfo>
                        <NamePokemon>{name}</NamePokemon>
                        <TypePokemon>{type}</TypePokemon>
                    </CardInfo>
                </CardWapper>
                <CardWapper>
                    <CardPokemon source={{uri:URLbulba}}></CardPokemon>
                    <CardInfo>
                        <NamePokemon>{name}</NamePokemon>
                        <TypePokemon>{type}</TypePokemon>
                    </CardInfo>
                </CardWapper>
                <CardWapper>
                    <CardPokemon source={{uri:URLbulba}}></CardPokemon>
                    <CardInfo>
                        <NamePokemon>{name}</NamePokemon>
                        <TypePokemon>{type}</TypePokemon>
                    </CardInfo>
                </CardWapper>

            </Wrapper>
        </Container>
    )
}