import { View, Text, TouchableOpacity, TextInput, useWindowDimensions, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { styles } from '../../styles/Styles';
import { AntDesign } from '@expo/vector-icons';
import { React, useEffect, useState } from 'react';
import { Modal } from 'react-native';
import ForgotPassword from './ForgotPassword';
import InputCode from './InputCode';
import validator from 'validator';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { ALERT_TYPE, AlertNotificationRoot, Toast, Dialog } from 'react-native-alert-notification';
import { ScrollView } from 'react-native-gesture-handler';

const SigninForm = ({ openRegModal, closeLoginModal, setLoginStatus }) => {
    const width = useWindowDimensions().width;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [isForgotModalVisible, setForgotModalVisible] = useState(false);
    const [isCodeModalVisible, setCodeModalVisible] = useState(false);
    const [isValidEmail, setIsvalidEmail] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const navigator = useNavigation();
    const checkValidEmail = (input) => {
        setIsvalidEmail(validator.isEmail(input));
    }
    const openForgotModal = () => {
        setForgotModalVisible(true);
    };
    const closeForgotModal = () => {
        setForgotModalVisible(false);
    };
    const openCodeModal = () => {
        setCodeModalVisible(true);
    };
    const closeCodeModal = () => {
        setCodeModalVisible(false);
    };
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    const handleLogin = async () => {
        try {
            setIsLoading(true)
            // const response = await fetch('https://celiabackendtestapis.onrender.com/auth/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ email, password }),
            // })
            const response = await axios.post('https://celiabackendtestapis.onrender.com/auth/login', {
                email, 
                password
            })
            if (response.status === 200) {
                setLoginStatus(response.status)
                setTimeout(() => {
                setLoginStatus(0)
                    closeLoginModal()
                    navigator.navigate('App', {userDetails: response.data})
                }, 3000);
                console.log("success");
            }
            setIsLoading(false)
            } 
            catch (error) {
                if (error.response.status === 400 || 404) {
                    setLoginStatus(error.response.status)
                    setTimeout(() => {
                        setLoginStatus(0)
                        }, 3000);
                    console.log('Email or password invalid');
                }
                setIsLoading(false)
                // console.error('Error logging in:', error.response.status);
            }
    };
    return (
        <AlertNotificationRoot>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={styles.container}>
                <View style={styles.avoidKeyboard} className="w-full flex-row items-center">
                    <TouchableOpacity
                        onPress={closeLoginModal}
                        style={{ gap: 5 }} className="flex-row items-center">
                        <AntDesign
                            name='left'
                            style={{ color: '#0D91DC', fontSize: 13 }}
                        />
                        <Text style={{ fontFamily: 'Gilroy-M', fontSize: 14, fontWeight: '600' }} className="text-[#0D91DC]">
                            Back
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.avoidKeyboard} className="w-full">
                    <Text style={styles.title}>
                        Welcome back!
                    </Text>
                </View>
                <View style={styles.avoidKeyboard} className="w-full gap-3">
                    <Text style={styles.inputLabel}>Enter your registered email address</Text>
                    <TextInput
                        onChangeText={(text) => {
                            checkValidEmail(text);
                            setEmail(text)
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
                <View style={styles.avoidKeyboard} className="w-full gap-3">
                    <View style={{ width: 335 }} className="w-full flex-row justify-between">
                        <Text style={styles.inputLabel}>Enter your password</Text>
                        <TouchableOpacity
                            onPress={openForgotModal}
                        >
                            <Text style={styles.inputLabel} className="text-[#EA6E6E]">Forgot password?</Text>
                        </TouchableOpacity>
                        <Modal
                            visible={isForgotModalVisible ? isForgotModalVisible : isCodeModalVisible}
                            animationType='slide'
                            transparent={true}
                        >
                            <View style={styles.modalBackground}>
                                {
                                    isForgotModalVisible ? (
                                        <View style={[{ height: "60%" }, styles.modalContainer]}>
                                            <ForgotPassword isForgotModalVisible={isForgotModalVisible} openCodeModal={openCodeModal} closeForgotModal={closeForgotModal} />
                                        </View>
                                    ) : isCodeModalVisible ? (
                                        <View style={[{ flex: 0 }, styles.modalContainer]}>
                                            <InputCode closeModal={closeCodeModal} />
                                        </View>
                                    ) : (<View />)
                                }

                            </View>
                        </Modal>
                    </View>
                    <View className="flex-row items-center">
                        <TextInput
                            onChangeText={setPassword}
                            secureTextEntry={isPasswordVisible}
                            style={styles.input} />
                        <TouchableOpacity
                            onPress={togglePasswordVisibility}>
                            <AntDesign
                                name={isPasswordVisible ? 'eye' : 'eyeo'}
                                size={24}
                                color="gray"
                                style={{ marginLeft: -40 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.avoidKeyboard} className="w-full">
                    <TouchableOpacity
                        disabled={isLoading}
                        onPress={handleLogin}
                        style={[styles.button, { backgroundColor: isLoading ? '#66B6FF' : '#0D91DC' }]}
                    >
                        {
                            isLoading ? (<ActivityIndicator color='white'/>) : (
                                <Text style={styles.buttonText} className="text-[#FFFBFB]">Log in</Text>
                            )
                        }
                    </TouchableOpacity>
                </View>
                <View style={[styles.avoidKeyboard, { width: width - 55 }]} className="justify-center flex-row gap-1">
                    <Text style={styles.inputLabel}>Don't have an account ?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            openRegModal()
                        }}
                    >
                        <Text style={styles.inputLabel} className="text-[#0D91DC]">
                            Sign up here
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={[{ width: width - 55 }, styles.avoidKeyboard]} className="flex-row items-center justify-center gap-5">
                    <View style={{ height: 1, width: 90 }} className="border-b-2 border-[#CED6DA]"></View>
                    <Text>Or</Text>
                    <View style={{ height: 1, width: 90 }} className="border-b-2 border-[#CED6DA]"></View>
                </View>
                <View style={styles.avoidKeyboard} className="w-full">
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText} className="text-[#27292A]">Login with<Text style={{ fontWeight: '600', fontSize: 16, fontFamily: 'Gilroy-B' }} > Google</Text></Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </AlertNotificationRoot>
    )
}

export default SigninForm