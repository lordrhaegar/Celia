import { View, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'

export default function NextButton({scrollTo}) {
    const height = useWindowDimensions().height;
  return (
    <View>
      <TouchableOpacity onPress={scrollTo} style={{borderColor: '#E4E4E4', borderWidth: 1, borderRadius: 500, bottom: height - (0.76 * height) , width: 80, height:56}} className="absolute right-4 justify-center items-center " activeOpacity={0.6}>
        <AntDesign name='right' size={14} color="#000"/>
      </TouchableOpacity>
    </View>
  )
}