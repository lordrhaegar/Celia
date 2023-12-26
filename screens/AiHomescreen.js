import { View, Text, ScrollView, useWindowDimensions, TouchableOpacity, Image, Platform, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/Styles'
import { AntDesign, Entypo, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import { heartFailureQuestions, logout, sthetoscope } from '../constants/constants'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import celiaStyle from '../styles/celiaAiStyle'
import { MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'
import { MotiPressable } from 'moti/interactions'
import Toast from 'react-native-toast-message'


const AiHomescreen = ({ route, navigation }) => {
    const { userType } = useSelector((state) => state.auth)
    const naviagtor = useNavigation();
    const { height, width } = Dimensions.get('screen');
    const [isAlertArrowUp, setIsAlertArrowUp] = useState(true);
    const [isDiagnosisArrowUp, setIsDiagnosisAlertArrowUp] = useState(true)
    const [listing, setListing] = useState([
        {
            optionOne: "Heart Failure",
            icon: "heart-minus" //from MaterialCommunityIcons
        },
        {
            optionOne: "Stroke",
            icon: "brain" // from FontAwesome5
        },
        {
            optionOne: "Diabetes",
            icon: 'ribbon' // from FontAwesome5
        }
    ])
    const { userDetails } = useSelector((state) => state.auth)
    const toggleAlertArrow = () => {
        setIsAlertArrowUp(!isAlertArrowUp);
    }
    const toggleDiagnosisArrow = () => {
        setIsDiagnosisAlertArrowUp(!isDiagnosisArrowUp)
    }
    return (
        <SafeAreaView
            style={[styles.scrollView, { height: height, backgroundColor: "white" }]}
        >

            <View style={{ height: "5%" }} className="flex-row px-5 items-center justify-between">
                <Text style={styles.title} className="text-black font-medium">Celia Ai</Text>
                <MaterialIcons
                    name='notifications'
                    size={24}
                    color="#0A74B0"
                />
            </View>


            <View style={{
                padding: 20,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: 12,
            }}>
                <View className="w-full">
                    <Text style={styles.inputLabel}>Search our current database</Text>
                </View>
                <View className="flex-row items-center">
                    <TextInput
                        placeholder='Search'
                        style={[styles.input, { width: '100%', borderColor: '#A5ADB1', paddingLeft: 50 }]}
                    />
                    <View
                        style={{
                            marginLeft: Platform.OS === 'ios' ? -370 : -350
                        }}
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
                    display: 'flex',
                    width: width,
                    paddingVertical: 24,
                    paddingHorizontal: 20,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 20,
                }}>
                <View>
                    <Text style={{
                        color: '#000',
                        fontFamily: 'Gilroy-M',
                        fontSize: 16,
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 24
                    }}>
                        Currently, this is the available health issues that the Celia AI can test for. Creating these models takes time but stay tuned, it’ll soon be updated to a larger volume.
                    </Text>
                    <Text style={{
                        color: '#000',
                        fontFamily: 'Gilroy-M',
                        fontSize: 16,
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 24
                    }}>
                        Click on any of the available options below to get started.
                    </Text>
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
                >
                    <View style={styles.dropDownHeader}>
                        <Text style={styles.diagnosisDropDownHeading}>Currently available Ai</Text>
                    </View>
                    <View className="w-full flex-row flex-wrap justify-between items-center">
                        {
                            isDiagnosisArrowUp ?
                                listing.map((list, index) => {
                                    return (
                                        <>
                                            <MotiPressable
                                                from={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                onPress={() => {
                                                    switch (index) {
                                                        case 0:
                                                            navigation.navigate("HeartQuestionScreen")
                                                            break;
                                                        case 1:
                                                            navigation.navigate("Stroke")
                                                            break;
                                                        case 2:
                                                            navigation.navigate("Diabetes")
                                                            break;
                                                        default:
                                                            break;
                                                    }
                                                }

                                                }
                                                containerStyle={celiaStyle.aiDropDownModels}>
                                                <Text
                                                    style={styles.diagnosisDropDownItemsText1}
                                                >{list.optionOne}</Text>
                                                {
                                                    index === 0 ? (
                                                        <MotiView
                                                            from={{
                                                                scale: 1
                                                            }}
                                                            animate={{
                                                                scale: 1.1
                                                            }}
                                                            transition={{
                                                                type: 'spring',
                                                                loop: true,
                                                                duration: 3000,
                                                                easing: Easing.linear
                                                            }}
                                                        >

                                                            <MaterialCommunityIcons
                                                                name={list.icon}
                                                                size={40}
                                                                color='red'
                                                            />
                                                        </MotiView>

                                                    ) : index === 1 ? (
                                                        <MotiView
                                                            from={{
                                                                rotateY: '0deg'
                                                            }}
                                                            animate={{
                                                                rotateY: '180deg'
                                                            }}
                                                            transition={{
                                                                type: 'spring',
                                                                loop: true,
                                                                duration: 2000,
                                                                easing: Easing.bounce
                                                            }}
                                                        >
                                                            <FontAwesome5
                                                                name={list.icon}
                                                                size={40}
                                                                color='blue'
                                                            />
                                                        </MotiView>
                                                    ) : (
                                                        <MotiView
                                                            from={{
                                                                translateY: 2
                                                            }}
                                                            animate={{
                                                                translateY: -2
                                                            }}
                                                            transition={{
                                                                type: 'spring',
                                                                loop: true,
                                                                duration: 2000,
                                                                easing: Easing.bounce
                                                            }}
                                                        >
                                                            <FontAwesome5
                                                                name={list.icon}
                                                                size={40}
                                                                color='blue'
                                                            />
                                                        </MotiView>
                                                    )
                                                }

                                            </MotiPressable>
                                        </>
                                    )
                                }) : (<></>)
                        }
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default AiHomescreen