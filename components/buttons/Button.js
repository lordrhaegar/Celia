import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { styles } from '../../styles/Styles'

const Button = (props) => {
    const {
        onPress, 
        disabled,  
        width, 
        buttonStyle, 
        textStyle, 
        textColor, 
        title, 
        secondText, 
        viewStyle, 
        backgroundColor="#0D91DC", 
        isLoading
    } = props
    const { userType } = useSelector((state) => state.auth)
    return (
        <View style={[styles.avoidKeyboard, viewStyle]} className="w-full">
            <TouchableOpacity
                disabled={disabled}
                onPress={onPress}
                style={[buttonStyle, { backgroundColor: backgroundColor, width
                : width ? width : null }]}
            >{
                isLoading ? 
                (<ActivityIndicator size={20} color={"white"}/>) : 
                (<Text style={[textStyle, {color: textColor}]}>{title}<Text style={{ fontWeight: '600', fontSize: 16, fontFamily: 'Gilroy-B' }} > {secondText}</Text></Text>)
            }
                
            </TouchableOpacity>
        </View>
    )
}

export default Button