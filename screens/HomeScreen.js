import { View, Text, ScrollView, useWindowDimensions, TouchableOpacity, Image, Platform, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/Styles'
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import { apiBaseUrl, backgroundColors, checkUserType, convertTimestampToDate, doctorImage, logout, noAppointmentImage, percentageComplete, sthetoscope } from '../constants/constants'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { CommonActions } from '@react-navigation/native'
import { MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'
import CustomModal from '../components/modals/Modal'
import ScheduleAvailability from '../components/modal body/ScheduleAvailability'
import DocHeader2 from '../components/includes/DocHeader2'
import { doctorsStyles } from '../styles/doctorsStyles'
import axios from 'axios'
import SingleProgressBar from '../components/single progress bar/SingleProgressBar'
import Progressbars from '../components/Progressbars'
import Checkbox from 'expo-checkbox'
const HomeScreen = ({ route }) => {
    const { userType, userDetails, userToken } = useSelector((state) => state.auth)
    const {firstname, lastname, mobile, gender, profile_img, availability, date_of_birth} = userDetails
    const profileImage = [profile_img]
    const personalInformation = [`${firstname} ${lastname}`, mobile, gender]
    const personalUserInformation = [`${firstname} ${lastname}`, gender, date_of_birth]
    const availabilityInformation = availability
    const navigator = useNavigation();
    const { height, width } = Dimensions.get('window')
    const [isAlertArrowUp, setIsAlertArrowUp] = useState(true);
    const [isDiagnosisArrowUp, setIsDiagnosisAlertArrowUp] = useState(true)
    const [listing, setListing] = useState([])
    const [alerts, setAlerts] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const {patientSelectedBackground, doctorSelectedBackground} = backgroundColors
    useEffect(() => {
        console.log("personal====>", profile_img);
    }, [listing])
    const diagnosisHistory = [
        {
            optionOne: "Today",
            optionTwo: "Headache"
        },
    ]
    const patients = [
        {
            optionOne: "Headache",
            optionTwo: "Natasha Ebuka"
        },
        {
            optionOne: "Headache",
            optionTwo: "Rita Ada"
        },
        {
            optionOne: "Headache",
            optionTwo: "Nnaji Oluchukwu"
        },
    ]
    const docAlerts = checkUserType(userType)?[]: [
        {
            title: "Set up your availability",
            progressbar: <SingleProgressBar percentage={percentageComplete(availability)} height={4}/>,
            checkIcon:
            <Checkbox
                value={percentageComplete(availability) === 100}
                style={{ borderRadius: 20 }}
                color={checkUserType(userType)?patientSelectedBackground:doctorSelectedBackground}
            />,
            fn: () => openModal()
        },
        {
            title: "Personal Information",
            progressbar: <SingleProgressBar percentage={percentageComplete(personalInformation)} height={4}/>,
            checkIcon:
            <Checkbox
                value={percentageComplete(personalInformation) === 100}
                style={{ borderRadius: 20 }}
                color={checkUserType(userType)?patientSelectedBackground:doctorSelectedBackground}
            />,
            fn: () => {}
        }
    ]
    const patientAlerts = checkUserType(userType)? [
        {
            title: "Personal Information",
            progressbar: <SingleProgressBar percentage={percentageComplete(personalUserInformation)} height={4}/>,
            checkIcon:
            <Checkbox
                value={percentageComplete(personalUserInformation) === 100}
                style={{ borderRadius: 20 }}
                color={checkUserType(userType)?patientSelectedBackground:doctorSelectedBackground}
            />,
            fn: () => { navigator.navigate("PatientSettings")}
        }
    ] : []
    const openModal = ()=>{
        setIsModalVisible(true)
    }
    const closeModal = ()=>{
        setIsModalVisible(false)
    }
    const toggleAlertArrow = () => {
        setIsAlertArrowUp(!isAlertArrowUp);
    }
    const toggleDiagnosisArrow = () => {
        setIsDiagnosisAlertArrowUp(!isDiagnosisArrowUp)
    }
    useEffect(() => {
        (async()=>{
                try {
                   const userDiagnosisHistory = await axios.get(`${apiBaseUrl}/${checkUserType(userType)?"user":"doctor"}/diagnosis-history`, {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                   })
                   if (userDiagnosisHistory.status === 200 || userDiagnosisHistory.status === 201) {
                       setListing(userDiagnosisHistory.data.data)
                       setAlerts(checkUserType(userType)?patientAlerts:docAlerts)
                   }
                } catch (error) {
                    console.log(error.response);
                }
        })()
       
    }, [])
    return (
        <SafeAreaView
            style={{ height: height, backgroundColor: "white", paddingBottom: 15 }}
        >
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.scrollView]}>
                <DocHeader2
                navigator={navigator}
                />
                {
                    userType === 'Patient' ? (
                        <View
                            style={{
                                display: 'flex',
                                width: width,
                                paddingVertical: 24,
                                paddingHorizontal: 20,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 20,
                                backgroundColor: '#E5F6F6'
                            }}>
                            <View className="w-full">
                                <Text style={{ fontFamily: 'Gilroy-M', fontSize: 20, fontStyle: 'normal', fontWeight: '600', color: '#0D91DC' }}>I am Celia</Text>
                            </View>
                            <View>
                                <Text style={{
                                    color: '#000',
                                    fontFamily: 'Gilroy-M',
                                    fontSize: 16,
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    letterSpacing: 1
                                }}>
                                    I’m here to help you learn more about your health. How are you feeling today?
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigator.navigate('NewDiagnosis')
                                    }
                                    }
                                    style={styles.button}>
                                    <Text style={styles.buttonText} className="text-[#FFFBFB]">Start Diagnosis</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : (
                        <View
                            style={{
                                display: 'flex',
                                width: width,
                                paddingVertical: 24,
                                paddingHorizontal: 20,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 20,
                                backgroundColor: '#E5F6F6'
                            }}>
                            <View className="w-full">
                                <Text style={{ fontFamily: 'Gilroy-M', fontSize: 20, fontStyle: 'normal', fontWeight: '600', color: '#63A7A7' }}>I am Celia</Text>
                            </View>
                            <View className="w-full">
                                <Text style={{
                                    color: '#000',
                                    fontFamily: 'Gilroy-M',
                                    fontSize: 16,
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    letterSpacing: 1
                                }}>
                                    I’m glad you are here as my human partner to help me help people. Let’s do great things together today.
                                </Text>
                            </View>
                        </View>
                    )
                }

                <View style={{
                    padding: 20,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: 12,
                }}>
                    <View className="w-full">
                        <Text style={styles.inputLabel}>Search our medical library</Text>
                    </View>
                    <View className="flex-row items-center">
                        <TextInput
                            placeholder='Search'
                            style={[styles.input, { width: '100%', borderColor: '#A5ADB1', paddingLeft: 50 }]}
                        />
                        <View
                            style={{ position: 'absolute', left: "5%" }}
                        >
                            <AntDesign
                                name='search1'
                                color='#0A74B0'
                                size={20}
                            />
                        </View>

                    </View>
                </View>
                <View
                    style={{
                        padding: 20,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: 20,
                    }}>
                    <View
                        style={styles.dropDownCard}>
                        <View style={styles.dropDownHeader}>
                            <Text style={styles.alertDropDownHeading}>Alert</Text>
                            <Entypo
                                onPress={toggleAlertArrow}
                                name={isAlertArrowUp ? 'chevron-up' : 'chevron-down'}
                                color={'#A5ADB1'}
                                size={20}
                            />
                        </View>
                        {
                            isAlertArrowUp ? (
                                <MotiView
                                from={{scaleY: 0}}
                                animate={{scaleY: 1}}
                                exit={{scaleY: 0}}
                                transition={{
                                    type: 'spring',
                                    duration: 2000,
                                    ease: Easing.bounce
                                }}
                                style={{width: "100%"}}
                                >
                                    {
                                        alerts.map((alrt,idx)=>{
                                            return (
                                                <TouchableOpacity 
                                                onPress={alrt.fn}
                                                activeOpacity={1}
                                                key={idx} style={styles.alertDropDownItems}>
                                        <MaterialIcons
                                            name='notifications'
                                            size={16}
                                            color={checkUserType(userType)?patientSelectedBackground:doctorSelectedBackground}
                                        />
                                        <View >
                                            <Text
                                                style={styles.alertDropDownItemsText}
                                            >{alrt.title}</Text>
                                            <View style={{height: 30}}>{alrt.progressbar}</View>
                                        </View>
                                        <View>{alrt.checkIcon}</View>
                                    </TouchableOpacity>
                                            )
                                        })
                                    }
                                </MotiView>
                            ) : (<View />)
                        }
                        <MotiView
                                from={{scaleY: 0}}
                                animate={{scaleY: 1}}
                                exit={{scaleY: 0}}
                                transition={{
                                    type: 'spring',
                                    duration: 2000,
                                    ease: Easing.bounce
                                }} >
                                    <TouchableOpacity 
                                    activeOpacity={1}
                                    onPress={()=>navigator.navigate("Notifications", {data: {personalInformation, profileImage}})}
                                    style={doctorsStyles.careWorkersItemContainer}>
                                        <Text style={doctorsStyles.careWorkersItemText}>View all notifications</Text>
                                        <AntDesign
                                            name='arrowright'
                                            size={20}
                                            color='#666B6E'
                                        />
                                    </TouchableOpacity>
                        </MotiView>

                    </View>
                    <View
                        style={styles.dropDownCard}>
                        <View style={styles.dropDownHeader}>
                            <Text style={styles.diagnosisDropDownHeading}>{userType === 'Doctor' ? 'Patients Diagnosis history' : 'Diagnosis history'}</Text>
                            <Entypo
                                onPress={toggleDiagnosisArrow}
                                name={isDiagnosisArrowUp ? 'chevron-up' : 'chevron-down'}
                                color='#A5ADB1'
                                size={20}
                            />
                        </View>
                        {
                            isDiagnosisArrowUp ?
                                listing.map((list, index) => {
                                    const {diagnosis, prescription, doctor = list.patient, date} = list;
                                    return (
                                        <MotiView
                                from={{scaleY: 0}}
                                animate={{scaleY: 1}}
                                exit={{scaleY: 0}}
                                transition={{
                                    type: 'spring',
                                    duration: 2000,
                                    ease: Easing.bounce
                                }}
                                            key={index}
                                            style={styles.diagnosisDropDownItems}>
                                                <TouchableOpacity 
                                                className="w-full" 
                                                style={styles.diagnosisDropDownItems}
                                                onPress={()=>navigator.navigate("DiagnosisHistory", {diagnosis: diagnosis, prescription: prescription, doc: doctor })}
                                                >

                                                    <View style={doctorsStyles.imageContainer}>
                                                                        <Image
                                                                            source={noAppointmentImage}
                                                                            style={{ flex: 1 }}
                                                                        />
                                                                    </View>
                                                                    <View>
                                                                    <Text style={styles.diagnosisDropDownItemsText2}>{doctor.firstname} {doctor.lastname}</Text>
                                                                    <Text style={styles.diagnosisDropDownItemsText2}>{convertTimestampToDate(date)}</Text>
                                                                    </View>
                                                    
                                                    <AntDesign
                                                        name='arrowright'
                                                        size={20}
                                                        color='#666B6E'
                                                    />
                                                </TouchableOpacity>
                                        </MotiView>
                                    )
                                }) : (<View />)
                        }
                        <MotiView
                                from={{scaleY: 0}}
                                animate={{scaleY: 1}}
                                exit={{scaleY: 0}}
                                transition={{
                                    type: 'spring',
                                    duration: 2000,
                                    ease: Easing.bounce
                                }} style={doctorsStyles.careWorkersItemContainer}>
                            <Text style={doctorsStyles.careWorkersItemText}>View all diagnosis history</Text>
                            <AntDesign
                                name='arrowright'
                                size={20}
                                color='#666B6E'
                                // onPress={()=>navigation.navigate("AppointmentHistory",{appointments: userAppointments})}
                            />
                        </MotiView>
                    </View>
                    <View style={styles.blogSection}>
                        <View style={styles.blogCard}>
                            <Image
                                resizeMode='contain'
                                style={styles.blogImage}
                                source={sthetoscope} />
                            <View>
                                <Text style={styles.blogText}>Health Articles & News</Text>
                            </View>
                        </View>
                        <View style={styles.blogCard}>
                            <Image
                                resizeMode='contain'
                                style={styles.blogImage}
                                source={sthetoscope} />
                            <View>
                                <Text style={styles.blogText}>Health Articles & News</Text>
                            </View>
                        </View>
                    </View>

                </View>
                <CustomModal
                closeModal={closeModal} 
                visibility={isModalVisible} 
                animationType="fade" 
                component={<ScheduleAvailability
                navigation={navigator}
                />}
                />
            </ScrollView>
        </SafeAreaView >
    )
}

export default HomeScreen