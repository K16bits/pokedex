import React, { useEffect, useState } from 'react';
import { View,Text,TouchableOpacity } from 'react-native';

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

export default function Home({navigation}){
    
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

    function chanceColor(type){
        if(type === "fire"){
            return "red";
        }else if(type === "water"){
            return "blue";
        }else if(type === "grass"){
            return "green";
        }else if(type === "poison"){
            return "purple";
        }else if(type === "electric"){
            return "yellow";
        }else{
            return "white"
        }
    }


    return(
        <Container>
            <Title>PokeDEX</Title>
            <Wrapper>
                <NamePokemon></NamePokemon>
                <NamePokemon></NamePokemon>
                {dados.map( elemento =>{
                    return(
                        <TouchableOpacity key={elemento.id} onPress={()=> navigation.navigate('Describe',{idPokemon:elemento.id})}>
                            <CardWapper cor={chanceColor(elemento.types[0].type.name)}>
                                <CardPokemon source={{uri:elemento.sprites.front_default}}></CardPokemon>
                                <CardInfo>
                                    <NamePokemon>{elemento.name}</NamePokemon>
                                    <TypePokemon>{elemento.types[0].type.name}</TypePokemon>
                                </CardInfo>
                            </CardWapper>
                        </TouchableOpacity>
                    )
                })}
            </Wrapper>
        </Container>
    )
}