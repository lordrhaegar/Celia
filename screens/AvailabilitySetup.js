import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import DocHeader2 from '../components/includes/DocHeader2'
import { styles } from '../styles/Styles'
import { availabilitySetupStyles } from '../styles/availabilitySetupStyles'
import TimePicker from '../components/time picker/TimePicker'
import { docDetailsStyle } from '../styles/docDetailsStyles'
import ConnectButton from '../components/buttons/ConnectButton'
import { connectButtonStyles } from '../styles/connectButtonStyles'
import Button from '../components/buttons/Button'

const AvailabilitySetup = ({ navigation }) => {
    const { height, width } = Dimensions.get('window')
    const [questionNo, setQuestionNo] = useState(0);
    const [communication_prefrence, setCommunication_prefrence] = useState("")
    const [availability, setAvailability] = useState([])
    const [stepOne, setStepOne] = useState(true)
    const [stepTwo, setStepTwo] = useState(false)
    const goToStepTwo = () => {
        setStepOne(false)
        setStepTwo(true)
    }
    const connectOptions = [
        { backgroundColor: '#96DADA', iconName: "telephone", title: "Voice call", value: "AUDIO" },
        { backgroundColor: '#6EBDEA', iconName: "video", title: "Video call", value: "VIDEO" }
    ]

    const dayTime = [
        { time: "8am", status: true },
        { time: "9am", status: true },
        { time: "10am", status: true },
        { time: "11am", status: true },
        { time: "12pm", status: true },
        { time: "1pm", status: true },
        { time: "2pm", status: true },
        { time: "3pm", status: true },
        { time: "4pm", status: true },
        { time: "5pm", status: true },
        { time: "6pm", status: true },
        { time: "7pm", status: true },

    ]
    const nightTime = [
        { time: "8pm", status: true },
        { time: "9pm", status: true },
        { time: "10pm", status: true },
        { time: "11pm", status: false },
        { time: "12am", status: false },
        { time: "1am", status: false },
        { time: "2am", status: false },
        { time: "3am", status: false },
        { time: "4am", status: false },
        { time: "5am", status: false },
        { time: "6am", status: false },
        { time: "7am", status: false },
    ]
    const daysOfTheWeek = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ]

    return (
        <View
            style={[availabilitySetupStyles.scrollView, { height: height, paddingTop: 50 }]}>
            <DocHeader2
                title="Availability Setup"
                navigator={navigation}
            />
            <View style={{ gap: 20 }}>

                <View className="px-5">
                    <Text style={availabilitySetupStyles.p}>
                        Set up your calendar so patients can know when you would be available for consultations.
                    </Text>
                </View>
                {
                    stepOne && (
                        <View style={{ gap: 20 }} className="px-5">
                            <View >
                                <Text style={availabilitySetupStyles.p}>
                                    Choose the time for each particular day of the week when you'll be avaialable, leave times for days not available unselected.
                                </Text>
                            </View>
                            <TouchableOpacity style={[availabilitySetupStyles.dayBox, {
                                borderColor:
                                    "#63A7A7"
                            }]}
                            >
                                <Text style={availabilitySetupStyles.dayText}>{daysOfTheWeek[questionNo]}</Text>
                            </TouchableOpacity>
                            <TimePicker dayTime={dayTime} 
                                nightTime={nightTime} 
                                setAvailability={setAvailability}
                                questionNo={questionNo}
                                daysOfTheWeek={daysOfTheWeek}
                                availability={availability}
                                setQuestionNo={setQuestionNo}
                                goToStepTwo={goToStepTwo}
                            />
                        </View>
                    )
                }
                {
                    stepTwo && (
                        <View style={{ gap: 20 }} className="px-5">
                            <Text style={availabilitySetupStyles.p}>
                                Choose your preferred mode of communication
                            </Text>
                            <View className="flex-row justify-between">
                                {
                                    connectOptions.map((option, index) => {
                                        return (
                                            <ConnectButton
                                                onPress={() => {
                                                    setCommunication_prefrence(option.value)
                                                }}
                                                key={index}
                                                width="45%"
                                                iconStyle={[connectButtonStyles.iconStyle, { backgroundColor: option.backgroundColor }]}
                                                iconName={option.iconName}
                                                title={option.title}
                                                borderColor={communication_prefrence === option.value ? "#63A7A7" : "#666B6E"}
                                                textStyle={connectButtonStyles.buttonText} />
                                        )
                                    })
                                }
                            </View>
                        </View>
                    )
                }
            </View>
            {
                stepTwo && (
                    <Button
                        textColor="#FFFBFB"
                        buttonStyle={[styles.button, { width: "100%" }]}
                        title="Preview and confirm settings"
                        backgroundColor='#7CD1D1'
                        viewStyle={[availabilitySetupStyles.previewButton, { bottom: 0, paddingHorizontal: 5 }]}
                        onPress={()=>navigation.navigate("AvailabilitySetupPreview", {comms: communication_prefrence, availa_bility: availability})}
                        textStyle={styles.buttonText}

                    />
                )
            }
        </View>
    )
}

export default AvailabilitySetup