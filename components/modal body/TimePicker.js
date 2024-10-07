import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DocHeader from '../includes/DocHeader'
import talkToADocStyle from '../../styles/talkToADocStyles'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import Button from '../buttons/Button'
import { styles } from '../../styles/Styles'
import { docDetailsStyle } from '../../styles/docDetailsStyles'

const TimePicker = (props) => {
    const { openStepFour, setSelectedOption, selectedOption } = props
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
    const [selectedTime, setSelectedTime] = useState("")
    return (
        <View
            className="py-2 w-full flex-col justify-center"
        >
            <DocHeader title={"Pick time"} />
            <View style={{ height: 20 }}>

            </View>
            <View style={talkToADocStyle.timePickerContainer}>
                <View style={talkToADocStyle.dayAndNightTimeContainer}>
                    <View style={talkToADocStyle.dayAndNightTimeContainer}>
                        <Text style={talkToADocStyle.timeePickerH1}>Thurs, 17 Januuary 2023</Text>
                    </View>
                    <View style={talkToADocStyle.daySelectorContainer}>
                        <View style={talkToADocStyle.daySelectorIconContainer}>

                        </View>
                        <View style={talkToADocStyle.daySelectorTimeContainer}>
                            {
                                dayTime.map((timeObj, index) => {
                                    return (
                                        <TouchableOpacity
                                            activeOpacity={1}
                                            disabled={!timeObj.status}
                                            onPress={() => setSelectedOption(timeObj.time)}
                                            style={[talkToADocStyle.timeButton, { backgroundColor: !timeObj.status ? "#F3F5F6" : selectedOption === timeObj.time ? "#0D91DC" : "white" }]}
                                            key={index}
                                        >
                                            <Text style={[selectedOption === timeObj.time ? talkToADocStyle.selectedTimeText : talkToADocStyle.unselectedTimeText, { color: !timeObj.status ? "#A5ADB1" : selectedOption === timeObj.time ? 'white' : '#27292A' }]}>{timeObj.time}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </View>
                    <View style={talkToADocStyle.daySelectorIconContainer2}>
                        <Feather
                            name='sun'
                            size={18}
                        />
                        <MaterialCommunityIcons
                            name='weather-night'
                            size={18}
                        />
                    </View>
                </View>
            </View>
            <View className="w-full">
                <Button
                    onPress={openStepFour}
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                    viewStyle={[docDetailsStyle.buttonContainer, { paddingVertical: 0 }]}
                    title={"Continue"} />

            </View>
        </View>
    )
}

export default TimePicker