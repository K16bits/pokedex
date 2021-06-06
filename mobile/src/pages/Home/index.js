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
    
    //const URLbulba = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'

    const [dados,setdados] = useState([]);     
    async function getdata(){
         for(let i = 1; i <= 150;i++){
            api.get((i).toString()).then(
            (Response)=>{
                const info = Response.data;
                //console.log(Response.data.name)

                const pokemonObjeto = {
                    id:   info.id,
                    nome: info.name,
                    tipo: info.types[0].type.name,
                    image: info.sprites.front_default,
                }
              
                //console.log(pokemonObjeto)
                setdados([...dados,pokemonObjeto])
                console.log(dados)
            }
            )
        }
        
    }

    useEffect(()=>{
        getdata();
        console.log(dados)
    },[])

    const objetoPokemon = [
        {   id : 1,
            img : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            nome : 'charmander',
            tipo : 'fire'
        },{
            id : 2,
            img : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            nome :'charmander',
            tipo : 'gree'
        },{
            id : 3,
            img : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            nome :'charmander',
            tipo : 'gree'
        },{
            id : 4,
            img : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            nome :'charmander',
            tipo : 'gree'
        },{
            id : 5,
            img : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            nome :'charmander',
            tipo : 'gree'
        },{
            id : 6,
            img : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            nome :'charmander',
            tipo : 'gree'
        },{
            id : 7,
            img : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            nome :'charmander',
            tipo : 'gree'
        }
    ]

    return(
        <Container>
            <Title>PokeDEX</Title>
            <Wrapper>
                {objetoPokemon.map( elemento =>{
                    return(
                            <CardWapper key={elemento.id}>
                                <CardPokemon source={{uri:elemento.img}}></CardPokemon>
                                <CardInfo>
                                    <NamePokemon>{elemento.nome}</NamePokemon>
                                    <TypePokemon>{elemento.tipo}</TypePokemon>
                                </CardInfo>
                            </CardWapper>
                    )
                })}
            </Wrapper>
        
        </Container>
    )
}