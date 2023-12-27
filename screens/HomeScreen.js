import { View, Text, ScrollView, useWindowDimensions, TouchableOpacity, Image, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/Styles'
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import { logout, sthetoscope } from '../constants/constants'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { CommonActions } from '@react-navigation/native'
const HomeScreen = ({ route }) => {
    const { userType } = useSelector((state) => state.auth)
    const navigator = useNavigation();
    const height = useWindowDimensions().height;
    const width = useWindowDimensions().width;
    const [isAlertArrowUp, setIsAlertArrowUp] = useState(true);
    const [isDiagnosisArrowUp, setIsDiagnosisAlertArrowUp] = useState(true)
    const [listing, setListing] = useState([])
    const {userDetails} = useSelector((state)=>state.auth)
    const diagnosisHistory = [
        {
            optionOne: "Today",
            optionTwo: "Headache"
        },
        {
            optionOne: "Today",
            optionTwo: "Headache"
        },
        {
            optionOne: "Today",
            optionTwo: "Headache"
        },
        {
            optionOne: "Today",
            optionTwo: "Headache"
        },
        {
            optionOne: "Today",
            optionTwo: "Headache"
        },
        {
            optionOne: "Today",
            optionTwo: "Headache"
        },
        {
            optionOne: "Today",
            optionTwo: "Headache"
        },
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
    const toggleAlertArrow = () => {
        setIsAlertArrowUp(!isAlertArrowUp);
    }
    const toggleDiagnosisArrow = () => {
        setIsDiagnosisAlertArrowUp(!isDiagnosisArrowUp)
    }
    useEffect(()=>{
        console.log(userType);
        if (userType === 'Doctor') {
            setListing(patients)
        }else{
            setListing(diagnosisHistory)
        }
    },[])
    return (
        <SafeAreaView
        style={{height: height}}
        >
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.scrollView ]}>
                <View style={{ height: "5%" }} className="flex-row px-5 items-center justify-between">
                    <Text style={styles.title} className="text-black font-medium">{`Hi ${userType === 'Doctor' ? 'Doc' : `there ${userDetails.firstname}`} `}</Text>
                    <MaterialIcons
                    onPress={()=>{
                        logout(navigator, CommonActions)}
                    }
                        name='notifications'
                        size={24}
                        color="#0A74B0"
                    />
                </View>
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
                                }}>
                                    I’m here to help you learn more about your health. How are you feeling today?
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigator.navigate('AiHomeScreen')
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
                            <View>
                                <Text style={{
                                    color: '#000',
                                    fontFamily: 'Gilroy-M',
                                    fontSize: 16,
                                    fontStyle: 'normal',
                                    fontWeight: '400',
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
                            style={{position: 'absolute', left: "5%"}}
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
                                color='#A5ADB1'
                                size={20}
                            />
                        </View>
                        {
                            isAlertArrowUp ? (
                                <View style={styles.alertDropDownItems}>
                                    <MaterialIcons
                                        name='notifications'
                                        size={16}
                                        color="#0A74B0"
                                    />
                                    <Text
                                        style={styles.alertDropDownItemsText}
                                    >Take your malaria medicine.</Text>
                                </View>
                            ) : (<View />)
                        }
                        {
                            isAlertArrowUp ? (
                                <View style={styles.alertDropDownItems}>
                                    <MaterialIcons
                                        name='notifications'
                                        size={16}
                                        color="#0A74B0"
                                    />
                                    <Text
                                        style={styles.alertDropDownItemsText}
                                    >Take your malaria medicine.</Text>
                                </View>
                            ) : (<View />)
                        }
                    </View>
                    <View
                        style={styles.dropDownCard}>
                        <View style={styles.dropDownHeader}>
                            <Text style={styles.diagnosisDropDownHeading}>{userType === 'Doctor' ? 'Patients' : 'Diagnosis history'}</Text>
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
                                    return (
                                        <View
                                            key={index}
                                            style={styles.diagnosisDropDownItems}>
                                            <Text
                                                style={styles.diagnosisDropDownItemsText1}
                                            >{list.optionOne}</Text>
                                            <Text
                                                style={styles.diagnosisDropDownItemsText2}
                                            >{list.optionTwo}</Text>
                                            <AntDesign
                                                name='arrowright'
                                                size={20}
                                                color='#666B6E'
                                            />
                                        </View>
                                    )
                                }) : (<View />)
                        }
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
            </ScrollView>
        </SafeAreaView >
    )
}

export default HomeScreen