import styled from 'styled-components/native'

export const Wrapper = styled.View`
    background-color: #197278;
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
`;

export const ImagePokemon = styled.Image`
    width: 230px;
    height: 230px;
    margin-top: 250px;
    border: 1px solid white;
    background-color: rgba(225,255,255,0.5);
`;

export const PokemonInfo = styled.View`
    width: 250px;
    margin: 10px;
    padding: 5px;
    border: 1px white;
`;