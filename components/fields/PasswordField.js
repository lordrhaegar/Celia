import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import { AntDesign } from '@expo/vector-icons'

const PasswordField = (props) => {
    const {setPassword, isPasswordVisible, togglePasswordVisibility} = props
  return (
    <View className="flex-row items-center ">
                        <TextInput
                            onChangeText={setPassword}
                            secureTextEntry={isPasswordVisible}
                            style={styles.input} />
                        <TouchableOpacity
                        className="h-full justify-center items-center"
                                style={{ position: 'absolute', right: '5%' }}
                            onPress={togglePasswordVisibility}>
                            <AntDesign
                                name={isPasswordVisible ? 'eye' : 'eyeo'}
                                size={24}
                                color="gray"
                            />
                        </TouchableOpacity>
                    </View>
  )
}

export default PasswordField