import { View, Text, TouchableOpacity, TextInput, Modal, KeyboardAvoidingView, Platform, ScrollView, useWindowDimensions, ActivityIndicator } from 'react-native';
import { styles } from '../../styles/Styles';
import { AntDesign } from '@expo/vector-icons';
import { React, useEffect, useState } from 'react';
import validator from 'validator';
import axios from 'axios';
import { useNavigation } from '@react-navigation/core';
import { ALERT_TYPE, Dialog, AlertNotificationRoot } from 'react-native-alert-notification';

const SignupForm = ({ openLoginModal, closeRegModal, setRegStatus }) => {
    const width = useWindowDimensions().width;
    const [firstname, setFirstName] = useState('');
    const [isFirstNameEmpty, setIsFirstNameEmpty] = useState(false);
    const [lastname, setLastName] = useState('');
    const [isLastNameEmpty, setIsLastNameEmpty] = useState(false);
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsvalidEmail] = useState(true);
    const [password, setPassword] = useState('');
    const [isPasswordEmpty, setIsPasswordEmpty] = useState('');
    const [password_confirmation, setConfirmPassword] = useState('');
    const [isPasswordEqual, setIsPasswordEqual] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const navigator = useNavigation();
    const checkValidEmail = (input) => {
        setIsvalidEmail(validator.isEmail(input));
    }
    const handleRegister = async () => {
        try {
            setIsLoading(true)
            // const response = await fetch('https://celiabackendtestapis.onrender.com/auth/register', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ 
            // firstname, 
            // lastname, 
            // email, 
            // password, 
            // password_confirmation 
            //     }),
            // })
            const response = await axios.post('https://celiabackendtestapis.onrender.com/auth/register', {
                firstname,
                lastname,
                email,
                password,
                password_confirmation
            })
            if (response.status === 200) {
                setRegStatus(response.status)
                setTimeout(() => {
                    setRegStatus(0)
                    closeRegModal()
                    navigator.navigate('App', { userDetails: response.data })
                }, 3000);
                console.log("success");
            }
            setIsLoading(false)
        }
        catch (error) {
            if (error.response.status === 422) {
                setRegStatus(error.response.status)
                setTimeout(() => {
                    setRegStatus(0)
                }, 3000);
                console.log('Email or password invalid');
            }
            setIsLoading(false)
        }
    };
    return (
        <AlertNotificationRoot>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.container}>
                <View style={styles.avoidKeyboard} className="w-full flex-row items-center">
                    <TouchableOpacity
                        onPress={closeRegModal}
                        style={{ gap: 5 }} className="flex-row items-center">
                        <AntDesign
                            name='left'
                            style={{ color: '#0D91DC', fontSize: 13 }}
                        />
                        <Text style={styles.backText} className="text-[#0D91DC]">
                            Back
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.avoidKeyboard}>
                    <Text style={styles.title}>
                        Tell me a little bit about you?
                    </Text>
                </View>
                <View style={styles.avoidKeyboard} className="gap-3">
                    <Text style={styles.inputLabel}>Your first name</Text>
                    <TextInput
                        onChangeText={(firstName) => {
                            setFirstName(firstName)
                            setIsFirstNameEmpty(false)
                        }
                        }
                        style={!isFirstNameEmpty ? styles.input : styles.inputError} />
                    {
                        isFirstNameEmpty ? (
                            <Text style={{
                                color: '#DC0D0D',
                                fontSize: 15,
                                fontWeight: '400',
                                fontFamily: "Gilroy-l",
                            }}>
                                Please enter your firstname
                            </Text>
                        ) : (
                            <View />
                        )
                    }
                </View>
                <View style={styles.avoidKeyboard} className="gap-3">
                    <Text style={styles.inputLabel}>Your last name</Text>
                    <TextInput
                        onChangeText={(lastName) => {
                            setLastName(lastName)
                            setIsLastNameEmpty(false)
                        }}
                        style={!isLastNameEmpty ? styles.input : styles.inputError} />
                    {
                        isLastNameEmpty ? (
                            <Text style={{
                                color: '#DC0D0D',
                                fontSize: 15,
                                fontWeight: '400',
                                fontFamily: "Gilroy-l",
                            }}>
                                Please enter your lastname
                            </Text>
                        ) : (
                            <View />
                        )
                    }
                </View>
                <View style={styles.avoidKeyboard} className="gap-3">
                    <Text style={styles.inputLabel}>Your email address</Text>
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
                                fontFamily: "Gilroy-l",
                            }}>
                                Please Enter a Valid Email
                            </Text>
                        ) : (
                            <View />
                        )
                    }
                </View>
                <View style={styles.avoidKeyboard} className="gap-3">
                    <Text style={styles.inputLabel}>New Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        onChangeText={(password) => {
                            setPassword(password)
                            setIsPasswordEmpty(false)
                        }}
                        style={!isPasswordEmpty ? styles.input : styles.inputError} />
                    {
                        isPasswordEmpty ? (
                            <Text style={{
                                color: '#DC0D0D',
                                fontSize: 15,
                                fontWeight: '400',
                                fontFamily: "Gilroy-l",
                            }}>
                                Please enter a password
                            </Text>
                        ) : (
                            <View />
                        )
                    }
                </View>
                <View style={styles.avoidKeyboard} className="gap-3">
                    <Text style={styles.inputLabel}>Confirm Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        onChangeText={(confirm) => {
                            setConfirmPassword(confirm);
                            password === confirm ? setIsPasswordEqual(true) : setIsPasswordEqual(false)
                        }}
                        style={isPasswordEqual ? styles.input : styles.inputError} />
                    {
                        !isPasswordEqual ? (
                            <Text style={{
                                color: '#DC0D0D',
                                fontSize: 15,
                                fontWeight: '400',
                                fontFamily: "Gilroy-l",
                            }}>
                                Password does not match
                            </Text>
                        ) : (
                            <View />
                        )
                    }
                </View>
                <View style={styles.avoidKeyboard}>
                    <TouchableOpacity
                        onPress={() => {
                            if (firstname !== '') {
                                if (lastname !== '') {
                                    if (isValidEmail && email !== '') {
                                        if (password !== '') {
                                            if (password === password_confirmation) {
                                                handleRegister()
                                            }
                                            else {
                                                setIsPasswordEqual(false)
                                            }
                                        }
                                        else {
                                            setIsPasswordEmpty(true)
                                        }
                                    }
                                    else {
                                        setIsvalidEmail(false)
                                    }
                                }
                                else {
                                    setIsLastNameEmpty(true)
                                }
                            }
                            else {
                                setIsFirstNameEmpty(true)
                            }
                        }}
                        style={styles.button}>
                        <Text style={styles.buttonText} className="text-[#FFFBFB]">{isLoading ? (<ActivityIndicator color='white' />) : 'Sign up'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{ width: width - 55 }, styles.avoidKeyboard]} className="justify-center flex-row gap-1">
                    <Text style={styles.inputLabel}>Already have an account ?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            openLoginModal();
                        }
                        }
                    >
                        <Text style={styles.inputLabel} className="text-[#0D91DC]">
                            Log in here
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={[{ width: width - 55 }, styles.avoidKeyboard]} className="flex-row items-center justify-center gap-5">
                    <View style={{ height: 1, width: 90 }} className="border-b-2 border-[#CED6DA]"></View>
                    <Text>Or</Text>
                    <View style={{ height: 1, width: 90 }} className="border-b-2 border-[#CED6DA]"></View>
                </View>
                <View style={styles.avoidKeyboard}>
                    <TouchableOpacity style={[styles.button2, styles.avoidKeyboard]}>
                        <Text style={styles.buttonText} className="text-[#27292A]">Sign up with<Text style={{ fontWeight: '600', fontSize: 16, fontFamily: 'Gilroy-B' }} > Google</Text></Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </AlertNotificationRoot>
    )
}

export default SignupForm