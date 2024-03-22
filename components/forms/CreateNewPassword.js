import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../../styles/Styles'
import FormHeader from '../includes/FormHeader'
import { AntDesign } from '@expo/vector-icons'
import FormHeaderTitle from '../includes/FormHeaderTitle'
import Button from '../buttons/Button'
import { useSelector } from 'react-redux'
import InputFeild from './InputFeild'
import axios from 'axios'
import { apiBaseUrl, checkUserType } from '../../constants/constants'
import Toast from 'react-native-toast-message'

const CreateNewPassword = ({ title, closeModal }) => {
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const { otpData } = useSelector((state) => state.auth)
    const { userType } = useSelector((state) => state.auth)
    const [isLoading, setIsLoading] = useState(false)
    const { email, otp } = otpData
    const checkPassword = (text) => true
    const resetPassWithOtp = async()=>{
        setIsLoading(true)
        try {
            const resetPass = await axios.put(`${apiBaseUrl}/${checkUserType(userType)?"auth":"doctor"}/password/reset`, {
                email: email,
                otp: otp,
                password: newPassword,
                confirmPassword: confirmPassword,
            })
            if (resetPass.status === 200) {
                Toast.show({
                    type: 'success',
                    text1: resetPass.data.message
                })
                setTimeout(() => {
                    closeModal()
                }, 2000);
            }
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: error.response.data.message
            })
        }finally{
            setIsLoading(false)
        }
    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
            <View className="w-screen" style={styles.container}>
                <FormHeader closeModal={closeModal} />
                <FormHeaderTitle title="Create New Password" />
                <InputFeild
                    label="Enter new password"
                    setInput={setNewPassword}
                    checkValidityOfInput={checkPassword}
                    secureTextEntry={!isNewPasswordVisible}
                    errorText={""}
                    keyboardType="pass"
                    togglePasswordVisibility={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
                    isPasswordVisible={isNewPasswordVisible}
                />
                <InputFeild
                    label="Confirm new password"
                    setInput={setConfirmPassword}
                    checkValidityOfInput={checkPassword}
                    secureTextEntry={!isConfirmPasswordVisible}
                    errorText={""}
                    keyboardType="pass"
                    togglePasswordVisibility={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                    isPasswordVisible={isConfirmPasswordVisible}
                />
                <Button 
                onPress={resetPassWithOtp} 
                title={"Save Password"} 
                textStyle={styles.buttonText} 
                textColor="#FFFBFB" 
                buttonStyle={styles.button} 
                isLoading={isLoading}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default CreateNewPassword