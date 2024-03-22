import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import DocHeader from '../components/includes/DocHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { docDetailsStyle } from '../styles/docDetailsStyles'
import { doctorImage, getAge } from '../constants/constants'
import { MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'
import { styles } from '../styles/Styles'
import { Entypo } from '@expo/vector-icons'
import { patientSetttingsStyles } from '../styles/patientSettingsStyle'
import { patientDetailsStyles } from '../styles/patientDetailsStyles'
import { availabilitySetupStyles } from '../styles/availabilitySetupStyles'
import { availableDoctorsModalStyles } from '../styles/availableDoctorsModalStyles'

const PatientDetails = ({ navigation, route }) => {
    const _height = Dimensions.get('window').height
    const {user} = route.params
    const [isPersonalInfoArrowUp, setIsPersonalInfoArrowUp] = useState(true)
    const [isBodyInfoArrowUp, setIsBodyInfoArrowUp] = useState(false)
    const [isHealthInfoArrowUp, setIsHealthInfoArrowUp] = useState(false)
    const [isAllergiesInfoArrowUp, setIsAllergiesInfoArrowUp] = useState(false)
    const togglePersonalInfoArrow = () => {
        setIsPersonalInfoArrowUp(!isPersonalInfoArrowUp)
    }
    const toggleBodyInfoArrow = () => {
        setIsBodyInfoArrowUp(!isBodyInfoArrowUp)
    }
    const toggleHealthInfoArrow = () => {
        setIsHealthInfoArrowUp(!isHealthInfoArrowUp)
    }
    const toggleAllergiesInfoArrow = () => {
        setIsAllergiesInfoArrowUp(!isAllergiesInfoArrowUp)
    }
    useEffect(()=>{
        console.log("user=>", user);
    },[])
    const {
        firstname,
        lastname,
        gender,
        date_of_birth,
        next_of_kin,
        relationship_with_next_of_kin,
        next_of_kin_mobile,
        religion,
        tribe,
        occupation,
        place_of_origin,
        town,
        lga,
        genotype,
        hypertensive,
        blood_group,
        diabetic,
        asthmatic,
        smoker,
        allergies,
        weight,
        height
    } = user
    const patientInfo = {

        personalInformation: [
            { label: "Next of Kin", value: next_of_kin },
            { label: "Relationship with next of kin", value: relationship_with_next_of_kin },
            { label: "Next of Kin Phone", value: next_of_kin_mobile },
            { label: "Religion", value: religion },
            { label: "Tribe", value: tribe },
            { label: "Occupation", value: occupation },
            { label: "Place of origin", value: place_of_origin },
            { label: "Town", value: town },
            { label: "L.G.A", value: lga },
        ],


        bodyInformation: [
            { label: "Genotype", value: genotype },
            { label: "Blood group", value: blood_group },
            { label: "Body Weight (kg)", value: weight},
            { label: "Body Height (cm)", value: height}
        ],


        healthInformation: [
            { label: "Diabetic", value: diabetic },
            { label: "High blood pressure", value: hypertensive },
            { label: "Asthmatic", value: asthmatic },
            { label: "Smoker", value: smoker }
        ],

        allergies: allergies
    }
    return (
        <SafeAreaView
            style={{ backgroundColor: '#ffffff', height: _height }}
        >
            <ScrollView contentContainerStyle={[docDetailsStyle.container]}>
                <DocHeader title={"Patients Bio"} navigation={navigation} />
                <View
                    style={docDetailsStyle.imageContainer}>
                    <Image
                        source={doctorImage}
                        style={{ flex: 1, width: "100%" }}
                        resizeMode='cover'
                    />
                </View>
                <MotiView
                    from={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 2000,
                        type: 'spring',
                        ease: Easing.linear
                    }}
                    style={docDetailsStyle.detailsContainer}>
                    <View style={{ gap: 20 }} className="w-full">
                        <View className="w-full flex-row justify-between items-center">
                            <View style={{ gap: 10 }}>
                                <Text style={availabilitySetupStyles.h1}>{firstname} {lastname}</Text>
                                <Text style={availableDoctorsModalStyles.docOccupation}>{getAge(date_of_birth)} years Old</Text>
                            </View>
                            <View
                                style={[styles.genderButton, {width: "30%"}]}
                            >
                                <Text
                                    style={[styles.buttonText, { color: "black" }]}
                                >{gender}</Text>
                            </View>
                        </View>
                        <View
                            style={styles.dropDownCard}>
                            <View style={styles.dropDownHeader}>
                                <Text style={styles.diagnosisDropDownHeading}>Personal information</Text>
                                <Entypo
                                    onPress={togglePersonalInfoArrow}
                                    name={isPersonalInfoArrowUp ? 'chevron-up' : 'chevron-down'}
                                    color='#A5ADB1'
                                    size={20}
                                />
                            </View>
                            <MotiView
                                from={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{
                                    type: "timing",
                                    duration: 200,
                                    ease: Easing.linear
                                }}
                                style={{ marginTop: 5, width: "100%" }}>
                                {
                                    isPersonalInfoArrowUp ? (
                                        <View style={patientDetailsStyles.infoContainersBlock}>
                                            {
                                                patientInfo.personalInformation.map((personalInformation, index) => {
                                                    return (
                                                        <MotiView
                                                            from={{ scaleY: 0 }}
                                                            animate={{ scaleY: 1 }}
                                                            transition={{
                                                                type: "timing",
                                                                duration: 200,
                                                                ease: Easing.linear
                                                            }}
                                                            key={index} style={patientDetailsStyles.infoContainers}>
                                                            <Text style={patientDetailsStyles.infoContainersH1}>{personalInformation.label}</Text>
                                                            <Text style={patientDetailsStyles.infoContainersP}>{personalInformation.value}</Text>
                                                        </MotiView>
                                                    )
                                                })
                                            }
                                        </View>
                                    ) : (<></>)

                                }

                            </MotiView>
                        </View>
                        <View
                            style={styles.dropDownCard}>
                            <View style={styles.dropDownHeader}>
                                <Text style={styles.diagnosisDropDownHeading}>Body information</Text>
                                <Entypo
                                    onPress={toggleBodyInfoArrow}
                                    name={isBodyInfoArrowUp ? 'chevron-up' : 'chevron-down'}
                                    color='#A5ADB1'
                                    size={20}
                                />
                            </View>
                            <MotiView
                                from={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{
                                    type: "timing",
                                    duration: 200,
                                    ease: Easing.linear
                                }}
                                style={{ marginTop: 5, width: "100%" }}>
                                {
                                    isBodyInfoArrowUp ? (
                                        <View style={patientDetailsStyles.infoContainersBlock}>
                                            {
                                                patientInfo.bodyInformation.map((bodyInformation, index) => {
                                                    return (
                                                        <MotiView
                                                            from={{ scaleY: 0 }}
                                                            animate={{ scaleY: 1 }}
                                                            transition={{
                                                                type: "timing",
                                                                duration: 200,
                                                                ease: Easing.linear
                                                            }}
                                                            key={index} style={patientDetailsStyles.infoContainers}>
                                                            <Text style={patientDetailsStyles.infoContainersH1}>{bodyInformation.label}</Text>
                                                            <Text style={patientDetailsStyles.infoContainersP}>{bodyInformation.value}</Text>
                                                        </MotiView>
                                                    )
                                                })
                                            }
                                        </View>
                                    ) : (<></>)

                                }

                            </MotiView>
                        </View>
                        <View
                            style={styles.dropDownCard}>
                            <View style={styles.dropDownHeader}>
                                <Text style={styles.diagnosisDropDownHeading}>Health information</Text>
                                <Entypo
                                    onPress={toggleHealthInfoArrow}
                                    name={isHealthInfoArrowUp ? 'chevron-up' : 'chevron-down'}
                                    color='#A5ADB1'
                                    size={20}
                                />
                            </View>
                            <MotiView
                                from={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{
                                    type: "timing",
                                    duration: 200,
                                    ease: Easing.linear
                                }}
                                style={{ marginTop: 5, width: "100%" }}>
                                {
                                    isHealthInfoArrowUp ? (
                                        <View style={patientDetailsStyles.infoContainersBlock}>
                                            {
                                                patientInfo.healthInformation.map((healthInformation, index) => {
                                                    return (
                                                        <MotiView
                                                            from={{ scaleY: 0 }}
                                                            animate={{ scaleY: 1 }}
                                                            transition={{
                                                                type: "timing",
                                                                duration: 200,
                                                                ease: Easing.linear
                                                            }}
                                                            key={index} style={patientDetailsStyles.infoContainers}>
                                                            <Text style={patientDetailsStyles.infoContainersH1}>{healthInformation.label}</Text>
                                                            <Text style={patientDetailsStyles.infoContainersP}>{healthInformation.value}</Text>
                                                        </MotiView>
                                                    )
                                                })
                                            }
                                        </View>
                                    ) : (<></>)

                                }

                            </MotiView>
                        </View>
                        <View
                            style={styles.dropDownCard}>
                            <View style={styles.dropDownHeader}>
                                <Text style={styles.diagnosisDropDownHeading}>Allergies</Text>
                                <Entypo
                                    onPress={toggleAllergiesInfoArrow}
                                    name={isAllergiesInfoArrowUp ? 'chevron-up' : 'chevron-down'}
                                    color='#A5ADB1'
                                    size={20}
                                />
                            </View>
                            <MotiView
                                from={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{
                                    type: "timing",
                                    duration: 200,
                                    ease: Easing.linear
                                }}
                                style={{ marginTop: 5, width: "100%" }}>
                                {
                                    isAllergiesInfoArrowUp ? (
                                        <View style={patientDetailsStyles.infoContainersBlock}>
                                            {
                                                patientInfo.allergies.map((allergy, index) => {
                                                    return (
                                                        <MotiView
                                                            from={{ scaleY: 0 }}
                                                            animate={{ scaleY: 1 }}
                                                            transition={{
                                                                type: "timing",
                                                                duration: 200,
                                                                ease: Easing.linear
                                                            }}
                                                            key={index} style={[patientDetailsStyles.infoContainerForAllergies]}>
                                                            <Text style={patientDetailsStyles.infoContainersH1}>{allergy}</Text>
                                                        </MotiView>
                                                    )
                                                })
                                            }
                                        </View>
                                    ) : (<></>)

                                }

                            </MotiView>
                        </View>
                    </View>
                </MotiView>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PatientDetails