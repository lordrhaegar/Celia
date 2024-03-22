import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native';
import { styles } from '../../styles/Styles';
import { AntDesign } from '@expo/vector-icons';

const InputFeild = (props) => {
    const [isInputValid, setInputValid] = useState(true)
    const {
        checkValidityOfInput,
        setInput,
        input,
        keyboardType,
        label,
        errorText,
        secureTextEntry,
        togglePasswordVisibility,
        isPasswordVisible
    } = props
    return (
        <View style={styles.avoidKeyboard} className="w-full gap-3">
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                keyboardType={keyboardType}
                value={input}
                secureTextEntry={secureTextEntry}
                onChangeText={(text) => {
                    checkValidityOfInput(text)? setInputValid(true) : setInputValid(false);
                    setInput(text)
                }}
                style={isInputValid ? styles.input : styles.inputError} />
                {
                    keyboardType === "pass" && (
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
                    )
                }
            {
                !isInputValid ? (
                    <Text style={{
                        color: '#DC0D0D',
                        fontSize: 15,
                        fontWeight: '400',
                        fontFamily: "Gilroy-l"
                    }}>
                        {errorText}
                    </Text>
                ) : (
                    <View />
                )
            }
        </View>
    )
}

export default InputFeild