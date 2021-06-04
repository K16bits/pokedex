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
} from './styles'

export default function Home(){
    
    const URLbulba = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    const [dados,setdados] = useState('');
    const [name,setname] = useState('');
    const [type,settype] = useState('');

    async function getdata(){
        const dado = await api.get('/bulbasaur');
        setdados(dado.data);
        setname(dado.data.forms[0].name)
        //settype(dado.data)
        console.log(dado.data.name)
    }
    useEffect(()=>{
        getdata();
    },[])
    

    return(
        <Container>
            <Title>PokeDEX</Title>
            <Wrapper>
                <CardWapper>
                    <CardPokemon source={URLbulba}></CardPokemon>
                    <NamePokemon>{name}</NamePokemon>
                </CardWapper>
                <CardWapper>
                    <CardPokemon source={URLbulba}></CardPokemon>
                    <NamePokemon>{name}</NamePokemon>
                    <NamePokemon>{type}</NamePokemon>
                </CardWapper>
                <CardWapper>
                    <CardPokemon source={URLbulba}></CardPokemon>
                    <NamePokemon>{name}</NamePokemon>
                </CardWapper>
            </Wrapper>
        </Container>
    )
}