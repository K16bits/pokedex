import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { theme } from '../../globalStyles/theme';

const { height } = Dimensions.get('screen') // Ver depois no celular

export const Container = styled.View`
    background-color: ${theme.color.primary};
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
    background-color: ${theme.color.secondarytransparent};
`;

export const NamePokemon = styled.Text`
    font-family: ${theme.fonts.inter400};
    color:white;
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
`;

export const TypePokemon = styled.Text`
    color:white;
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
`;
export const Title = styled.Text`
    font-family: ${theme.fonts.inter500};
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

    display: flex;
    flex-direction: column;
`;
export const Describe = styled.Text``;