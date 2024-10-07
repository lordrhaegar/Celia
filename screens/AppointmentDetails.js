import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { calendarPickerStyles } from '../styles/calendarPickerStyles'
import { availabilitySetupStyles } from '../styles/availabilitySetupStyles'
import ConnectButton from '../components/buttons/ConnectButton'
import { connectButtonStyles } from '../styles/connectButtonStyles'
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { availableDoctorsModalStyles } from '../styles/availableDoctorsModalStyles'
import { styles } from '../styles/Styles'
import { docDetailsStyle } from '../styles/docDetailsStyles'
import { apiBaseUrl, backgroundColors, connectOptions, convertTimestampToDate, convertTimestampToTime, dayTime, doctor } from '../constants/constants'
import { MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'
import DocHeader from '../components/includes/DocHeader'
import { upcomingAppointmentStyles } from '../styles/upcomingAppointmentStyles'
import { doctorsStyles } from '../styles/doctorsStyles'
import Button from '../components/buttons/Button'
import CustomModal from '../components/modals/Modal'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedDoctor } from '../features/docSlice'
import CeliaPreloader from '../components/preloader/CeliaPreloader'
import { CommonActions } from '@react-navigation/native'
import RatingAndReview from '../components/rating & reviews/RatingAndReview'
import { diagnosisHistoryStyle } from '../styles/diagnosisHistoryStyle'
import DiagnosisPrescription from '../components/rating & reviews/DiagnosisPrescription'

const AppointmentDetails = ({ navigation, route }) => {
    const { patientSelectedBackground, doctorSelectedBackground } = backgroundColors
    const { height } = Dimensions.get('window')
    const { details, status, endTime } = route.params
    const { userToken } = useSelector((state) => state.auth)
    const { userType } = useSelector((state) => state.auth)
    const [isMeetingCompleted, setIsMeetingCompleted] = useState(false)
    const [isPrescription, setPrescription] = useState(false)
    const checkUserType = (userType) => {
        return userType === "Patient"
    }
    useEffect(() => { console.log("details=>", details); }, [])
    const userId = checkUserType(userType) ? details.doctorId : details.patientId
    const diagnosisReportItems = [
        { title: "View Diagnosis report", fn: () => { } },
        { title: "View AI analysis", fn: () => { } },
    ]
    const [isModalVisible, setisModalVisible] = useState(false)
    const [isJoinModalVisible, setjoinModalVisible] = useState(false)
    const [isCompleteModalVisible, setCompleteModalVisible] = useState(false)
    const [isReviewModalVisible, setisReviewModalVisible] = useState(false)
    const [isPrescriptionModalVisible, setisPrescriptionModalVisible] = useState(false)
    const [diagnosis, setDiagnosis] = useState("")
    const [prescriptionRecommendation, setPrescriptionRecommendation] = useState("")
    const [cancelled, setCancelled] = useState(false)
    const [body, setBody] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [modalContents, setModalContents] = useState({})
    const modal_Content = (
        <View style={availabilitySetupStyles.successModalBox}>
            <View style={availabilitySetupStyles.successIconContainer}>
                <MotiView 
                from={{rotateY: "0deg"}}
                animate={{rotateY: "360deg"}}
                transition={{
                    type: 'spring',
                    duration: 5000,
                    ease: Easing.bounce,
                    loop: true
                }}
                style={[availabilitySetupStyles.successIconBackground, {backgroundColor: modalContents.bg}]}>
                    {modalContents.icon}
                </MotiView>
            </View>
            <View style={[availabilitySetupStyles.successIconContainer]}>
                <Text style={availabilitySetupStyles.successModalTextH1}>{modalContents.heading}</Text>
            </View>
            <View style={[availabilitySetupStyles.successIconContainer,]}>
                <Text style={availabilitySetupStyles.successModalTextP}>
                {modalContents.body}
                </Text>
            </View>
            <View>
                <Button
                    textColor="#FFFBFB"
                    buttonStyle={[styles.button, { width: "100%" }]}
                    title="Ok"
                    backgroundColor={backgroundColors.doctorSelectedBackground}
                    viewStyle={{ paddingHorizontal: 5 }}
                    onPress={()=>navigation.dispatch(CommonActions.reset({
                        index: 0,
                        routes: [{
                            name: "App"
                        }]
                    }))}
                />
            </View>
        </View>
    )
    useEffect(() => {
        console.log(details);
        setDiagnosis(details.diagnosis)
        setPrescriptionRecommendation(details.prescription)
    }, [])
    const successModal = (body)=>{
        setModalContents({
            icon: <Ionicons
            name="checkmark-circle-outline"
            size={24}
            color={"#0A74B0"}
        />,
            heading: "Success",
            bg: "#CFE9F8",
            body: body.toUpperCase(),
        })
        setCompleteModalVisible(true)
    }
    const failedModal = (errorMessage)=>{
        setModalContents({
            icon: <AntDesign
            name='exclamation'
            size={24}
            color={"white"}
        />,
            heading: "Failed",
            bg: "#DC0D0D",
            body: errorMessage.toUpperCase()
        })
        setCompleteModalVisible(true)
    }
    const completeAppointment = async () => {
        const payload = {
            appointmentId: details._id,
            diagnosis: diagnosis,
            prescription: prescriptionRecommendation
        }
        setIsLoading(true)
        try {
            const complete = await axios.put(`${apiBaseUrl}/appointment/complete`, payload,{
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            if (complete.status === 200) {
                successModal("Completed")
            }
        } catch (error) {
            failedModal(error.response.data.message)
            // if(error.response.status === 422){
            //     failedModal("Please fill in the prescription and diagnosis")
            //     }else if(error.response.status === 400){
            //     failedModal(error.response.data.message)
            //     }
        }finally{
            setIsLoading(false)
        }
    }
    const closeModal = () => {
        setisModalVisible(false)
    }
    const closeJoinModal = () => {
        setjoinModalVisible(false)
    }
    const closeCompleteModal = () => {
        setCompleteModalVisible(false)
    }
    const closeReviewModal = () => {
        setisReviewModalVisible(false)
    }
    const closePrescriptionModal = () => {
        setisPrescriptionModalVisible(false)
    }
    const modalContent = (
        <View style={availabilitySetupStyles.successModalBox}>
            <View style={availabilitySetupStyles.successIconContainer}>
                <MotiView 
                from={{rotateY: "0deg"}}
                animate={{rotateY: "360deg"}}
                transition={{
                    type: 'spring',
                    duration: 5000,
                    ease: Easing.bounce,
                    loop: true
                }}
                style={availabilitySetupStyles.successIconBackground}>
                    <Ionicons
                        name='checkmark-circle-outline'
                        size={24}
                        color={"#0A74B0"}
                    />
                </MotiView>
            </View>
            <View style={availabilitySetupStyles.successIconContainer}>
                <Text style={availabilitySetupStyles.successModalTextH1}>Important Notice</Text>
            </View>
            <View style={[availabilitySetupStyles.successIconContainer, { height: 100 }]}>
                <Text style={availabilitySetupStyles.successModalTextP}>
                    {checkUserType(userType)? "Be sure to come back to the app and leave a review for your doctor." : "Be sure to come back to the app and drop any notes, comments and prescriptions you have for your patient."}
        
                </Text>
            </View>
            <View>
                <Button
                    textColor="#FFFBFB"
                    buttonStyle={[styles.button, { width: "100%" }]}
                    title="Ok, Proceed to meeting"
                    backgroundColor={checkUserType(userType)?patientSelectedBackground:doctorSelectedBackground}
                    textStyle={styles.buttonText}
                    viewStyle={{ paddingHorizontal: 5 }}
                    onPress={() =>{
                        setjoinModalVisible(false)
                        setTimeout(() => {
                            setIsMeetingCompleted(true)
                        }, 2000);
                    }}
                />
            </View>
        </View>
    )
    const bodyOfModal = [
        "Are you sure you want to reschedule the appointment. This action cannot be reversed and you’ll lose the initial agreed upon time.",
        "Are you sure you want to cancel the appointment. This action cannot be reversed. Why not reschedule instead?",
        "You have canceled the appointment with your Doctor",
    ]
    useEffect(() => { console.log(details._id); }, [])

    const cancelAppointment = async () => {
        setisModalVisible(false)
        setIsLoading(true)
        try {
            const cancelAppointment = await axios.put(`${apiBaseUrl}/appointment/cancel`, {
                appointmentId: details._id
            }, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            if (cancelAppointment.status === 200 || cancelAppointment.status === 201) {
                setBody(bodyOfModal[2])
                setCancelled(true)
                setisModalVisible(true)
            }
        } catch (error) {
        } finally {
            setIsLoading(false)
        }
    }
    const dispatch = useDispatch()
    useEffect(() => {
        if (checkUserType(userType)) {
            (async () => {
                try {
                    const setDoctorDetails = await axios.get(`${apiBaseUrl}/doctor/doctor/${details.doctorId._id}`, {
                        headers: {
                            Authorization: `Bearer ${userToken}`
                        }
                    })
                    if (setDoctorDetails.status === 200 || setDoctorDetails.status === 201) {
                        dispatch(setSelectedDoctor(setDoctorDetails.data.doctor))
                    }
                } catch (error) {

                }
            })()
        }
    }, [])
    const ChangeAppointmentContent = ({ body }) => {
        return (
            <View style={availabilitySetupStyles.successModalBox}>
                <View style={availabilitySetupStyles.successIconContainer}>
                    <MotiView
                        from={{ translateY: 0 }}
                        animate={{ translateY: 10 }}
                        transition={{
                            type: 'timing',
                            duration: 1000,
                            ease: Easing.linear,
                            loop: true
                        }}
                        style={[availabilitySetupStyles.successIconBackground, { backgroundColor: "#DC0D0D" }]}>
                        {
                            cancelled ?
                                (
                                    <Ionicons
                                        name='checkmark-circle-outline'
                                        size={24}
                                        color={"#0A74B0"}
                                    />
                                ) :
                                (
                                    <AntDesign
                                        name='exclamation'
                                        size={24}
                                        color={"white"}
                                    />
                                )
                        }

                    </MotiView>
                </View>
                <View style={availabilitySetupStyles.successIconContainer}>
                    <Text style={availabilitySetupStyles.successModalTextH1}>{cancelled ? "Appointment canceled." : "Important Notice"}</Text>
                </View>
                <View style={[availabilitySetupStyles.successIconContainer, { height: 100 }]}>
                    <Text style={availabilitySetupStyles.successModalTextP}>{body}</Text>
                </View>
                {
                    cancelled ?
                        (
                            <View style={upcomingAppointmentStyles.rescheculeOrCancelContainer}>
                                <Button
                                    textColor="#FFFBFB"
                                    buttonStyle={[styles.button, { width: "100%" }]}
                                    title="Continue to home"
                                    textStyle={styles.buttonText}
                                    viewStyle={{ paddingHorizontal: 5 }}
                                    onPress={() => {
                                        navigation.dispatch(CommonActions.reset({
                                            index: 0,
                                            routes: [{
                                                name: "App"
                                            }]
                                        }))
                                    }}
                                />
                            </View>
                        ) :
                        (
                            <View style={upcomingAppointmentStyles.rescheculeOrCancelContainer}>
                                <Button
                                    buttonStyle={[styles.button, { marginLeft: 0, borderColor: backgroundColors.patientSelectedBackground }]}
                                    textStyle={styles.buttonText}
                                    viewStyle={{ width: "100%", marginBottom: 0 }}
                                    width="100%"
                                    textColor="white"
                                    onPress={() => {
                                        navigation.navigate("DocDetails",
                                            {
                                                status: "reschedule",
                                                appointmentId: details._id,
                                                appointment: details.doctorId
                                            })
                                        // console.log(details.doctorId);
                                    }}
                                    title={"Reschedule appointment"} />
                                <Button
                                    buttonStyle={[styles.buttonRed, { marginLeft: 0, borderColor: backgroundColors.patientSelectedBackground }]}
                                    textStyle={styles.buttonText}
                                    viewStyle={{ width: "100%", marginBottom: 0 }}
                                    backgroundColor="#DC0D0D"
                                    width="100%"
                                    textColor="white"
                                    onPress={cancelAppointment}
                                    title={"Cancel appointment"} />
                            </View>
                        )
                }

            </View>
        )
    }

    return (
        <SafeAreaView>


            <ScrollView contentContainerStyle={{ backgroundColor: "white", height: height + height / 10 }}>
                <View style={{ gap: 10 }} className="w-full py-5 bg-white">
                    <DocHeader
                        title={`${status?status:""} appointment`}
                        navigation={navigation}
                    />
                    <View
                        style={docDetailsStyle.imageContainer}>
                        <Image
                            source={doctor}
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
                        style={[docDetailsStyle.detailsContainer, { gap: 30 }]}>
                        <View className="flex-row justify-between items-center" style={[calendarPickerStyles.scheduledDate, { gap: 10, borderBottomWidth: 0 }]}>
                            <View>
                                <Text style={availabilitySetupStyles.h1}>{checkUserType(userType) ? `Dr. ${userId.firstname} ${userId.lastname}` : `${userId.firstname} ${userId.lastname}`}</Text>
                                <Text style={availableDoctorsModalStyles.docOccupation}>{checkUserType(userType) ? userId.speciality : userId.gender}</Text>
                            </View>
                            {/* <Text style={availableDoctorsModalStyles.docHospital}>{doctor.hospital}</Text> */}
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => {
                                    checkUserType(userType) ? navigation.navigate("DocDetails",
                                        {
                                            status: "doctorBio",
                                            appointmentId: details.doctorId
                                        }) : navigation.navigate("PatientDetails", {
                                            user: userId,
                                        });
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
                        {
                            isPrescription ?
                                (
                                    <View>
                                        <View style={diagnosisHistoryStyle.diagnosisContainer}>
                                            <View className="w-full flex-row justify-between">
                                                <Text style={diagnosisHistoryStyle.diagnosisContainerH1}>Diagnosis</Text>
                                                {
                                                    status !== "completed" && (
                                                        <Feather
                                                        name='edit'
                                                        size={15}
                                                        color={doctorSelectedBackground}
                                                        onPress={()=>setisPrescriptionModalVisible(true)}
                                                        />
                                                    )
                                                }
                                            </View>
                                            <View style={[diagnosisHistoryStyle.diagnosisInnerContainer, {height: 80}]}>
                                                <Text style={diagnosisHistoryStyle.diagnosisContainerP}>
                                                    {diagnosis}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={diagnosisHistoryStyle.diagnosisContainer}>
                                            <Text style={diagnosisHistoryStyle.diagnosisContainerH1}>Prescription and Recommendation</Text>
                                            <View style={[diagnosisHistoryStyle.diagnosisInnerContainer, {height: 208, justifyContent: 'flex-start'}]}>
                                                <Text style={diagnosisHistoryStyle.diagnosisContainerP}>
                                                    {prescriptionRecommendation}
                                                </Text>
                                            </View>
                                        </View>
                                        {
                                            status !== "completed" && (
                                                <Button
                                                                buttonStyle={[styles.button, { marginTop: 40, borderColor: backgroundColors.patientSelectedBackground }]}
                                                                textStyle={styles.buttonText}
                                                                viewStyle={{ width: "100%", marginBottom: 0 }}
                                                                backgroundColor={doctorSelectedBackground}
                                                                width="100%"
                                                                textColor="white"
                                                                onPress={completeAppointment}
                                                                isLoading={isLoading}disabled={isLoading}
                                                                title={"Complete appointment"} />
                                            )
                                        }
                                    </View>
                                ) :
                                (
                                    <View>
                                        <View style={[upcomingAppointmentStyles.box, { height: 108 }]}>
                                            <Text style={availabilitySetupStyles.h1}>Scheduled date</Text>
                                            <Text style={availableDoctorsModalStyles.docHospital}>{details.day}</Text>
                                            <View>
                                                {
                                                    dayTime.includes(convertTimestampToTime(details.timestamp)) ?
                                                        (
                                                            <View className="flex-row">
                                                                <Feather
                                                                    name='sun'
                                                                    size={20}
                                                                />
                                                                <Text style={calendarPickerStyles.dayOrNightimeText}>  Daytime:</Text>
                                                                <Text style={calendarPickerStyles.dayOrNightimeText}>  {convertTimestampToTime(details.timestamp)} - {endTime}</Text>
                                                            </View>
                                                        ) : (
                                                            <View className="flex-row">
                                                                <MaterialCommunityIcons
                                                                    name='weather-night'
                                                                    size={20}
                                                                />
                                                                <Text style={calendarPickerStyles.dayOrNightimeText}> Nightime:</Text>
                                                                <Text style={calendarPickerStyles.dayOrNightimeText}>  {convertTimestampToTime(details.timestamp)} - {endTime}</Text>
                                                            </View>)
                                                }

                                            </View>
                                        </View>
                                        <View style={[upcomingAppointmentStyles.box, { height: 92 }]}>
                                            <Text style={availabilitySetupStyles.h1}>Connect via</Text>
                                            <View className="flex-row justify-between items-center">
                                                {
                                                    connectOptions.map((option, idx) => {
                                                        return (
                                                            details.modeOfCommunication === option.title && (
                                                                <ConnectButton
                                                                    key={idx}
                                                                    width="30%"
                                                                    iconStyle={[connectButtonStyles.iconStyle, { backgroundColor: option.backgroundColor }]}
                                                                    iconName={option.iconName}
                                                                    title={option.title}
                                                                    textStyle={connectButtonStyles.buttonText} />
                                                            )
                                                        )
                                                    })
                                                }
                                                {
                                                    status === "pending" || status == 'rescheduled' || !status && (
                                                        <TouchableOpacity
                                                    onPress={()=>setjoinModalVisible(true)}
                                                    activeOpacity={1}
                                                    style={[upcomingAppointmentStyles.joinMeetingContainer,{backgroundColor: checkUserType(userType)?patientSelectedBackground:doctorSelectedBackground}]}>
                                                    <Text style={[upcomingAppointmentStyles.joinMeetingContainerText, {color:"#FDFDFD"}]}>Join meeting</Text>
                                                    <AntDesign
                                                        name='arrowright'
                                                        size={20}
                                                        color='#FDFDFD'
                                                    />
                                                </TouchableOpacity>
                                                    )
                                                }
                                                
                                            </View>
                                            {
                                                isMeetingCompleted && checkUserType(userType) ? (
                                                    <Button
                                                        buttonStyle={[styles.button, { marginTop: 40, borderColor: backgroundColors.patientSelectedBackground }]}
                                                        textStyle={styles.buttonText}
                                                        viewStyle={{ width: "100%", marginBottom: 0 }}
                                                        width="100%"
                                                        textColor="white"
                                                        onPress={() => setisReviewModalVisible(true)}
                                                        title={"Rate & Review Doctor"} />
                                                ) : (
                                                    <View style={upcomingAppointmentStyles.rescheculeOrCancelContainer}>
                                                        {
                                                            checkUserType(userType) ?
                                                                (<View className="w-full">
                                                                    <Button
                                                                        buttonStyle={[styles.button2, { marginLeft: 0, borderColor: backgroundColors.patientSelectedBackground }]}
                                                                        textStyle={styles.buttonText}
                                                                        viewStyle={{ width: "100%" }}
                                                                        width="100%"
                                                                        textColor={backgroundColors.patientSelectedBackground}
                                                                        backgroundColor="transparent"
                                                                        onPress={() => {
                                                                            setBody(bodyOfModal[0])
                                                                            setisModalVisible(true)
                                                                        }}
                                                                        title={"Reschedule appointment"} />
                                                                    <Button
                                                                        buttonStyle={[styles.button, { marginLeft: 0, borderColor: backgroundColors.patientSelectedBackground }]}
                                                                        textStyle={styles.buttonText}
                                                                        viewStyle={{ width: "100%", marginBottom: 0 }}
                                                                        width="100%"
                                                                        textColor="white"
                                                                        onPress={() => {
                                                                            setBody(bodyOfModal[1])
                                                                            setisModalVisible(true)
                                                                        }}
                                                                        title={"Cancel appointment"} />
                                                                </View>) :
                                                                (
                                                                    <View className="w-full">
                                                                        <View style={doctorsStyles.careWorkersContainer}>
                                                                            <Text style={doctorsStyles.careWorkersH1}>Diagnosis Report</Text>
                                                                            {
                                                                                diagnosisReportItems.map((item, idx) => {
                                                                                    return (
                                                                                        <View key={idx} style={doctorsStyles.careWorkersItemContainer}>
                                                                                            <Text style={doctorsStyles.careWorkersItemText}>{item.title}</Text>
                                                                                            <AntDesign
                                                                                                name='arrowright'
                                                                                                size={20}
                                                                                                color='#666B6E'
                                                                                                onPress={item.fn}
                                                                                            />
                                                                                        </View>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </View>
                                                                        {
                                                                            status === "completed" && (
                                                                                <TouchableOpacity
                                                                                activeOpacity={1}
                                                                                onPress={() => setPrescription(true)}
                                                                                style={[doctorsStyles.careWorkersItemContainer, {backgroundColor: doctorSelectedBackground, marginTop: 10}]}>
                                                                                            <Text style={[doctorsStyles.careWorkersItemText, {color: 'white'}]}>My notes and prescription.</Text>
                                                                                            <AntDesign
                                                                                                name='arrowright'
                                                                                                size={20}
                                                                                                color='white'
                                                                                            />
                                                                                        </TouchableOpacity>
                                                                            )
                                                                        }
                                                                        {
                                                                            isMeetingCompleted && !checkUserType(userType) && (
                                                                                <Button
                                                                                    buttonStyle={[styles.button, { marginTop: 40, borderColor: patientSelectedBackground }]}
                                                                                    textStyle={styles.buttonText}
                                                                                    backgroundColor={doctorSelectedBackground}
                                                                                    viewStyle={{ width: "100%", marginBottom: 0 }}
                                                                                    width="100%"
                                                                                    textColor="white"
                                                                                    onPress={() => setPrescription(true)}
                                                                                    title={"Make prescription"} />
                                                                            )
                                                                        }

                                                                    </View>
                                                                )
                                                        }

                                                    </View>
                                                )
                                            }

                                        </View>

                                    </View>
                                )
                        }

                    </MotiView>
                </View>
            </ScrollView>
            <CustomModal
                visibility={isModalVisible}
                animationType={"fade"}
                closeModal={closeModal}
                height={!cancelled ? 380 : null}
                component={<ChangeAppointmentContent
                    body={body}
                />}
            />
            <CustomModal
                visibility={isReviewModalVisible}
                animationType={"fade"}
                closeModal={closeReviewModal}
                component={<RatingAndReview
                    id={details._id}
                    closeModal={closeReviewModal}
                />}
            />
            <CustomModal
                visibility={isPrescriptionModalVisible}
                animationType={"fade"}
                closeModal={closeReviewModal}
                component={<DiagnosisPrescription
                    setPrescription={setPrescriptionRecommendation} 
                    setdiagnosis={setDiagnosis}
                    heading={"Diagnosis & Prescription"}
                    closeModal={closePrescriptionModal}
                />}
            />
            <CustomModal
                    visibility={isJoinModalVisible}
                    animationType={"fade"}
                    closeModal={closeJoinModal}
                    component={modalContent}
                    />
                    <CustomModal
                    visibility={isCompleteModalVisible}
                    animationType={"fade"}
                    closeModal={closeCompleteModal}
                    component={modal_Content}
                    />
            {
                isLoading && (
                    <CeliaPreloader />
                )
            }

        </SafeAreaView>
    )
}

export default AppointmentDetails