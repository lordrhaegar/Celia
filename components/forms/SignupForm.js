import { View, Text, TouchableOpacity, TextInput, Modal, KeyboardAvoidingView, Platform, ScrollView, useWindowDimensions } from 'react-native';
import { styles } from '../../styles/Styles';
import { AntDesign } from '@expo/vector-icons';
import {React, useState} from 'react';
import validator from 'validator';
import axios from 'axios';
import { useNavigation } from '@react-navigation/core';

const SignupForm = ({openLoginModal, regModalState, closeRegModal}) => {
    const width = useWindowDimensions().width;
    const [fullName, setfullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidEmail, setIsvalidEmail] = useState(true);
    const navigator = useNavigation();
    const checkValidEmail = (input) => {
        setIsvalidEmail(validator.isEmail(input));
    }
    
    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/register', {
                username,
                email,
                password
            });
            navigator.navigate('HomeScreen');
            console.log(response.data.message);
        } catch (error) {
            console.error('An error occurred', error);
        }
    };
  return (
    <KeyboardAvoidingView  behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
    <View style={styles.container}>
            <View style={styles.avoidKeyboard} className="w-full flex-row items-center">
                <TouchableOpacity 
                    onPress={closeRegModal}
                    style={{ gap: 5 }} className="flex-row items-center">
                    <AntDesign
                        name='left'
                        style={{ color: '#0D91DC', fontSize: 13 }}
                    />
                    <Text style={{ fontFamily: 'Gilroy-M', fontSize: 14, fontWeight: 600 }} className="text-[#0D91DC]">
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
                <Text style={styles.inputLabel}>Your full name</Text>
                <TextInput
                    onChangeText={(fullName)=>setfullName(fullName)}
                    style={styles.input} />
            </View>
            <View style={styles.avoidKeyboard} className="gap-3">
                <Text style={styles.inputLabel}>Your email address</Text>
                <TextInput
                onChangeText={(text)=>{
                    checkValidEmail(text);
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
                            <View/>
                        )
                    }
            </View>
            <View style={styles.avoidKeyboard} className="gap-3">
                <Text style={styles.inputLabel}>New Password</Text>
                <TextInput
                    style={styles.input} />
            </View>
            <View style={styles.avoidKeyboard}>
                <TouchableOpacity
                onPress={()=>{
                    closeRegModal();
                    navigator.navigate('App');
                }}
                style={styles.button}>
                    <Text style={styles.buttonText} className="text-[#FFFBFB]">Sign up</Text>
                </TouchableOpacity>
            </View>
            <View style={[{width: width - 55}, styles.avoidKeyboard]} className="justify-center flex-row gap-1">
                <Text style={styles.inputLabel}>Already have an account ?</Text> 
                <TouchableOpacity
                onPress={()=>{
                    openLoginModal();
                    setTimeout(() => {
                        closeRegModal();
                    }, 100);
                }
                }
                >
                    <Text style={styles.inputLabel} className="text-[#0D91DC]">
                    Log in here
                    </Text>
                </TouchableOpacity>
                
            </View>
            <View style={[{width: width - 55}, styles.avoidKeyboard]} className="flex-row items-center justify-center gap-5">
                <View style={{height:1, width: 90}} className="border-b-2 border-[#CED6DA]"></View>
                <Text>Or</Text>
                <View style={{height:1, width: 90}} className="border-b-2 border-[#CED6DA]"></View>
            </View>
            <View style={styles.avoidKeyboard}>
            <TouchableOpacity style={[styles.button2, styles.avoidKeyboard]}>
                    <Text style={styles.buttonText} className="text-[#27292A]">Sign up with<Text style={{fontWeight: '600', fontSize: 16, fontFamily: 'Gilroy-B'}} > Google</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
        </KeyboardAvoidingView>
  )
}

export default SignupForm