import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import { AntDesign } from '@expo/vector-icons'
import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'

const Toast = ({ text, color }) => {
  const { width } = useWindowDimensions();
  return (
    <MotiView
      style={[styles.toastContainer, { backgroundColor: color }]}
      from={{
        translateX: 0
      }}
      animate={{
        translateX: width - 25
      }}
      exit={{
        translateX: -(width - 25)
      }}
      transition={{
        type: 'timing',
        duration: 500,
        easing: Easing.linear
      }}
    >
      <View
        style={{
          width: '100%', height: '20%', alignItems: 'flex-end'
        }}
      >
        <AntDesign
          name='close'
          size={10}
          color='white'
        />
      </View>
      <View
        style={{
          width: '100%', height: '80%', alignItems: 'center', justifyContent: 'center'
        }}
      >
        <Text
          style={styles.buttonText}
          className="text-[#FFFBFB]"
        >{text}</Text>
      </View>
    </MotiView>
  )
}

export default Toast