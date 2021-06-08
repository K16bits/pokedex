import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const {height} = Dimensions.get('screen') // Ver depois no celular

export const Container = styled.View`
    background-color: #197278;
    flex: 1;
`;

export const Wrapper = styled.ScrollView`
    width: 80%;
    height: 400px;
    margin: 0px auto;
    color: white;  
`;

export const CardWapper = styled.View`
    align-items: center;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-radius: 8px;
    padding: 5px;
    border: 2px ${props => props.cor};
`;

export const CardPokemon = styled.Image`
    width: 100px;
    height: 100px;
    background-color: rgba(255,255,255,0.3);
`;

export const NamePokemon = styled.Text`
    color:white;
    font-size: 18px;
    font-weight: bold;
`;

export const TypePokemon = styled.Text`
    color:white;
    font-size: 18px;
    font-weight: bold;
`;
export const Title = styled.Text`
    font-size: 32px;
    font-weight: bold;
    text-align:center;
    margin:5px;
    color: white;
    margin-top: 50px;
`;

export const CardInfo = styled.Text`
    align-items: center;
    justify-content: center;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
export const Describe = styled.Text``;