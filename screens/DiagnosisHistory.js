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
import { checkUserType, doctorImage } from '../constants/constants'
import { upcomingAppointmentStyles } from '../styles/upcomingAppointmentStyles'
import { diagnosisHistoryStyle } from '../styles/diagnosisHistoryStyle'

const DiagnosisHistory = ({ navigation, route }) => {
    const { height } = useWindowDimensions()
    const {diagnosis, prescription, doc} = route.params
    const {
        firstname, 
        lastname,
    } = doc
    useEffect(()=>{
        console.log(doc);
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
                            <Text style={availabilitySetupStyles.h1}>Dr {firstname} {lastname}</Text>
                            <Text style={availableDoctorsModalStyles.docOccupation}>Speciality</Text>
                            {/* <Text style={availableDoctorsModalStyles.docHospital}>{doctor.hospital}</Text> */}
                        </View>
                        <TouchableOpacity
                            activeOpacity={1}
                            // onPress={()=>{
                            //     checkUserType(userType) ? navigation.navigate("DocDetails",
                            //     {
                            //         status: "doctorBio",
                            //         appointmentId: details.doctorId
                            //     }) : console.log(userType);
                            // }}
                            style={[upcomingAppointmentStyles.joinMeetingContainer, { backgroundColor: "#F3F5F6" }]}>
                            <Text style={upcomingAppointmentStyles.joinMeetingContainerText}>{/*`View ${checkUserType(userType) ? "Doctor" : "Patient"} bio`*/ "View Doctor Bio"}</Text>
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