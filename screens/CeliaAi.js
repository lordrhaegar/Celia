import { View, Text, Image, ScrollView, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DocHeader from '../components/includes/DocHeader'
import { docStyles } from '../styles/doctorRequirementScreenStyles'
import { aiconnect, doctor } from '../constants/constants'
import Checkbox from 'expo-checkbox'
import Button from '../components/buttons/Button'
import talkToADocStyle from '../styles/talkToADocStyles'
import { styles } from '../styles/Styles'
import celiaStyle from '../styles/celiaAiStyle'

const CeliaAi = ({ navigation }) => {
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
                <DocHeader title={"Celia AI"} navigation={navigation} />
                <View style={{ gap: 30, alignItems: 'center' }}>
                    <View style={docStyles.imageContainer}>
                        <Image
                            style={docStyles.image}
                            source={aiconnect}
                            resizeMode='cover'
                        />
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        contentContainerStyle={docStyles.scrollView}
                    >
                        <Text style={docStyles.appreciationText}>Get precise diagnosis</Text>
                        <Text style={celiaStyle.celiaH1}>Faster and better.</Text>
                        <View
                        >
                            <Text style={docStyles.appreciationTextP}>Celia's AI prediction provides useful insights by analyzing data patterns, helping us consider potential health scenarios more broadly.</Text>
                        </View>
                        <View
                        >
                            <Text style={docStyles.appreciationTextP}>However, it's essential to clarify that Celia's predictions are not a substitute for professional medical advice.</Text>
                        </View>
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
                        <Text style={styles.checkBoxText}>Yes, I understand the limits and will seek professional help after. </Text>
                    </View>
                </View>
            </View>
            {
                isChecked ?
                    (
                        <Button
                        textColor="white"
                        onPress={()=>navigation.navigate("AiHomeScreen")} 
                        viewStyle={[styles.getStarteButtonViewStyle, { bottom: 0 }]} 
                        buttonStyle={styles.button} 
                        backgroundColor="#0D91DC" 
                        textStyle={styles.buttonText} 
                        title="Get started" />) : (<View />)
            }
        </SafeAreaView>
    )
}

export default CeliaAi