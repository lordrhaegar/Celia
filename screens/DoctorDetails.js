import { View, Text, Image, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DocHeader from '../components/includes/DocHeader'
import { docDetailsStyle } from '../styles/docDetailsStyles'
import { availableDoctorsModalStyles } from '../styles/availableDoctorsModalStyles'
import { AntDesign } from '@expo/vector-icons'
import Button from '../components/buttons/Button'
import { styles } from '../styles/Styles'
import CustomModal from '../components/modals/Modal'
import ScheduleAnAppointment from '../components/modal body/ScheduleAnAppointment'
import { useSelector } from 'react-redux'
import Calendar from '../components/calender/CalendarPreview'
import { MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'
import CalendarPicker from '../components/calender/CalendarPicker'
import TimePicker from '../components/time picker/TimePicker'
import { availabilitySetupStyles } from '../styles/availabilitySetupStyles'
import CeliaPreloader from '../components/preloader/CeliaPreloader'
import { doctorImage } from '../constants/constants'

const DoctorDetails = ({ navigation, route }) => {
    const { doctor } = useSelector((state) => state.doctor)
    const { height } = useWindowDimensions()
    const { status, appointmentId, appointment } = route.params
    const [isScheduleModalVisible, setIsScheduleModalVisible] = useState(false)
    const [selectedOption, setSelectedOption] = useState("")
    const [stepTwo, setStepTwo] = useState(false)
    const [doctorId, setDoctorId] = useState(doctor._id)
    const [timestamp, setTimestamp] = useState("")
    const [day, setDay] = useState("")
    const [symptoms, setSymptoms] = useState([])
    const [questionNo, setQuestionNo] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const { symptomsList } = useSelector((state) => state.symptom)


    const { patientName, rating, review } = doctor.top_review
    useEffect(() => {
        console.log(doctor.top_review);
    }, [])
    const openScheduleModal = () => {
        setIsScheduleModalVisible(prev => !prev)
    }
    const goToStepTwo = () => {
        setStepTwo(true)
    }
    const goToStepOne = () => {
        setStepTwo(false)
    }
    const closeScheduleModal = () => {
        setIsScheduleModalVisible(prev => !prev)
    }
    return (
        <SafeAreaView
            style={{ backgroundColor: '#ffffff', height: height }}
        >
            <ScrollView contentContainerStyle={[docDetailsStyle.container]}>
                <DocHeader title={"Book appointment"} navigation={navigation} />
                <View
                    style={docDetailsStyle.imageContainer}>
                    <Image
                        source={doctorImage}
                        style={{ flex: 1, width: "100%" }}
                        resizeMode='cover'
                    />
                </View>
                {
                    !stepTwo ?
                        (
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
                                <View style={{ gap: 10 }}>
                                    <Text style={availabilitySetupStyles.h1}>{doctor.firstname} {doctor.lastname}</Text>
                                    <Text style={availableDoctorsModalStyles.docOccupation}>{doctor.speciality}</Text>
                                    {/* <Text style={availableDoctorsModalStyles.docHospital}>{doctor.hospital}</Text> */}
                                </View>
                                {/* <View
                                    style={docDetailsStyle.imageContainer}>
                                    <Image
                                        source={{ uri: doctor.license }}
                                        style={{ flex: 1, width: "100%" }}
                                        resizeMode='cover'
                                    />
                                </View> */}
                                <View style={docDetailsStyle.cardContainer}>
                                    <View style={docDetailsStyle.detailsCard}>
                                        <Text style={docDetailsStyle.detailsCardH1}>Patients</Text>
                                        <Text style={docDetailsStyle.detailsCardP}>25</Text>
                                    </View>
                                    <View style={docDetailsStyle.detailsCard}>
                                        <Text style={docDetailsStyle.detailsCardH1}>Experience</Text>
                                        <Text style={docDetailsStyle.detailsCardP}>{doctor.speciality}</Text>
                                    </View>
                                    <View style={docDetailsStyle.detailsCard}>
                                        <Text style={docDetailsStyle.detailsCardH1}>Rating</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                {
                                                    [...Array(Math.round(rating)).keys()].map((star, index) => {
                                                        return (<Text key={index}>⭐</Text>)
                                                    })
                                                }
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <Calendar
                                    extra="mt-20"
                                    doctor={doctor.availability} />
                                <View style={docDetailsStyle.reeviewsContainer}>
                                    <Text style={availabilitySetupStyles.h1}>Reviews</Text>
                                    {
                                        patientName != "" ? (
                                            <View >
                                                <Text style={availableDoctorsModalStyles.docHospital}>{patientName}</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={availableDoctorsModalStyles.docHospital}>{rating} </Text>
                                                    {
                                                        [...Array(rating).keys()].map((star, index) => {
                                                            return (<Text key={index}>⭐</Text>)
                                                        })
                                                    }
                                                </View>
                                                <Text style={availableDoctorsModalStyles.docHospital}>{review}</Text>
                                                <TouchableOpacity style={availableDoctorsModalStyles.viewDetailsContainer}>
                                                    <Text style={availableDoctorsModalStyles.viewDetailsText}>View all reviewers</Text>
                                                    <AntDesign
                                                        name='right'
                                                        color={"#0D91DC"}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        ) :
                                            (
                                                <Text style={availableDoctorsModalStyles.docHospital}>No reviews yet</Text>
                                            )
                                    }

                                </View>
                                {
                                    status !== "doctorBio" && (
                                        <Button
                                            textColor="white"
                                            buttonStyle={styles.button}
                                            width="100%"
                                            onPress={goToStepTwo}
                                            viewStyle={[docDetailsStyle.buttonContainer, { width: "100%" }]}
                                            textStyle={styles.buttonText}
                                            title={status === "reschedule" ? "Reschedule appointment" : "Schedule an appointment"} />
                                    )
                                }

                            </MotiView>
                        ) :
                        (
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
                                <View style={{ gap: 10 }}>
                                    <Text style={availabilitySetupStyles.h1}>{doctor.firstname} {doctor.lastname}</Text>
                                    <Text style={availableDoctorsModalStyles.docHospital}>{doctor.speciality}</Text>
                                </View>
                                <CalendarPicker
                                    doctorAvailability={doctor.availability}
                                    doctorId={doctorId}
                                    timestamp={timestamp}
                                    setTimestamp={setTimestamp}
                                    day={day}
                                    navigation={navigation}
                                    setDay={setDay}
                                    questionNo={questionNo}
                                    setQuestionNo={setQuestionNo}
                                    gotoStepOne={goToStepOne}
                                    setIsLoading={setIsLoading}
                                    symptoms={symptomsList}
                                    status={status}
                                    appointmentId={appointmentId}
                                />
                                {/* <View className="flex-row mt-28 w-full justify-between items-center">
                                    <Button
                                        textColor="white"
                                        buttonStyle={[styles.button, {marginLeft: 0}]}
                                        width="100%"
                                        onPress={goToStepOne}
                                        viewStyle={docDetailsStyle.buttonContainer}
                                        textStyle={styles.buttonText}
                                        title={"Back to Details"} />
                                    <Button
                                        textColor="white"
                                        buttonStyle={styles.button}
                                        width="100%"
                                        onPress={goToStepOne}
                                        viewStyle={docDetailsStyle.buttonContainer}
                                        textStyle={styles.buttonText}
                                        title={"Next"} />
                                </View> */}
                            </MotiView>

                        )
                }


            </ScrollView>
            <CustomModal
                visibility={isScheduleModalVisible}
                animationType={"fade"}
                closeModal={closeScheduleModal}
                component={<ScheduleAnAppointment navigation={navigation} closeModal={closeScheduleModal} />}
            />
            {
                isLoading && (
                    <CeliaPreloader />
                )
            }
        </SafeAreaView>
    )
}

export default DoctorDetails