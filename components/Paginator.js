import { View, Text, useWindowDimensions, Animated } from 'react-native'
import React from 'react'

export default function Paginator({data, scrollX}) {
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
  return (
    <View style={{width: width,height:64, gap: 5, position: 'absolute', bottom: height - (0.73 * height)}} className=" px-5 flex-row justify-start items-center">
        {data.map((_,i)=>{
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
            const pillBackgroundColor  = scrollX.interpolate({
                inputRange,
                outputRange: ['#EAE8E8', '#0D91DC', '#EAE8E8'],
                extrapolate: 'clamp'
            })
            return <Animated.View className="rounded-full" style={{
                backgroundColor: pillBackgroundColor,
                marginHorizontal: 5,
                width: 46,
                height: 4,
                borderRadius: 500
              }} key={i.toString()}/>
        })}
    </View>
  )
}