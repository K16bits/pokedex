import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const {height} = Dimensions.get('screen') // Ver depois no celular

export const Container = styled.View`
    background-color: #197278;
    flex: 1;
`;

export const Wrapper = styled.View`
    width: 80%;
    height: 400px;
    margin: 0px auto;
    color: white;
    border: 1px;
`;

export const CardWapper = styled.View`
    align-items: center;
    margin-bottom: 5px;
`;

export const CardPokemon = styled.Image`
    width: 100px;
    height: 100px;
    border: 1px;
    background-color: rgba(255,255,255,0.3);
`;

export const NamePokemon = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;
export const Title = styled.Text`
    font-size: 32px;
    font-weight: bold;
    text-align:center;
    margin:5px;
    color: white;
`;