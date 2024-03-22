import { View, Text, TouchableOpacity, TextInput, Platform } from 'react-native'
import { React, useEffect, useState } from 'react'
import { styles } from '../../styles/Styles';
import { AntDesign } from '@expo/vector-icons';
import { KeyboardAvoidingView } from 'react-native';
import validator from 'validator';
import { useSelector } from 'react-redux';
import Button from '../buttons/Button';
import { apiBaseUrl, checkUserType } from '../../constants/constants';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const ForgotPassword = (props) => {
    const { isForgotModalVisible, openCodeModal, closeForgotModal, setOtpEmail } = props
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [isValidEmail, setIsvalidEmail] = useState(true);
    const { userType } = useSelector((state) => state.auth)
    const onPress = () => {
        if (isForgotModalVisible) {
            openCodeModal();
            closeForgotModal();
        }
    }
    const checkValidEmail = (input) => {
        setIsvalidEmail(validator.isEmail(input));
    }
    const sendOtp = async () => {
        try {
            setIsLoading(true)
            const sendingOtp = await axios.post(`${apiBaseUrl}/${checkUserType(userType)?"auth":"doctor"}/password/request-reset`, {
                email
            });
            if (sendingOtp.status === 200 || sendingOtp.status === 201)
            {
                Toast.show({
                    type: "success",
                    text1: sendingOtp.data.message
                })
                onPress()
            }

        } catch (err) {
            const {error, message} = err.response.data
            Toast.show({
                type: "error",
                text1: error || message
            })
        }finally{
            setIsLoading(false)
        }
    };
    
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
            <View style={styles.container}>
                <View style={styles.avoidKeyboard} className="w-full flex-row items-center">
                    <TouchableOpacity
                        onPress={closeForgotModal}
                        style={{ gap: 5 }} className="flex-row items-center">
                        <AntDesign
                            name='left'
                            style={{ color: '#0D91DC', fontSize: 13 }}
                        />
                        <Text style={{ fontFamily: 'Gilroy-M', fontSize: 14, fontWeight: '600', color: userType === 'Doctor' ? '#7CD1D1' : "#0D91DC" }}>
                            Back
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.avoidKeyboard} className="w-full">
                    <Text style={styles.title}>
                        So you forgot your password
                    </Text>
                </View>
                <View style={styles.avoidKeyboard} className="w-full">
                    <Text style={styles.description}>
                        Don’t worry, it happens to the best of us. Let us help you recover your account.
                    </Text>
                </View>
                <View style={styles.avoidKeyboard} className="w-full gap-3">
                    <Text style={styles.inputLabel}>Enter your registered email address</Text>
                    <TextInput
                        onChangeText={(text) => {
                            checkValidEmail(text);
                            if (isValidEmail) {
                                setEmail(text)
                                setOtpEmail(text)
                            }
                        }}
                        keyboardType='email-address'
                        style={isValidEmail ? styles.input : styles.inputError} />
                    {
                        !isValidEmail ? (
                            <Text style={{
                                color: '#DC0D0D',
                                fontSize: 15,
                                fontWeight: '400',
                                fontFamily: "Gilroy-l"
                            }}>
                                Please Enter a Valid Email
                            </Text>
                        ) : (
                            <View />
                        )
                    }
                </View>
                <View style={styles.avoidKeyboard} className="w-full">
                    <Text style={{
                        fontSize: 15,
                        fontWeight: '400',
                        fontFamily: "Gilroy-l"
                    }}>
                        A short code will be sent to the email to verify if this account actually belongs to you.
                    </Text>
                </View>
                <Button 
                title={"Send Code"} 
                buttonStyle={styles.button} 
                textStyle={styles.buttonText} 
                textColor={"#FFFBFB"} 
                onPress={sendOtp}
                isLoading={isLoading}
                disabled={isLoading}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default ForgotPassword