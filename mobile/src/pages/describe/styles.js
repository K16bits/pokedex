import styled from 'styled-components/native'
import {theme} from '../../globalStyles/theme'

export const Container = styled.View`
    background-color: ${theme.color.primary};
    flex: 1;
    align-items: center;
`;

export const Card = styled.View`
    width: 50%;
    height: 50%;
    align-items: center;
    justify-content: center;
`;

export const DataInfo = styled.Text`
    font-size: 30px;
    color: white;
    text-transform: capitalize;
    font-family: ${theme.fonts.inter400};
`;

export const ImagePokemon = styled.Image`
    width: 230px;
    height: 230px;
    margin-top: 250px;
    background-color: rgba(225,255,255,0.5);
`;

export const PokemonInfo = styled.View`
    width: 250px;
    margin: 10px;
    padding: 5px;
    border: 1px white;
`;

