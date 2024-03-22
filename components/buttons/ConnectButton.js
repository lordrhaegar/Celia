import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import { Fontisto, Foundation } from '@expo/vector-icons'
import { connectButtonStyles } from '../../styles/connectButtonStyles'

const ConnectButton = (props) => {
  const { onPress, width, borderColor, borderWidth } = props
  return (

    <TouchableOpacity
    activeOpacity={1}
      onPress={onPress}
      style={[styles.button2, connectButtonStyles.buttonStyle, { width: width, borderColor: borderColor, borderWidth: borderWidth}]}
      className="w-full"
    >
      <View style={props.iconStyle}>
        {
          props.iconName === "whatsapp" ? (
            <Fontisto
              name={props.iconName}
              color='green'
              size={20}
            />
          ) : (
            <Foundation
              name={props.iconName}
              color="white"
              size={16}
            />
          )
        }
      </View>
      <Text style={props.textStyle}>{props.title}</Text>
    </TouchableOpacity>

  )
}

export default ConnectButton