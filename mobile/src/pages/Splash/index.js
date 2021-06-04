import React from 'react';
import {Text,View} from 'react-native'

import {
    Container,
    ImageBackground
} from './styles'

export default function Splash(){
    
    const URLpikachu = 'https://i.pinimg.com/736x/2f/47/df/2f47df61c3c9524ca7c6418b02be5c95.jpg'
    
    return(
        <Container>
            <Text>aaaaa</Text>
            <ImageBackground source ={URLpikachu}></ImageBackground>
        </Container>
    )
}