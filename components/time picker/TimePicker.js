import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import Button from '../buttons/Button'
import { styles } from '../../styles/Styles'
import { docDetailsStyle } from '../../styles/docDetailsStyles'
import { availabilitySetupStyles } from '../../styles/availabilitySetupStyles'
import docTimePickerStyle from '../../styles/docTimePickerStyle'
import { MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'

const TimePicker = (props) => {
    const { dayTime,
        nightTime,
        setAvailability,
        daysOfTheWeek,
        questionNo,
        availability,
        setQuestionNo,
        goToStepTwo
    } = props
    const [selectedTimes, setSelectedTimes] = useState([])
    const [complete, setComplete] = useState(false)

    function convertTimeToTimestamp(time) {
        const date = new Date();
        const [hours, period] = time.split(/(\d+)/).filter(Boolean);
        date.setHours(hours + (period.toLowerCase() === 'pm' ? 12 : 0), 0, 0, 0);
        return date.getTime();
    }
    
    const removeDuplicates = (array)=>{
        let result = {};
        array.forEach(item => {
            result[item.day] = item;
        });
        return Object.values(result);
    }
    return (
        <View
            className="w-full mt-5 flex-col justify-center"
        >
            <View >
                    <Text style={availabilitySetupStyles.h1}>
                        Select available times on {daysOfTheWeek[questionNo]}
                    </Text>
                </View>
            <MotiView
                from={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                    type: 'spring',
                    duration: 2000,
                    ease: Easing.bounce
                }}
                style={docTimePickerStyle.timePickerContainer}>
                <View style={docTimePickerStyle.dayAndNightTimeContainer}>
                    <View style={docTimePickerStyle.daySelectorContainer}>
                        <View style={docTimePickerStyle.daySelectorIconContainer}>
                            <Feather
                                name='sun'
                                size={18}
                            />
                        </View>
                        <View style={docTimePickerStyle.daySelectorTimeContainer}>
                            {
                                dayTime.map((timeObj, index) => {
                                    return (
                                        <TouchableOpacity
                                            activeOpacity={0}
                                            disabled={!timeObj.status}
                                            style={[docTimePickerStyle.timeButton, { backgroundColor: selectedTimes.includes(convertTimeToTimestamp(timeObj.time)) ? "#7CD1D1" : "white" }]}
                                            key={index}
                                            onPress={() => {
                                                let timeStamp = convertTimeToTimestamp(timeObj.time)
                                                if (selectedTimes.includes(timeStamp)) {
                                                    const updatedList = [...selectedTimes];
                                                    updatedList.splice(updatedList.indexOf(timeObj.time), 1);
                                                    setSelectedTimes(updatedList)
                                                } else {
                                                    const newSelectedTimes = []
                                                    let timeStamp = convertTimeToTimestamp(timeObj.time)
                                                    newSelectedTimes.push(timeStamp)
                                                    setSelectedTimes([...selectedTimes, ...newSelectedTimes])
                                                }

                                            }}
                                        >
                                            <Text style={[selectedTimes.includes(convertTimeToTimestamp(timeObj.time)) ? docTimePickerStyle.selectedTimeText : docTimePickerStyle.unselectedTimeText, { color: !timeObj.status ? "#A5ADB1" : selectedTimes.includes(convertTimeToTimestamp(timeObj.time)) ? "#FDFDFD" : "#27292A" }]}>{timeObj.time}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }

                        </View>
                    </View>
                    <View style={docTimePickerStyle.daySelectorContainer}>
                        <View style={docTimePickerStyle.daySelectorIconContainer}>
                            <MaterialCommunityIcons
                                name='weather-night'
                                size={18}
                                color={'black'}
                            />
                        </View>
                        <View style={docTimePickerStyle.daySelectorTimeContainer}>
                            {
                                nightTime.map((timeObj, index) => {
                                    return (
                                        <TouchableOpacity
                                            activeOpacity={0}
                                            disabled={!timeObj.status}
                                            style={[docTimePickerStyle.timeButton, { backgroundColor: selectedTimes.includes(timeObj.time) ? "#7CD1D1" : "white" }]}
                                            key={index}
                                            onPress={() => {
                                                if (selectedTimes.includes(timeObj.time)) {
                                                    const updatedList = [...selectedTimes];
                                                    updatedList.splice(updatedList.indexOf(timeObj.time), 1);
                                                    setSelectedTimes(updatedList)
                                                } else {
                                                    const newSelectedTimes = []
                                                    newSelectedTimes.push(timeObj.time)
                                                    setSelectedTimes([...selectedTimes, ...newSelectedTimes])
                                                }

                                            }}
                                        >
                                            <Text style={[selectedTimes.includes(timeObj.time) ? docTimePickerStyle.selectedTimeText : docTimePickerStyle.unselectedTimeText, { color: !timeObj.status ? "#A5ADB1" : selectedTimes.includes(timeObj.time) ? "#FDFDFD" : "#27292A" }]}>{timeObj.time}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }

                        </View>
                    </View>

                </View>
            </MotiView>
            {
                !complete ? (
                    <View style={{ gap: 20 }} className="w-full flex-row items-center justify-center">
                        {
                            questionNo > 0 && (
                                <Button
                                    buttonStyle={[styles.button, { marginLeft: 0 }]}
                                    textStyle={styles.buttonText}
                                    viewStyle={{ width: "45%", marginBottom: 0 }}
                                    width="100%"
                                    textColor="white"
                                    backgroundColor="#7CD1D1"
                                    onPress={() => {
                                        if (questionNo === 0) {
                                        } else {
                                            setQuestionNo(questionNo - 1)
                                        }
                                    }}
                                    title={"Prev"} />
                            )
                        }

                        <Button
                            buttonStyle={[styles.button, { marginLeft: 0 }]}
                            textStyle={styles.buttonText}
                            viewStyle={{ width: "45%", marginBottom: 0 }}
                            width="100%"
                            textColor="white"
                            backgroundColor="#7CD1D1"
                            onPress={() => {
                                const dateTimeObj = {}
                                dateTimeObj.day = daysOfTheWeek[questionNo].toUpperCase()
                                dateTimeObj.availableTimes = selectedTimes
                                let result = {};
                                let updatedDateTime = removeDuplicates([...availability, dateTimeObj])
                                setAvailability(updatedDateTime)
                                if (questionNo === daysOfTheWeek.length - 1) {
                                    setComplete(true)
                                } else {
                                    setQuestionNo(questionNo + 1)
                                }
                            }}
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
                            onPress={goToStepTwo}
                            title={"Save"} />
                    </View>
                )
            }

        </View>
    )
}

export default TimePicker