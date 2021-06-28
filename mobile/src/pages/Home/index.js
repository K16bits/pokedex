import React, { useEffect, useState } from 'react';
import { TouchableOpacity,View } from 'react-native';
import { colorType } from '../../utils/colorType'
import api from '../../../services/api'

import Load from '../../components/Load'

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

export default function Home({ navigation }) {

    const [dados, setdados] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const colecao = [];
        for (let x = 1; x <= 150; x++) {
            colecao.push(api.get(x.toString()).then(Response => Response.data))
        }

        Promise.all(colecao).then(
            Response => {
                setdados(Response)
            }
        ).finally(()=>{
            setLoading(false)
        })
    }, [])

    return (
        <Container>
            <Title>Pokédex</Title>
            <Wrapper>
                {
                    loading ? <Load /> :
                    dados.map(elemento => {
                        return (
                            <TouchableOpacity key={elemento.id} onPress={() => navigation.navigate('Describe', { idPokemon: elemento.id })}>
                                <CardWapper cor={colorType(elemento.types[0].type.name)}>
                                    <CardPokemon source={{ uri: elemento.sprites.front_default }}></CardPokemon>
                                    <CardInfo>
                                        <View>
                                            <NamePokemon>{elemento.name}</NamePokemon>
                                            <TypePokemon>{elemento.types[0].type.name}</TypePokemon>
                                        </View>
                                    </CardInfo>
                                </CardWapper>
                            </TouchableOpacity>
                        )
                    })
                }
            </Wrapper>
        </Container>
    )
}