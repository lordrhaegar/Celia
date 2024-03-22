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
import { backgroundColors, convertTimestampToTime, dayTime, nightTime, textColors } from '../../constants/constants'
import { availableDoctorsModalStyles } from '../../styles/availableDoctorsModalStyles'
import { calendarPickerStyles } from '../../styles/calendarPickerStyles'

const AppointmentPicker = (props) => {
    const {
        availability,
        timeStamp,
        setTimestamp,
        status
    } = props
    return (
        <View
            className="w-full mt-5 flex-col justify-center"
        >
            <View >
                    <Text style={calendarPickerStyles.docAvailableText}>
                    Pick a time. Remember you only have 30mins with the Doctor.
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
                    <View style={[docTimePickerStyle.daySelectorContainer, {paddingHorizontal: 0}]}>
                        <View style={docTimePickerStyle.daySelectorIconContainer}>
                            <Feather
                                name='sun'
                                size={18}
                            />
                        </View>
                        <View style={docTimePickerStyle.daySelectorTimeContainer}>
                            {
                                availability.map((time_stamp, index) => { 
                                    return (
                                        dayTime.includes(convertTimestampToTime(time_stamp)) ? (
                                            <TouchableOpacity
                                            activeOpacity={0}
                                            style={[docTimePickerStyle.timeButton, 
                                                { 
                                                    backgroundColor: timeStamp === time_stamp ? backgroundColors.patientSelectedBackground : backgroundColors.unselectedBackground , borderWidth: timeStamp === time_stamp ? 0: 1, borderColor: backgroundColors.patientSelectedBackground
                                                }]}
                                            key={index}
                                            onPress={() => {
                                                if (timeStamp === time_stamp) {
                                                    setTimestamp("")
                                                }else{
                                                    setTimestamp(time_stamp)
                                                }
                                            }}
                                        >
                                            <Text style={[timeStamp === time_stamp ? docTimePickerStyle.selectedTimeText : docTimePickerStyle.unselectedTimeText, {color: timeStamp === time_stamp ? textColors.SelectedText : textColors.UnselectedText }]}>{convertTimestampToTime(time_stamp)}</Text>
                                        </TouchableOpacity>
                                        ) : (<></>)
                                        
                                    )
                                })
                            }

                        </View>
                    </View>
                    <View style={[docTimePickerStyle.daySelectorContainer, {paddingHorizontal: 0}]}>
                        <View style={docTimePickerStyle.daySelectorIconContainer}>
                        <MaterialCommunityIcons
                                name='weather-night'
                                size={18}
                                color={'black'}
                            />
                        </View>
                        <View style={docTimePickerStyle.daySelectorTimeContainer}>
                            {
                                availability.map((time_stamp, index) => { 
                                    return (
                                        nightTime.includes(convertTimestampToTime(time_stamp)) ? (
                                            <TouchableOpacity
                                            activeOpacity={0}
                                            style={[docTimePickerStyle.timeButton, { backgroundColor: timeStamp === time_stamp ? backgroundColors.patientSelectedBackground : backgroundColors.unselectedBackground , borderWidth: timeStamp === time_stamp ? 0: 1,borderColor: backgroundColors.patientSelectedBackground}]}
                                            key={index}
                                            onPress={() => {
                                                if (timeStamp === time_stamp) {
                                                    setTimestamp("")
                                                }else{
                                                    setTimestamp(time_stamp)
                                                }
                                            }}
                                        >
                                            <Text style={[timeStamp === time_stamp ? docTimePickerStyle.selectedTimeText : docTimePickerStyle.unselectedTimeText, {color: timeStamp === time_stamp ? textColors.SelectedText : textColors.UnselectedText }]}>{convertTimestampToTime(time_stamp)}</Text>
                                        </TouchableOpacity>
                                        ) : (<></>)
                                        
                                    )
                                })
                            }

                        </View>
                    </View>

                </View>
            </MotiView>
            </View>
    )
}

export default AppointmentPicker