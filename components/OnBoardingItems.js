import { View, Text, Image, useWindowDimensions, Animated } from 'react-native'
import React from 'react'
import { styles } from '../styles/Styles';

const OnBoardingItems = ({ item, fadeValue }) => {
    const width = useWindowDimensions().width;
    return (
        <Animated.View style={{opacity:fadeValue, height: '88%'}} className=" py-2 justify-between items-center mr-[-5]" >
            <Image
                source={item.image}
                style={{ height: '70%', width: "90%", borderRadius: 30}}
                resizeMode="cover"
            />
            <View style={{ height: "auto", width: width}} className=" px-5 flex-col">
                <Text style={styles.title}  className="text-black font-medium">
                    {item.title}
                </Text>
                <View className="py-2"/>
                <Text style={styles.description} className="text-gray-600 text-lg ">
                    {item.description}
                </Text>
            </View>
        </Animated.View>
    )
}

export default OnBoardingItems