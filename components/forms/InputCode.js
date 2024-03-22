import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { styles } from '../../styles/Styles';
import { useDispatch, useSelector } from 'react-redux';
import FormHeader from '../includes/FormHeader';
import FormHeaderTitle from '../includes/FormHeaderTitle';
import axios from 'axios';
import { apiBaseUrl, checkUserType } from '../../constants/constants';
import Button from '../buttons/Button';
import { setOtpData } from '../../features/authSlice';
import Toast from 'react-native-toast-message';

const InputCode = (props) => {
    const { closeCodeModal, openCreatePassModal, otpEmail } = props
    const inputRefs = Array(6).fill(0).map((_, i) => useRef(null));
    const [isCodeIncorrect, setIsCodeIncorrect] = useState(false);
    const [enteredCode, setEnteredCode] = useState('');
    const [countdown, setCountdown] = useState(10);
    const [isCountdownActive, setIsCountdownActive] = useState(false);
    const { userType } = useSelector((state) => state.auth)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    
    
    useEffect(() => {
        if (isCountdownActive && countdown > 0) {
            const countdownInterval = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000);

            return () => {
                clearInterval(countdownInterval);
            };
        } else {
            setIsCountdownActive(false);
        }
    }, [isCountdownActive, countdown]);

    const formatCountdown = () => {
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;
        return `(${minutes}:${seconds.toString().padStart(2, '0')})`;
    };

    const focusPreviousInput = index => {
        if (index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };
    const focusNextInput = (index) => {
        if (index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    };
    const startCountdown = () => {
        if (!isCountdownActive) {
            setCountdown(10);
            setIsCountdownActive(true);
        }
    };
    const verifyCode = async() => {
        setIsLoading(true)
        try {
            const verification = await axios.post(`${apiBaseUrl}/${checkUserType(userType)?"auth":"doctor"}/password/validate-otp`,{
                email: otpEmail,
                otp: enteredCode
            })
            if (verification.status === 200) {
                    dispatch(setOtpData({
                        email: otpEmail,
                        otp: enteredCode
                    }))
                    openCreatePassModal()
                    closeCodeModal()
                }
        } catch (error) {
            setIsCodeIncorrect(true);
            startCountdown();
        }finally{
            setIsLoading(false)
        }
    };
    const resendOtp = async () => {
        setIsCodeIncorrect(false);
        setIsCountdownActive(false);
        setCountdown(10);
        try {
            setIsLoading(true)
            const sendingOtp = await axios.post(`${apiBaseUrl}/${checkUserType(userType)?"auth":"doctor"}/password/request-reset`, {
                email: otpEmail
            });
            if (sendingOtp.status === 200 || sendingOtp.status === 201)
            {
                Toast.show({
                    type: "success",
                    text1: sendingOtp.data.message
                })
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
                <FormHeader closeModal={closeCodeModal} />
                <FormHeaderTitle title="Input Code"/>
                <View style={styles.avoidKeyboard} className="w-full">
                    <Text style={styles.description}>
                        Insert the 4 digit code sent to your email to verify it’s your account.
                    </Text>
                </View>
                <View style={styles.avoidKeyboard} className="w-full flex-row gap-4">
                    {inputRefs.map((inputRef, index) => (
                        <TextInput
                            key={index}
                            ref={inputRef}
                            style={isCodeIncorrect ? styles.inputCodeError : styles.inputCode}
                            maxLength={1}
                            keyboardType="numeric"
                            onChangeText={text => {
                                setEnteredCode(prevCode => {
                                    const newCode = text === '' ? '' : prevCode + text;
                                    if (newCode.length === 6) {
                                        setIsCodeIncorrect(false)
                                    } else if (text === '') {
                                        focusPreviousInput(index);
                                    } else {
                                        focusNextInput(index);
                                    }
                                    return newCode;
                                });

                            }}
                        />
                    ))}

                </View>
                {
                    isCodeIncorrect ? (
                        <View>
                            <View style={styles.avoidKeyboard} className="w-full">
                                <Text style={{
                                    color: '#DC0D0D',
                                    fontSize: 15,
                                    fontWeight: '400',
                                    fontFamily: "Gilroy-l"
                                }}>
                                    Code incorrect
                                </Text>
                            </View>
                            <View style={styles.avoidKeyboard} className="w-full">
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: '400',
                                    fontFamily: "Gilroy-l"
                                }}>
                                    Insert the correct code or click on the resend code button to have a new code sent to the same email after a few minutes.
                                </Text>
                            </View>
                        </View>
                    ) : (
                        <View />
                    )
                }
                <Button 
                title={"Verify Code"} 
                buttonStyle={styles.button} 
                textStyle={styles.buttonText} 
                textColor={"#FFFBFB"} 
                onPress={verifyCode}
                isLoading={isLoading}
                disabled={isLoading}
                />
                {
                    isCodeIncorrect ? (
                        <View style={styles.avoidKeyboard} className="w-full">
                            <TouchableOpacity
                                onPress={resendOtp}
                                disabled={isCountdownActive}
                                style={styles.button2}
                                className="flex-row gap-1"
                            >
                                {
                                    isLoading ? (<ActivityIndicator size={20} color={"white"}/>) :
                                    (
                                        <View className="flex-row">
                                    <Text style={[styles.buttonText, { color: "#27292A" }]}>Resend code</Text>
                                {
                                    isCountdownActive ? (
                                        <Text style={[styles.buttonText, { color: "#DC950D" }]}> {formatCountdown()}</Text>

                                    ) : null
                                }
                                </View>
                                    )
                                }
                                
                                
                            </TouchableOpacity>

                        </View>
                    ) : (
                        <View />
                    )
                }
            </View>
        </KeyboardAvoidingView>
    )
}

export default InputCode