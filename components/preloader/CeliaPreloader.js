import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import celiaStyle from '../../styles/celiaAiStyle'
import { MotiImage } from 'moti'
import { logoBig } from '../../constants/constants'
import { Easing } from 'react-native-reanimated'

const CeliaPreloader = () => {
    return (
        <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }, celiaStyle.center]}>
            <MotiImage
                from={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{
                    type: 'spring',
                    duration: 1000,
                    ease: Easing.linear,
                    loop: true
                }}
                style={{ width: "20%", height: "20%" }}
                resizeMode='contain'
                source={logoBig} />
        </View>
    )
}

export default CeliaPreloader