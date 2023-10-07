import { View, Text, ScrollView, useWindowDimensions, TouchableOpacity, Image, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/Styles'
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import { sthetoscope } from '../constants/constants'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = ({route}) => {
    const {userDetails} = route.params
    const naviagtor = useNavigation();
    const height = useWindowDimensions().height;
    const width = useWindowDimensions().width;
    const [isAlertArrowUp, setIsAlertArrowUp] = useState(true);
    const [isDiagnosisArrowUp, setIsDiagnosisAlertArrowUp] = useState(true)
    const toggleAlertArrow = () => {
        setIsAlertArrowUp(!isAlertArrowUp);
    }
    const toggleDiagnosisArrow = () => {
        setIsDiagnosisAlertArrowUp(!isDiagnosisArrowUp)
    }
    return (
        <SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollView}>
                <View style={{ height: "5%" }} className="flex-row px-5 items-center justify-between">
                    <Text style={styles.title} className="text-black font-medium">{`Hi there ${userDetails.user.firstname}`}</Text>
                    <MaterialIcons
                        name='notifications'
                        size={24}
                        color="#0A74B0"
                    />
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
                            naviagtor.navigate('NewDiagnosis', {userDetails: userDetails})
                        }
                        }
                        style={styles.button}>
                            <Text style={styles.buttonText} className="text-[#FFFBFB]">Start Diagnosis</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
                            style={[styles.input, { width: '100%',borderColor: '#A5ADB1', paddingLeft: 50 }]}
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
                            <Text style={styles.diagnosisDropDownHeading}>Diagnosis history</Text>
                            <Entypo
                                onPress={toggleDiagnosisArrow}
                                name={isDiagnosisArrowUp ? 'chevron-up' : 'chevron-down'}
                                color='#A5ADB1'
                                size={20}
                            />
                        </View>
                        {
                            isDiagnosisArrowUp ? (
                                <View style={styles.diagnosisDropDownItems}>
                                    <Text
                                        style={styles.diagnosisDropDownItemsText1}
                                    >Today</Text>
                                    <Text
                                        style={styles.diagnosisDropDownItemsText2}
                                    >Headache</Text>
                                    <AntDesign
                                        name='arrowright'
                                        size={20}
                                        color='#666B6E'
                                    />
                                </View>
                            ) : (<View />)
                        }
                        {
                            isDiagnosisArrowUp ? (
                                <View style={styles.diagnosisDropDownItems}>
                                    <Text
                                        style={styles.diagnosisDropDownItemsText1}
                                    >Today</Text>
                                    <Text
                                        style={styles.diagnosisDropDownItemsText2}
                                    >Headache</Text>
                                    <AntDesign
                                        name='arrowright'
                                        size={20}
                                        color='#666B6E'
                                    />
                                </View>
                            ) : (<View />)
                        }
                        {
                            isDiagnosisArrowUp ? (
                                <View style={styles.diagnosisDropDownItems}>
                                    <Text
                                        style={styles.diagnosisDropDownItemsText1}
                                    >Today</Text>
                                    <Text
                                        style={styles.diagnosisDropDownItemsText2}
                                    >Headache</Text>
                                    <AntDesign
                                        name='arrowright'
                                        size={20}
                                        color='#666B6E'
                                    />
                                </View>
                            ) : (<View />)
                        }
                        {
                            isDiagnosisArrowUp ? (
                                <View style={styles.diagnosisDropDownItems}>
                                    <Text
                                        style={styles.diagnosisDropDownItemsText1}
                                    >Today</Text>
                                    <Text
                                        style={styles.diagnosisDropDownItemsText2}
                                    >Headache</Text>
                                    <AntDesign
                                        name='arrowright'
                                        size={20}
                                        color='#666B6E'
                                    />
                                </View>
                            ) : (<View />)
                        }
                        {
                            isDiagnosisArrowUp ? (
                                <View style={styles.diagnosisDropDownItems}>
                                    <Text
                                        style={styles.diagnosisDropDownItemsText1}
                                    >Today</Text>
                                    <Text
                                        style={styles.diagnosisDropDownItemsText2}
                                    >Headache</Text>
                                    <AntDesign
                                        name='arrowright'
                                        size={20}
                                        color='#666B6E'
                                    />
                                </View>
                            ) : (<View />)
                        }
                        {
                            isDiagnosisArrowUp ? (
                                <View style={styles.diagnosisDropDownItems}>
                                    <Text
                                        style={styles.diagnosisDropDownItemsText1}
                                    >Today</Text>
                                    <Text
                                        style={styles.diagnosisDropDownItemsText2}
                                    >Headache</Text>
                                    <AntDesign
                                        name='arrowright'
                                        size={20}
                                        color='#666B6E'
                                    />
                                </View>
                            ) : (<View />)
                        }
                        {
                            isDiagnosisArrowUp ? (
                                <View style={styles.diagnosisDropDownItems}>
                                    <Text
                                        style={styles.diagnosisDropDownItemsText1}
                                    >Today</Text>
                                    <Text
                                        style={styles.diagnosisDropDownItemsText2}
                                    >Headache</Text>
                                    <AntDesign
                                        name='arrowright'
                                        size={20}
                                        color='#666B6E'
                                    />
                                </View>
                            ) : (<View />)
                        }
                        {
                            isDiagnosisArrowUp ? (
                                <View style={styles.diagnosisDropDownItems}>
                                    <Text
                                        style={styles.diagnosisDropDownItemsText1}
                                    >Today</Text>
                                    <Text
                                        style={styles.diagnosisDropDownItemsText2}
                                    >Headache</Text>
                                    <AntDesign
                                        name='arrowright'
                                        size={20}
                                        color='#666B6E'
                                    />
                                </View>
                            ) : (<View />)
                        }
                        {
                            isDiagnosisArrowUp ? (
                                <View style={styles.diagnosisDropDownItems}>
                                    <Text
                                        style={styles.diagnosisDropDownItemsText1}
                                    >Today</Text>
                                    <Text
                                        style={styles.diagnosisDropDownItemsText2}
                                    >Headache</Text>
                                    <AntDesign
                                        name='arrowright'
                                        size={20}
                                        color='#666B6E'
                                    />
                                </View>
                            ) : (<View />)
                        }
                    </View>
                    <View style={styles.blogSection}>
                        <View style={styles.blogCard}>
                            <Image 
                            resizeMode='contain'
                            style={styles.blogImage} 
                            source={sthetoscope } />
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