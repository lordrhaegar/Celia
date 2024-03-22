import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import FormHeaderTitle from '../includes/FormHeaderTitle'
import Button from '../buttons/Button'
import { styles } from '../../styles/Styles'
import { docDetailsStyle } from '../../styles/docDetailsStyles'
import DateTimePicker from './DateTimePicker'
import TimePicker from './TimePicker'
import Connect from './Connect'
import { useDispatch, useSelector } from 'react-redux'

const ScheduleAnAppointment = ({ navigation, closeModal }) => {
    const { doctor } = useSelector((state)=>state.doctor)
    const dispatch = useDispatch()
    const [stepOne, setStepOne] = useState(true)
    const [stepTwo, setStepTwo] = useState(false)
    const [stepThree, setStepThree] = useState(false)
    const [stepFour, setStepFour] = useState(false)
    const [selectedDate, setSelectedDate] = useState("")
    const [selectedTime, setSelectedTime] = useState("")
    
    const openStepTwo = () => {
        setStepTwo(true)
        setStepOne(false)
    }
    const openStepThree = () => {
        setStepThree(true)
        setStepTwo(false)
    }
    const openStepFour = () => {
        setStepFour(true)
        setStepThree(false)
    }
    const openUrl = (url)=>{
        Linking.canOpenURL(url).then((supported)=>{
            if (supported) {
                Linking.openURL(url)
                closeModal()
            }else{
                console.log(`Cant open ${url}`);
            }
        }).catch((err)=>console.error("Error:", err))
    }
    return (
        <View
            className="py-10 px-5 w-full flex-col items-center justify-center"
            style={{ width: '100%' }}
        >
            {
                stepOne ? (
                    <View className="w-full">
                        <FormHeaderTitle color="#0D91DC" title={"Schedule An Appointment"} />
                        <Button
                            textColor="white"
                            buttonStyle={styles.button}
                            width="90%"
                            textStyle={styles.buttonText}
                            viewStyle={[docDetailsStyle.buttonContainer, { paddingVertical: 0 }]}
                            title={"Use Calendaly"} 
                            onPress={()=>openUrl(doctor.booking_link)}
                            />
                        <Button
                            buttonStyle={styles.button2}
                            backgroundColor='white'
                            width="90%"
                            textStyle={styles.buttonText}
                            viewStyle={[docDetailsStyle.buttonContainer, { paddingVertical: 0 }]}
                            title={"Apple Calendar Coming Soon"} />
                        {/* <TouchableOpacity
                            onPress={openStepTwo}
                            style={docDetailsStyle.scheduleManually}>
                            <Text style={docDetailsStyle.scheduleManuallyText}>Schedule manually</Text>
                        </TouchableOpacity> */}
                    </View>
                ) : stepTwo ? (
                    <DateTimePicker
                        navigation={navigation}
                        setSelectedOption={setSelectedDate}
                        closeModal={openStepThree} />
                ) : stepThree ? (
                <TimePicker
                selectedOption={selectedTime}
                setSelectedOption={setSelectedTime} 
                openStepFour={openStepFour} />
                ) : stepFour ? (<Connect
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    closeModal={closeModal}/>) : (<></>)
            }

        </View>
    )
}

export default ScheduleAnAppointment