import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/Styles'
import FormHeader from '../includes/FormHeader'
import { AntDesign } from '@expo/vector-icons'
import FormHeaderTitle from '../includes/FormHeaderTitle'
import Button from '../buttons/Button'

const CreateNewPassword = ({title, closeModal}) => {
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(true);
    const toggleNewPasswordVisibility = () => {
        setIsNewPasswordVisible(!isNewPasswordVisible);
    };
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
            <View style={styles.container}>
                <FormHeader closeModal={closeModal} />
                <FormHeaderTitle title="Create New Password"/>
                <View style={styles.avoidKeyboard} className="w-full gap-3">
                    <Text style={styles.inputLabel}>Enter new password</Text>
                    <TextInput
                        onChangeText={(text) => {
                        }}
                        style={styles.input } 
                        secureTextEntry
                        />
                </View>
                <View style={styles.avoidKeyboard} className="w-full gap-3">
                    <View style={{ width: 335 }} className="w-full flex-row justify-between">
                        <Text style={styles.inputLabel}>Confirm new password</Text>
                    </View>
                    <View className="flex-row items-center">
                        <TextInput
                            style={styles.input} />

                            <AntDesign
                                onPress={toggleNewPasswordVisibility}
                                name={isNewPasswordVisible ? 'eye' : 'eyeo'}
                                size={24}
                                color="gray"
                                style={{ marginLeft: -40 }}
                            />

                    </View>
                </View>
                <Button onPress={closeModal} title={"Save Password"} textStyle={styles.buttonText} textColor="#FFFBFB" buttonStyle={styles.button}/>
            </View>
        </KeyboardAvoidingView>
    )
}

export default CreateNewPassword