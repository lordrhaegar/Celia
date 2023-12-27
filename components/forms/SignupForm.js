import { View, Text, TouchableOpacity, TextInput, Modal, KeyboardAvoidingView, Platform, ScrollView, useWindowDimensions, ActivityIndicator } from 'react-native';
import { styles } from '../../styles/Styles';
import { AntDesign } from '@expo/vector-icons';
import { React, useEffect, useState } from 'react';
import validator from 'validator';
import axios from 'axios';
import { useNavigation } from '@react-navigation/core';
import { ALERT_TYPE, Dialog, AlertNotificationRoot } from 'react-native-alert-notification';
import { useSelector } from 'react-redux';
import Button from '../buttons/Button';
import FormHeader from '../includes/FormHeader';
import FormHeaderTitle from '../includes/FormHeaderTitle';
import { docStyles } from '../../styles/doctorRequirementScreenStyles';
import { Image } from 'react-native';
import { apiBaseUrl, imageUpload, setUserToStorage, uploadDocument } from '../../constants/constants';
import DropDownPicker from 'react-native-dropdown-picker';
import * as DocumentPicker from "expo-document-picker"
import * as ImagePicker from "expo-image-picker"

const SignupForm = ({ openLoginModal, closeRegModal, setAuthStatus }) => {
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
    const [isUploading, setIsUploading] = useState(false);
    const [stepOne, setStepOne] = useState(true)
    const [stepTwo, setStepTwo] = useState(false)
    const { userType } = useSelector((state) => state.auth)
    const [open, setOpen] = useState(false);
    const [gender, setGender] = useState("Select a Gender");
    const [genderOptions, setGenderOptions] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' }
    ]);
    const [license, setLicense] = useState("")
    const [id_card, setIDCard] = useState("")
    const [image, setImage] = useState(null)
    useEffect(() => {
        console.log("license=>", license);
        console.log("id_card=>", id_card);
    }, [license, id_card])
    const navigator = useNavigation();
    const checkValidEmail = (input) => {
        setIsvalidEmail(validator.isEmail(input));
    }
    const goToStepOne = ()=>{
        setStepOne(prev=>!prev)
        setStepTwo(prev=>!prev)
    }
    const goToStepTwo =()=>{
        setStepOne(false);
            setStepTwo(true);
    }
    const pickDocument = async (setField) => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status === 'granted') {
            try {
                const imageUploadResult = await DocumentPicker.getDocumentAsync({
                    type: 'image/*',
                    multiple: false,
                    copyToCacheDirectory: true
                })
                if (!imageUploadResult.canceled) {
                    console.log(imageUploadResult);
                    const formData = new FormData()
                    formData.append('img', {
                        uri: imageUploadResult.assets[0].uri,
                        name: imageUploadResult.assets[0].name,
                        type: imageUploadResult.assets[0].mimeType
                    })
                    setIsUploading(true)
                    try {
                        const uploadImage = await axios.post(`${apiBaseUrl}/upload`, formData, {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        })
                        if (uploadImage.status === 200 || uploadImage.status === 201) {
                            setField(uploadImage.data.downloadURL)
                        }

                    } catch (error) {
                        console.log(error);
                    }finally{
                        setIsUploading(false)
                    }
                } else if (imageUploadResult.canceled) {
                    console.log("Canceled");
                }
            } catch (error) {
                console.error(error)
            }
        } else {
            alert("Needs Media access permission")
        }

    }

    const handleRegister = async () => {
        try {
            setIsLoading(true)
            const response = await axios.post(`https://celiabackendtestapis.onrender.com/${userType === 'Patient' ? 'auth/register' : 'doctor/register'}`, userType === 'Patient' ? {
                firstname,
                lastname,
                email,
                password,
                password_confirmation
            } : {
                firstname,
                lastname,
                email,
                gender,
                password,
                password_confirmation,
                license,
                id_card
            })
            if (response.status === 200) {
                setUserToStorage(response.data,dispatch)
                setAuthStatus(response.data.message, "success")
                setTimeout(() => {
                    closeRegModal()
                    navigator.replace('App')
                }, 1000);
            }
        }
        catch (error) {
            setAuthStatus(error.response.data.error, "error")
        } finally {
            setIsLoading(false)

        }
    };
    const runValidation = () => {

            if (firstname !== '') {
                if (lastname !== '') {
                    if (isValidEmail && email !== '') {
                        if (password !== '') {
                            if (password === password_confirmation) {
                                userType === "Patient" ? handleRegister() : goToStepTwo()
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
            
        
    }
    return (
        <AlertNotificationRoot>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.container}>
                {
                    userType === "Patient" || (userType === "Doctor" && stepOne) ?
                        (<View>
                            <FormHeader title={"Back"} closeModal={closeRegModal} />
                            <FormHeaderTitle title="Tell me a little bit about you?" />
                            <View style={styles.avoidKeyboard} className="gap-3">
                                <Text style={styles.inputLabel}>Your first name</Text>
                                <TextInput
                                value={firstname}
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
                                value={lastname}
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
                                value={email}
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
                                value={password}
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
                                value={password_confirmation}
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
                                    onPress={runValidation}
                                    style={[styles.button, { backgroundColor: userType === 'Doctor' ? '#7CD1D1' : "#0D91DC" }]}>
                                    <Text style={styles.buttonText} className="text-[#FFFBFB]">{userType === 'Doctor' ? isLoading ? (<ActivityIndicator color='white' />) : 'Next' : isLoading ? (<ActivityIndicator color='white' />) : 'Sign up'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>) :
                        userType === 'Doctor' && stepTwo ?
                            (<View className="w-full items-center">
                                <FormHeader title={"Previous"} closeModal={goToStepOne} />
                                <FormHeaderTitle title="Verification" />
                                <View>
                                    <Text style={docStyles.appreciationTextP}>
                                        Please submit the documents listed below to confirm your status as a licensed medical professional.
                                    </Text>
                                </View>
                                {/* <View className="gap-2 mb-5">
                                    <Text style={styles.inputLabel}>Medical license (MDCN certified)</Text>
                                    <View style={docStyles.uploadDocumentBox}>
                                    <Image source={uploadDocument}
                                    // style={{flex: 1}}
                                    width={300}
                                    resizeMode='cover'
                                    />
                                    </View>
                                </View> */}
                                 <DropDownPicker
                                    open={open}
                                    value={gender}
                                    items={genderOptions}
                                    setOpen={setOpen}
                                    setValue={setGender}
                                    setItems={setGenderOptions}
                                    props={{activeOpacity: 1}}
                                    style={{borderRadius: 25, borderColor: "#A5ADB1"}}
                                    textStyle={styles.dropDownText}
                                    dropDownContainerStyle={{borderRadius: 25, borderColor: "#A5ADB1"}}
                                />
                                <View className={`gap-2 mb-5 ${open ? "mt-20" : "mt-3"}`}>
                                    <Text style={styles.inputLabel}>Drivers License</Text>
                                    <TouchableOpacity onPress={() => pickDocument(setLicense)} style={[docStyles.uploadDocumentBox]}>
                                        {
                                            license !== "" ? (
                                                <AntDesign
                                                    name='checkcircle'
                                                    color="#7CD1D1"
                                                    size={50}
                                                />) : (
                                                <Image source={uploadDocument}
                                                    resizeMode='cover'
                                                />
                                            )
                                        }
                                    </TouchableOpacity>
                                </View>
                                {
                                    isUploading ? (<ActivityIndicator
                                        color="#7CD1D1" 
                                        size={50}/>) : (<></>)
                                }
                                <View className="gap-2 mb-5">
                                    <Text style={styles.inputLabel}>National ID Card</Text>
                                    <TouchableOpacity onPress={() => pickDocument(setIDCard)} style={docStyles.uploadDocumentBox}>
                                        {
                                            id_card !== "" ? (
                                                <AntDesign
                                                    name='checkcircle'
                                                    color="#7CD1D1"
                                                    size={50}
                                                />) : (
                                                <Image source={uploadDocument}
                                                    resizeMode='cover'
                                                />
                                            )
                                        }
                                    </TouchableOpacity>
                                </View>
                                <View className="w-full" style={[styles.avoidKeyboard]}>
                                    <Button
                                        onPress={handleRegister}
                                        textColor="#FFFBFB"
                                        buttonStyle={[styles.button, { width: "100%" }]}
                                        title="Sign up"
                                        backgroundColor='#7CD1D1'
                                    />
                                </View>
                            </View>) :
                            (<View />)
                }
                <View style={[{ width: width - 55 }, styles.avoidKeyboard]} className="justify-center flex-row gap-1">
                    <Text style={styles.inputLabel}>Already have an account ?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            openLoginModal();
                        }
                        }
                    >
                        <Text style={[styles.inputLabel, { color: userType === 'Doctor' ? '#7CD1D1' : "#0D91DC" }]}>
                            Log in here
                        </Text>
                    </TouchableOpacity>

                </View>
                {/* <View style={[{ width: width - 55 }, styles.avoidKeyboard]} className="flex-row items-center justify-center gap-5">
                    <View style={{ height: 1, width: 90 }} className="border-b-2 border-[#CED6DA]"></View>
                    <Text>Or</Text>
                    <View style={{ height: 1, width: 90 }} className="border-b-2 border-[#CED6DA]"></View>
                </View>
                <View className="w-full" style={styles.avoidKeyboard}>
                    <Button
                        textColor="#27292A"
                        buttonStyle={[styles.button2, { width: "100%" }]}
                        title="Sign up with"
                        secondText="Google"
                        textStyle={styles.buttonText}
                        backgroundColor='white'
                        viewStyle={{ width: "100%" }}
                    />
                </View> */}
            </ScrollView>
        </AlertNotificationRoot>
    )
}

export default SignupForm