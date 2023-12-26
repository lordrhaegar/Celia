import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'

const FormHeaderTitle = (props) => {
    return (
        <View style={styles.avoidKeyboard} className="w-full">
            <Text style={[styles.title, {color: props.color}]}>
                {props.title}
            </Text>
        </View>
    )
}

export default FormHeaderTitle