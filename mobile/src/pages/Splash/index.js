import React from 'react';
import {useEffect} from 'react'

import {
    Container,
    ImageBackground
} from './styles'

export default function Splash({navigation}){

    const handleLogin = ()=>{
        navigation.navigate('Home');
    }

    useEffect(()=>{
        setTimeout(()=>{handleLogin()},2000)
    },[])
    
    const URLpikachu = 'https://i.pinimg.com/736x/2f/47/df/2f47df61c3c9524ca7c6418b02be5c95.jpg'
    
    return(
        <Container>
            <ImageBackground source ={URLpikachu}></ImageBackground>
        </Container>
    )
}