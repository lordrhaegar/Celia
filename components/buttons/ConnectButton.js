import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import { Foundation } from '@expo/vector-icons'
import { connectButtonStyles } from '../../styles/connectButtonStyles'

const ConnectButton = (props) => {
    const {onPress} = props
  return (

    <TouchableOpacity
        onPress={onPress}
        style={[styles.button2, connectButtonStyles.buttonStyle]}
        className="w-full"
    >
        <View style={props.iconStyle}>
            <Foundation
            name={props.iconName}
            color="white"
            size={16}
            />
        </View>
        <Text style={props.textStyle}>{props.title}</Text>
    </TouchableOpacity>

  )
}

export default ConnectButton