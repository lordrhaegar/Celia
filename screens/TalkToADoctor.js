import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { docStyles } from '../styles/doctorRequirementScreenStyles'
import Header from '../components/includes/Header'
import { AntDesign } from '@expo/vector-icons'
import { styles } from '../styles/Styles'
import talkToADocStyle from '../styles/talkToADocStyles'
import Checkbox from 'expo-checkbox'
import { doctor, height } from '../constants/constants'
import OnboadingButton from '../components/buttons/OnboadingButton'
import Button from '../components/buttons/Button'
import DocHeader from '../components/includes/DocHeader'
import CustomModal from '../components/modals/Modal'
import AvailableDoctors from '../components/modal body/AvailableDoctors'

const TalkToADoctor = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(false)
    const { height } = useWindowDimensions()
    const [isScheduleModalVisible, setIsScheduleModalVisible] = useState(false)
    const openScheduleModal = () => {
        setIsScheduleModalVisible(true)
    }
    const closeScheduleModal = () => {
        setIsScheduleModalVisible(false)
    }
    const requirements = [
        { number: 1, text: "These doctors have been vetted by the Celia team to handle whatever issues that might arise." },
        { number: 2, text: "All appointments will be done virtually through a zoom or google meet call." },
        { number: 3, text: "These doctors have been vetted by the Celia team to handle whatever issues that might arise." },
        { number: 4, text: "These doctors have been vetted by the Celia team to handle whatever issues that might arise." }
    ]
    const benefits = [
        { text: "Steady referral to your hospital" },
        { text: "Professional doctors license with 4+ years of medical practice" },
        { text: "Professional doctors licence with 4+ years of medical practice" },
        { text: "Professional doctors licence with 4+ years of medical practice" }
    ]
    return (
        <SafeAreaView >
            <View style={talkToADocStyle.container}>
                <DocHeader title={"Talk to a doctor"} navigation={navigation} />
                <View style={{ gap: 30, alignItems: 'center' }}>
                    <View style={docStyles.imageContainer}>
                        <Image
                            style={docStyles.image}
                            source={doctor}
                            resizeMode='cover'
                        />
                    </View>
                    <ScrollView contentContainerStyle={docStyles.scrollView}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                    >
                        <Text style={docStyles.appreciationText}>Talking to a professional doctor is a great choice as no amount of diagnoses can help without the assistance of a certified doctor.</Text>
                        <Text style={[docStyles.appreciationTextH1, { color: 'black' }]}>Here are some things you need to know before you proceed</Text>
                        {
                            requirements.map((requirement, index) => (
                                <View
                                    style={{ flexDirection: 'row' }}
                                    key={index}
                                >
                                    <Text style={docStyles.appreciationTextP}>{requirement.number}. </Text>
                                    <Text style={docStyles.appreciationTextP}>{requirement.text}</Text>
                                </View>
                            ))
                        }
                        {/* <Text style={docStyles.appreciationTextH1}>Benefits</Text>
                    {
                        benefits.map((benefit, index) => (
                            <View
                            style={{flexDirection: 'row'}}
                            key={index}
                            >
                                <Text style={docStyles.appreciationTextP}>{++index}. </Text>
                                <Text style={docStyles.appreciationTextP}>{benefit.text}</Text>
                            </View>
                        ))
                    } */}
                    </ScrollView>
                    <Text style={[docStyles.appreciationTextP, { marginBottom: 0 }]}>Check the box below once you’re done reading</Text>
                    <View className="justify-center items-center flex-row">
                        <View style={{ paddingHorizontal: 10 }}>
                            <Checkbox
                                value={isChecked}
                                onValueChange={setIsChecked}
                                style={{ borderRadius: 20 }}
                                color={isChecked ? '#0D91DC' : undefined}
                            />
                        </View>
                        <Text style={styles.checkBoxText}>I have read and accept the <Text style={styles.termsOfService}>Terms of Service.</Text></Text>
                    </View>
                </View>
            </View>
            {
                isChecked ?
                    (<Button
                        textColor="white"
                        onPress={()=>navigation.navigate("AvailableDoctors")} viewStyle={[styles.getStarteButtonViewStyle, { bottom: 0 }]} buttonStyle={styles.button} backgroundColor="#0D91DC" textStyle={styles.buttonText} title="Show me available doctors" />) : (<View />)
            }
            <CustomModal
                visibility={isScheduleModalVisible}
                animationType={"fade"}
                closeModal={closeScheduleModal}
                component={<AvailableDoctors closeScheduleModal={closeScheduleModal} navigation={navigation} />}
            />
        </SafeAreaView>
    )
}

export default TalkToADoctor