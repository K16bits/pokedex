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

export const Name = styled.Text`
    font-size: 32px;
    color: white;
    text-transform: capitalize;
`;

export const ImagePokemon = styled.Image`
    width: 230px;
    height: 230px;
    margin-top: 100px;
    border: 1px solid white;
`;

export const PokemonInfo = styled.View`
    width: 100%;
    border: 1px white;
`;