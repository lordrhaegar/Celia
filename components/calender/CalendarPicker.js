import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { docDetailsStyle } from '../../styles/docDetailsStyles'
import { availableDoctorsModalStyles } from '../../styles/availableDoctorsModalStyles'
import { MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'
import docTimePickerStyle from '../../styles/docTimePickerStyle'
import { availabilitySetupStyles } from '../../styles/availabilitySetupStyles'
import { apiBaseUrl, backgroundColors, checkMatch, connectOptions, convertTimestampToDate, convertTimestampToTime, dayTime, textColors } from '../../constants/constants'
import AppointmentPicker from '../time picker/AppointmentPicker'
import TimePicker from '../time picker/TimePicker'
import { styles } from '../../styles/Styles'
import Button from '../buttons/Button'
import { calendarPickerStyles } from '../../styles/calendarPickerStyles'
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { connectButtonStyles } from '../../styles/connectButtonStyles'
import ConnectButton from '../buttons/ConnectButton'
import CustomModal from '../modals/Modal'
import CeliaPreloader from '../preloader/CeliaPreloader'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { CommonActions } from '@react-navigation/native'

const CalendarPicker = (props) => {
    const {
        doctorAvailability,
        doctorId,
        timestamp,
        setTimestamp,
        day,
        setDay,
        extra,
        questionNo,
        setQuestionNo,
        navigation,
        setIsLoading,
        symptoms,
        status, 
        appointmentId
    } = props
    const [complete, setComplete] = useState(false)
    const [stepOne, setStepOne] = useState(true)
    const [stepTwo, setStepTwo] = useState(false)
    const [stepThree, setStepThree] = useState(false)
    const [modeOfCommunication, setmodeOfCommunication] = useState("")
    const [endTimeStamp, setEndTimeStamp] = useState("")
    const [isModalVisible, setisModalVisible] = useState(false)
    const {userToken} = useSelector((state)=>state.auth)
    const closeModal = () => {
        setisModalVisible(false)
    }
    
    const rescheduleAppointment = async()=>{
        setIsLoading(true)
        try {
            const rescheduleAppointment = await axios.put(`${apiBaseUrl}/appointment/reschedule`, {
                appointmentId,
                timestamp,
                day,
            }, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            if (rescheduleAppointment.status === 200 || rescheduleAppointment.status === 201) {
                setisModalVisible(true)
            }
        } catch (error) {
        }finally{
            setIsLoading(false)
        }
    }
    const handleBookAppointment = async () => {
        setIsLoading(true)
        console.log(timestamp);
        try {
            const bookAppointment = await axios.post(`${apiBaseUrl}/appointment/book`, {
                doctorId,
                timestamp,
                day,
                symptoms,
                modeOfCommunication
            }, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            if (bookAppointment.status === 200 || bookAppointment.status === 201) {
                setisModalVisible(true)
            }
        } catch (error) {
            console.log(error.response.data);
        }finally{
            setIsLoading(false)
        }
    }
    useEffect(() => {
        if (timestamp) {
            const endTimeStamp = timestamp + 30 * 60 * 1000
            setEndTimeStamp(convertTimestampToTime(endTimeStamp))
        }
    }, [timestamp])
    
    const goToStepTwo = () => {
        setStepOne(false)
        setStepTwo(true)
    }
    const goToStepOne = () => {
        setStepTwo(false)
        setStepOne(true)
    }
    const goToStepThree = () => {
        setStepOne(false)
        setStepTwo(false)
        setStepThree(true)
    }
    const goToStepFour = () => {
        setStepOne(false)
        setStepTwo(false)
        setStepThree(false)
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
                <Text style={availabilitySetupStyles.successModalTextH1}>Successful</Text>
            </View>
            <View style={[availabilitySetupStyles.successIconContainer, { height: 100 }]}>
                <Text style={availabilitySetupStyles.successModalTextP}>
                {`Your appointment with the Doctor has been ${ status === "reschedule"? "rescheduled":"booked"} successfully. Kindly make sure you are available at the agreed time. You can find your appointment details under the doctor menu.`}
                </Text>
            </View>
            <View>
                <Button
                    textColor="#FFFBFB"
                    buttonStyle={[styles.button, { width: "100%" }]}
                    title="Continue to home"
                    textStyle={styles.buttonText}
                    viewStyle={{ paddingHorizontal: 5 }}
                    onPress={()=>{
                        navigation.dispatch(CommonActions.reset({
                            index: 0,
                            routes: [{
                                name: "App"
                            }]
                        }))
                    }}
                />
            </View>
        </View>
    )

    return (
        <View className={`${extra}`} style={docDetailsStyle.workingTimeContainer}>
            <View className="flex-row w-full flex-wrap gap-5 ">

                {
                    stepOne ? (
                        <View style={{ gap: 10 }} className="flex-row flex-wrap">
                            <Text style={calendarPickerStyles.docAvailableText}>
                                Here’s the Doctors available days. Pick one that suits you best.
                            </Text>
                            {
                                doctorAvailability.map((availabilityObj, idx) => {
                                    return (
                                        <TouchableOpacity
                                            key={idx}
                                            onPress={() => {
                                                if (day === availabilityObj.day) {
                                                    setDay("")
                                                } else {
                                                    setQuestionNo(idx)
                                                    setDay(availabilityObj.day)
                                                    goToStepTwo()
                                                }
                                            }}
                                            style={[availabilitySetupStyles.dayBox, {
                                                borderColor: "#0D91DC",
                                                borderWidth: 1,
                                                backgroundColor: checkMatch(day, availabilityObj.day) ? "#0D91DC" : "white"
                                            }]}
                                        >
                                            <Text style={[availabilitySetupStyles.dayText, { color: checkMatch(day, availabilityObj.day) ? "white" : "#27292A" }]}>{availabilityObj.day}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    ) : stepTwo ? (
                        <View style={{ gap: 20 }} >
                            <MotiView
                                from={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{
                                    type: 'spring',
                                    duration: 2000,
                                    ease: Easing.linear
                                }}
                                style={{ marginTop: 20 }}
                            >
                                <Text style={availableDoctorsModalStyles.docHospital}>Selected day</Text>
                                <View
                                    style={[availabilitySetupStyles.dayBox, { backgroundColor: "#0D91DC", marginTop: 10 }]}
                                >
                                    <Text style={[availabilitySetupStyles.dayText, { color: "white" }]}>{day}</Text>
                                </View>
                            </MotiView>
                            <AppointmentPicker
                                timeStamp={timestamp}
                                setTimestamp={setTimestamp}
                                availability={doctorAvailability[questionNo].availableTimes}
                            />
                            {
                                !complete ? (
                                    <View style={{ gap: 20 }} className="w-full flex-row items-center justify-center">
                                        {

                                            <Button
                                                buttonStyle={[styles.button, { marginLeft: 0 }]}
                                                textStyle={styles.buttonText}
                                                viewStyle={{ width: "45%", marginBottom: 0 }}
                                                width="100%"
                                                textColor="white"
                                                backgroundColor={backgroundColors.patientSelectedBackground}
                                                onPress={() => {
                                                    goToStepOne()
                                                }}
                                                title={"Prev"} />
                                        }

                                        <Button
                                            buttonStyle={[styles.button, { marginLeft: 0 }]}
                                            textStyle={styles.buttonText}
                                            viewStyle={{ width: "45%", marginBottom: 0 }}
                                            width="100%"
                                            disabled={!timestamp}
                                            textColor="white"
                                            backgroundColor={timestamp ? backgroundColors.patientSelectedBackground : '#66B6FF'}
                                            onPress={status === "reschedule" ? goToStepFour : goToStepThree}
                                            title={"Next"} />

                                    </View>
                                ) : (
                                    <View className="w-full flex-row items-center justify-center">
                                        <Button
                                            buttonStyle={[styles.button2, { marginLeft: 0 }]}
                                            textStyle={styles.buttonText}
                                            viewStyle={{ width: "45%", marginBottom: 0 }}
                                            width="100%"
                                            textColor="black"
                                            backgroundColor="transparent"
                                            title={"Save"} />
                                    </View>
                                )
                            }

                        </View>
                    ) : stepThree ? (
                        <View className="w-full" style={{ gap: 30 }} >
                            <MotiView
                                from={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{
                                    type: 'spring',
                                    duration: 2000,
                                    ease: Easing.linear
                                }}
                                style={calendarPickerStyles.scheduledDayandTimeBox}
                            >
                                <Text style={availableDoctorsModalStyles.docHospital}>{`${status === "reschedule"? "Res":"S"}cheduled day and time`}</Text>
                                <View className="flex-row items-center justify-start w-full gap-5">
                                    <View
                                        style={[availabilitySetupStyles.dayBox, { backgroundColor: "#0D91DC", marginTop: 10 }]}
                                    >
                                        <Text style={[availabilitySetupStyles.dayText, { color: "white" }]}>{day}</Text>
                                    </View>
                                    {
                                        dayTime.includes(convertTimestampToTime(timestamp)) ?
                                            (
                                                <View className="flex-row">
                                                    <Feather
                                                        name='sun'
                                                        size={20}
                                                    />
                                                    <Text style={calendarPickerStyles.dayOrNightimeText}>  Daytime:</Text>
                                                </View>
                                            ) : (
                                                <View className="flex-row">
                                                    <MaterialCommunityIcons
                                                        name='weather-night'
                                                        size={20}
                                                    />
                                                    <Text style={calendarPickerStyles.dayOrNightimeText}> Nightime:</Text>
                                                </View>
                                            )
                                    }
                                    <View
                                        style={[availabilitySetupStyles.dayBox, { backgroundColor: "#0D91DC", marginTop: 10 }]}
                                    >
                                        <Text style={[availabilitySetupStyles.dayText, { color: "white" }]}>{convertTimestampToTime(timestamp)}</Text>
                                    </View>
                                </View>
                            </MotiView>
                            <MotiView
                                from={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{
                                    type: 'spring',
                                    duration: 2000,
                                    ease: Easing.linear
                                }}
                                className="w-full gap-5"
                            >
                                <Text style={calendarPickerStyles.docAvailableText}>
                                    Choose your preferred mode of communication
                                </Text>
                                <View style={{ gap: 20 }} className="w-full flex-row flex-wrap">
                                    {
                                        connectOptions.map((option, index) => {
                                            return (
                                                <ConnectButton
                                                    width="45%"
                                                    borderWidth={1}
                                                    borderColor={modeOfCommunication === option.title ? backgroundColors.patientSelectedBackground : null}
                                                    key={index}
                                                    iconStyle={[connectButtonStyles.iconStyle, { backgroundColor: option.backgroundColor }]}
                                                    iconName={option.iconName}
                                                    title={option.title}
                                                    onPress={() => {
                                                        modeOfCommunication === option.title ?
                                                            setmodeOfCommunication("") :
                                                            setmodeOfCommunication(option.title)
                                                    }}
                                                    textStyle={connectButtonStyles.buttonText} />
                                            )
                                        })
                                    }
                                </View>
                            </MotiView>
                            <Button
                                buttonStyle={[styles.button]}
                                textStyle={styles.buttonText}
                                viewStyle={{ width: "100%", alignItems: 'center' }}
                                width="90%"
                                disabled={!modeOfCommunication}
                                textColor="white"
                                backgroundColor={modeOfCommunication ? backgroundColors.patientSelectedBackground : '#66B6FF'}
                                onPress={goToStepFour}
                                title={"Next"} />
                        </View>
                    ) : (
                        <View style={{gap: 10}} className="w-full">
                            <View style={[calendarPickerStyles.scheduledDate, {height: 108}]}>
                                <Text style={availabilitySetupStyles.h1}>{`${status === "reschedule"? "Res":"S"}cheduled date`}</Text>
                                <Text style={availableDoctorsModalStyles.docHospital}>{/*{convertTimestampToDate(timestamp)}*/} {day}</Text>
                                <View>
                                    {
                                        dayTime.includes(convertTimestampToTime(timestamp)) ?
                                            (
                                                <View className="flex-row">
                                                    <Feather
                                                        name='sun'
                                                        size={20}
                                                    />
                                                    <Text style={calendarPickerStyles.dayOrNightimeText}>  Daytime:</Text>
                                                    <Text style={calendarPickerStyles.dayOrNightimeText}>  {convertTimestampToTime(timestamp)} - {endTimeStamp}</Text>
                                                </View>
                                            ) : (
                                                <View className="flex-row">
                                                    <MaterialCommunityIcons
                                                        name='weather-night'
                                                        size={20}
                                                    />
                                                    <Text style={calendarPickerStyles.dayOrNightimeText}> Nightime:</Text>
                                                    <Text style={calendarPickerStyles.dayOrNightimeText}>  {convertTimestampToTime(timestamp)} - {endTimeStamp}</Text>
                                                </View>
                                            )
                                    }
                                </View>
                            </View>
                            {
                                status !== "reschedule" && (
                                    <View style={[calendarPickerStyles.scheduledDate, {height: 92, borderBottomWidth: 0 }]}>
                                <Text style={availabilitySetupStyles.h1}>Connect via</Text>
                                <View>
                                    {
                                        connectOptions.map((option, idx)=>{
                                            return (
                                                modeOfCommunication === option.title && (
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
                                </View>
                            </View>
                                )
                            }
                            {
                                status === "reschedule" ? (
                                    <Button
                                buttonStyle={[styles.button]}
                                textStyle={styles.buttonText}
                                viewStyle={{ width: "100%", alignItems: 'center', marginTop: 20 }}
                                width="90%"
                                disabled={false}
                                textColor="white"
                                backgroundColor={modeOfCommunication || status === "reschedule" ? backgroundColors.patientSelectedBackground : '#66B6FF'}
                                onPress={rescheduleAppointment}
                                title={"Confirm appointment"} />
                                ) : 
                                (
                                    <Button
                                buttonStyle={[styles.button]}
                                textStyle={styles.buttonText}
                                viewStyle={{ width: "100%", alignItems: 'center', marginTop: 20 }}
                                width="90%"
                                disabled={!modeOfCommunication}
                                textColor="white"
                                backgroundColor={modeOfCommunication ? backgroundColors.patientSelectedBackground : '#66B6FF'}
                                onPress={handleBookAppointment}
                                title={"Confirm appointment"} />
                                )
                            }
                            
                        </View>
                    )
                }

            </View>
            <CustomModal
                    visibility={isModalVisible}
                    animationType={"fade"}
                    closeModal={closeModal}
                    component={modalContent}
                    />
                    
        </View>
    )
}

export default CalendarPicker