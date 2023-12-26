import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { styles } from '../../styles/Styles'

const Button = (props) => {
    const {onPress, buttonStyle, textStyle, textColor, title, secondText, viewStyle, backgroundColor="#0D91DC"} = props
    const { userType } = useSelector((state) => state.auth)
    return (
        <View style={[styles.avoidKeyboard, viewStyle]} className="w-full">
            <TouchableOpacity
                onPress={onPress}
                style={[buttonStyle, { backgroundColor: backgroundColor }]}
            >
                <Text style={[textStyle, {color: textColor}]}>{title}<Text style={{ fontWeight: '600', fontSize: 16, fontFamily: 'Gilroy-B' }} > {secondText}</Text></Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button