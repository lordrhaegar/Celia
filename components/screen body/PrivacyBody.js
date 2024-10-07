import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import { doctor, logo } from '../../constants/constants'
import Checkbox from 'expo-checkbox'
import { useSelector } from 'react-redux'
import { docStyles } from '../../styles/doctorRequirementScreenStyles'
import { ScrollView } from 'react-native-gesture-handler'

const PrivacyBody = ({ isChecked, setIsChecked }) => {
    const { userType } = useSelector((state) => state.auth)
    const requirements = [
        { number: 1, text: "A copy of your valid and up-to-date medical license issued by the Medical and Dental Council of Nigeria (MDCN). Ensure that the license is current and not expired." },
        { number: 2, text: "Certificate of Medical Qualification: The certificate that confirms your medical degree (e.g., MBBS or MD)." },
        {number: 3, text: "Proof of Residency or Practice: Request documents that confirm their current place of residency or medical practice, such as a letter from the hospital or clinic where they work."},
        {number: 4, text: "National ID or Passport"}
    ]
    const benefits = [
        {text: "Steady referral to your hospital"},
        {text: "Professional doctors license with 4+ years of medical practice"},
        {text: "Professional doctors licence with 4+ years of medical practice"},
        {text: "Professional doctors licence with 4+ years of medical practice"}
    ]
    return (
        userType === "Doctor" ? (
            <View style={{gap: 30, alignItems: 'center'}}>
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
                    <Text style={docStyles.appreciationText}>We are so happy to have you here. Kindly read through the requirements below to be sure you’re the right fit for Celia.</Text>
                    <Text style={docStyles.appreciationTextH1}>Requirements</Text>
                    {
                        requirements.map((requirement, index) => (
                            <View
                            style={{flexDirection: 'row'}}
                            key={index}
                            >
                                <Text style={docStyles.appreciationTextP}>{requirement.number}. </Text>
                                <Text style={docStyles.appreciationTextP}>{requirement.text}</Text>
                            </View>
                        ))
                    }
                    <Text style={docStyles.appreciationTextH1}>Benefits</Text>
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
                    }
                </ScrollView>
                <Text style={[docStyles.appreciationTextP, {marginBottom: 0}]}>Check the box below once you’re done reading</Text>
                <View className="justify-center items-center flex-row">
                    <View style={{ paddingHorizontal: 10 }}>
                        <Checkbox
                            value={isChecked}
                            onValueChange={setIsChecked}
                            style={{ borderRadius: 20 }}
                            color={isChecked ? '#7CD1D1' : undefined}
                        />
                    </View>
                    <Text style={styles.checkBoxText}>I have read and accept the <Text style={styles.termsOfService}>Terms of Service.</Text></Text>
                </View>
            </View>
        ) : (
            <View
                style={styles.privacyBody}
            >
                <View
                    className="flex-row items-center gap-[0.5]"
                >
                    <Image
                        source={logo} />
                    <Text
                        style={{
                            fontSize: 26.59,
                            color: '#0D91DC'
                        }}
                    >elia</Text>
                </View>
                <View>
                    <Text
                        style={styles.title}
                    >Before we get started...</Text>
                </View>
                <View>
                    <Text
                        style={styles.privacySubhead}
                    >Privacy policy</Text>
                </View>
                <View>
                    <Text
                        style={styles.privacyDetails}
                    >Before using this app please read the terms of service and remember:</Text>
                    <View className="flex-row">
                        <Text style={styles.privacyDetails}>1. </Text>
                        <Text style={styles.privacyDetails}>Always confirm with your doctor. This app is merely a tool to assist.</Text>
                    </View>
                    <View className="flex-row">
                        <Text style={styles.privacyDetails}>2. </Text>
                        <Text style={styles.privacyDetails}>Diagnosis isn’t for emergencies. Call your local emergency number right away when there’s a health emergency.</Text>
                    </View>
                </View>
                <View className="justify-center items-center flex-row">
                    <View style={{ padding: 10 }}>
                        <Checkbox
                            value={isChecked}
                            onValueChange={setIsChecked}
                            style={{ borderRadius: 20 }}
                            color={isChecked ? '#0D91DC' : undefined}
                        />
                    </View>
                    <Text style={styles.checkBoxText}>I have read and accept the <Text style={styles.termsOfService}>Terms of Service.</Text></Text>
                </View>
            </View>)
    )
}

export default PrivacyBody