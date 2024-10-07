import { View, Text, TouchableOpacity, TextInput, useWindowDimensions, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { styles } from '../../styles/Styles';
import { AntDesign } from '@expo/vector-icons';
import { React, useEffect, useState } from 'react';
import { Modal } from 'react-native';
import ForgotPassword from './ForgotPassword';
import InputCode from './InputCode';
import validator from 'validator';
import axios from 'axios';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ALERT_TYPE, AlertNotificationRoot, Dialog } from 'react-native-alert-notification';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import CreateNewPassword from './CreateNewPassword';
import { setUserDetails, setUserToken } from '../../features/authSlice';
import { apiBaseUrl, capitalize, setDocToStorage, setUserToStorage } from '../../constants/constants';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { SafeAreaView } from 'react-native-safe-area-context';

const SigninForm = ({ openRegModal, closeLoginModal, setAuthStatus }) => {
    const width = useWindowDimensions().width;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [isForgotModalVisible, setForgotModalVisible] = useState(false);
    const [isCodeModalVisible, setCodeModalVisible] = useState(false);
    const [isCreatePassVisible, setCreatePassModalVisible] = useState(false);
    const [isValidEmail, setIsvalidEmail] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const { userType } = useSelector((state) => state.auth)
    const [otpEmail, setOtpEmail] = useState("")
    const dispatch = useDispatch()
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
    const openCreatePass = () => {
        setCreatePassModalVisible(true)
    }
    const closeCreatePass = () => {
        setCreatePassModalVisible(false)
    }
    const getOtpEmail = (email)=> {
        return email
    }
    const toastConfig = {
        /*
          Overwrite 'success' type,
          by modifying the existing `BaseToast` component
        */
        success: (props) => (
          <BaseToast
            {...props}
            style={{backgroundColor: "#198754" }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
              fontSize: 15,
              fontWeight: '400',
              fontFamily: "Gilroy-M",
              color: "white"
            }}
          />
        ),
        /*
          Overwrite 'error' type,
          by modifying the existing `ErrorToast` component
        */
        error: (props) => (
          <ErrorToast
            {...props}
            style={{backgroundColor: "#DC0D0D", flexWrap: 'wrap' }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
              fontSize: 17,
              color: "white"
            }}
            text2Style={{
              fontSize: 15
            }}
          />
        ),
          }
    const handleLogin = async () => {
            try {
                setIsLoading(true)
                const response = await axios.post(`${apiBaseUrl}/${userType === 'Patient' ? 'user/login':'doctor/login'}`, {
                    email,
                    password
                })
                if (response.status === 200) {
                    if (userType === "Patient") {
                        setUserToStorage(response.data,dispatch)
                    }else{
                        setDocToStorage(response.data, dispatch)
                    }
                    setAuthStatus(capitalize(response.data.message), "success")
                    setTimeout(() => {
                        closeLoginModal()
                        navigator.dispatch(CommonActions.reset({
                            index: 0,
                            routes: [{name: "App"}]
                        }))
                    }, 1000);
                }
            }
            catch (error) {
                setAuthStatus(capitalize(error.response.data.message), "error")
            } finally {
                setIsLoading(false)

            }
    };
    return (
        <SafeAreaView>
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
                        <Text style={{ fontFamily: 'Gilroy-M', fontSize: 14, fontWeight: '600', color: userType === 'Doctor' ? '#7CD1D1' : "#0D91DC" }}>
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
                            visible={isForgotModalVisible ? isForgotModalVisible : isCodeModalVisible ? isCodeModalVisible : isCreatePassVisible ? isCreatePassVisible : false}
                            animationType='slide'
                            transparent={true}
                        >
                            <View style={styles.modalBackground}>
                                <Toast config={toastConfig}/>
                                <View style={styles.modalContainer}>
                                    {
                                        isForgotModalVisible ? (
                                            <ForgotPassword 
                                            isForgotModalVisible={isForgotModalVisible} 
                                            openCodeModal={openCodeModal} 
                                            closeForgotModal={closeForgotModal}
                                            setOtpEmail={setOtpEmail}
                                            />
                                        ) : isCodeModalVisible ? (
                                            <InputCode 
                                            closeCodeModal={closeCodeModal} 
                                            openCreatePassModal={openCreatePass} 
                                            otpEmail={otpEmail}
                                            />
                                        ) : isCreatePassVisible ? (
                                            <CreateNewPassword 
                                            title={'Create new password'} 
                                            closeModal={closeCreatePass} />
                                        ) :
                                            (<View />)
                                    }
                                </View>

                            </View>
                        </Modal>
                    </View>
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
                </View>
                <View style={styles.avoidKeyboard} className="w-full">
                    <TouchableOpacity
                        disabled={isLoading}
                        onPress={handleLogin}
                        style={[styles.button, { backgroundColor: userType === 'Doctor' ? isLoading ? '#66B6FF' : '#7CD1D1' : isLoading ? '#66B6FF' : '#0D91DC' }]}
                    >
                        {
                            isLoading ? (<ActivityIndicator color='white' />) : (
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
                        <Text style={[styles.inputLabel, { color: userType === 'Doctor' ? '#7CD1D1' : "#0D91DC" }]}>
                            Sign up here
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={[{ width: width - 55 }, styles.avoidKeyboard]} className="flex-row items-center justify-center gap-5">
                    <View style={{ height: 1, width: 90 }} className="border-b-2 border-[#CED6DA]"></View>
                    <Text>Or</Text>
                    <View style={{ height: 1, width: 90 }} className="border-b-2 border-[#CED6DA]"></View>
                </View>
                <View style={styles.avoidKeyboard} className="w-full">
                    <TouchableOpacity style={styles.button2}>
                        <Text style={[styles.buttonText, { color: "#27292A" }]}>Login with<Text style={{ fontWeight: '600', fontSize: 16, fontFamily: 'Gilroy-B' }} > Google</Text></Text>
                    </TouchableOpacity>
                </View> */}
            </ScrollView>
        </AlertNotificationRoot>
        </SafeAreaView>
    )
}

export default SigninForm