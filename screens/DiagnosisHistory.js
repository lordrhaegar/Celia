import { View, Text, Image, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DocHeader from '../components/includes/DocHeader'
import { docDetailsStyle } from '../styles/docDetailsStyles'
import { availableDoctorsModalStyles } from '../styles/availableDoctorsModalStyles'
import { AntDesign } from '@expo/vector-icons'
import Button from '../components/buttons/Button'
import { styles } from '../styles/Styles'
import { useSelector } from 'react-redux'
import Calendar from '../components/calender/CalendarPreview'
import { MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'
import { availabilitySetupStyles } from '../styles/availabilitySetupStyles'
import { apiBaseUrl, checkUserType, doctorImage, getAge } from '../constants/constants'
import { upcomingAppointmentStyles } from '../styles/upcomingAppointmentStyles'
import { diagnosisHistoryStyle } from '../styles/diagnosisHistoryStyle'
import axios from 'axios'

const DiagnosisHistory = ({ navigation, route }) => {
    const { height } = useWindowDimensions()
    const {diagnosis, prescription, doc} = route.params
    const {userType} = useSelector((state)=>state.auth)
    const [docDetails, setDocDetails] = useState({})
    const {firstname, lastname, gender, date_of_birth, speciality} = docDetails
    const {
        id
    } = doc
    useEffect(()=>{
        (async()=>{
            try {
                const userData = await axios.get(`${apiBaseUrl}/${checkUserType(userType)?"doctor":"user"}/${id}`)
                if (userData.status === 200 || userData.status === 201){
                    setDocDetails(userData.data.user || userData.data.doctor);
                }
            } catch (error) {
                console.log(error.response.data);
            }
        })()
    },[])
    return (
        <SafeAreaView
            style={{ backgroundColor: '#ffffff', height: height }}
        >
            <ScrollView contentContainerStyle={[docDetailsStyle.container]}>
                <DocHeader title={"Diagnosis History"} navigation={navigation} />
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
                    <View className="w-full justify-between items-center flex-row">
                        <View style={{ gap: 10 }}>
                            <Text style={availabilitySetupStyles.h1}>{checkUserType(userType)? "Dr": ""} {firstname} {lastname}</Text>
                            <Text style={availableDoctorsModalStyles.docOccupation}>{checkUserType(userType)?speciality:gender}</Text>
                            <Text style={availableDoctorsModalStyles.docOccupation}>{checkUserType(userType)?"":`${getAge(date_of_birth)} years old`}</Text>
                            {/* <Text style={availableDoctorsModalStyles.docHospital}>{doctor.hospital}</Text> */}
                        </View>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={()=>{
                                 navigation.navigate(checkUserType(userType) ? "DocDetails" : "PatientDetails",
                                 checkUserType(userType)?
                                {
                                    status: "doctorBio",
                                    appointmentId: details.doctorId
                                }: {user: docDetails} ) 
                            }}
                            style={[upcomingAppointmentStyles.joinMeetingContainer, { backgroundColor: "#F3F5F6" }]}>
                            <Text style={upcomingAppointmentStyles.joinMeetingContainerText}>{`View ${checkUserType(userType) ? "Doctor" : "Patient"} bio`}</Text>
                            <AntDesign
                                name='arrowright'
                                size={20}
                                color='#666B6E'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={diagnosisHistoryStyle.diagnosisContainer}>
                        <Text style={diagnosisHistoryStyle.diagnosisContainerH1}>Diagnosis</Text>
                        <View style={diagnosisHistoryStyle.diagnosisInnerContainer}>
                            <Text style={diagnosisHistoryStyle.diagnosisContainerP}>
                                {diagnosis}
                            </Text>
                        </View>
                    </View>
                    <View style={diagnosisHistoryStyle.diagnosisContainer}>
                        <Text style={diagnosisHistoryStyle.diagnosisContainerH1}>Prescription and Recommendation</Text>
                        <View style={diagnosisHistoryStyle.diagnosisInnerContainer}>
                            <Text style={diagnosisHistoryStyle.diagnosisContainerP}>
                                {prescription}
                            </Text>
                        </View>
                    </View>
                </MotiView>
            </ScrollView>

        </SafeAreaView>
    )
}

export default DiagnosisHistory