import React from 'react'
import { View,ActivityIndicator } from 'react-native'
import {styles} from './styles'

export default function Load() {
    return (
        <View stlye={styles.container}>
            <ActivityIndicator
                size='large'
                color='red'
                />
        </View>
    )
}
