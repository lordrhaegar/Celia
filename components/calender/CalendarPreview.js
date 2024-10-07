import { View, Text } from 'react-native'
import React from 'react'
import { docDetailsStyle } from '../../styles/docDetailsStyles'
import { availableDoctorsModalStyles } from '../../styles/availableDoctorsModalStyles'
import { MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'
import docTimePickerStyle from '../../styles/docTimePickerStyle'
import { availabilitySetupStyles } from '../../styles/availabilitySetupStyles'
import { backgroundColors, checkUserType, convertTimestampToTime, textColors } from '../../constants/constants'
import { AntDesign } from '@expo/vector-icons'
import { useSelector } from 'react-redux'

const Calendar = (props) => {
    const {doctor, extra} = props
    const {userType} = useSelector((state)=>state.auth)
    const {patientSelectedBackground, doctorSelectedBackground} = backgroundColors
    return (
        <View className={`${extra}`} style={docDetailsStyle.workingTimeContainer}>
            <Text style={availabilitySetupStyles.h1}>Working Times</Text>
            <View className="flex-row flex-wrap gap-5 ">
                {
                    doctor.map((availabilityObj, idx) => {
                        return (
                            <View key={idx} style={{ gap: 2 }}
                            >
                                <View style={[availabilitySetupStyles.dayBox, {
                                    borderColor: checkUserType(userType)?patientSelectedBackground:doctorSelectedBackground, borderWidth: 1
                                }]}
                                >
                                    <Text style={availabilitySetupStyles.dayText}>{availabilityObj.day}</Text>
                                </View>

                                {
                                    availabilityObj.availableTimes.length > 0 ?
                                        (
                                            <View
                                                key={idx}
                                                className="w-full flex-col justify-center"
                                            >
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
                                                        <View className="flex-wrap" style={docTimePickerStyle.dayListContainer}>
                                                            {/* <View style={docTimePickerStyle.daySelectorIconContainer}>

                                                                    </View> */}
                                                            {
                                                                availabilityObj.availableTimes.map((time, idx) => {
                                                                    return (

                                                                        <View
                                                                            key={idx}
                                                                            style={[docTimePickerStyle.timeButton, { backgroundColor: checkUserType(userType)? backgroundColors.patientSelectedBackground:backgroundColors.doctorSelectedBackground }]}
                                                                        >
                                                                            <Text style={[docTimePickerStyle.selectedTimeText, { color: "#FDFDFD" }]}>{convertTimestampToTime(time)}</Text>
                                                                        </View>

                                                                    )
                                                                }
                                                                )
                                                            }
                                                        </View>

                                                    </View>
                                                </MotiView>

                                            </View>
                                        ) :
                                        (<View className="items-center justify-center">
                                            <AntDesign
                                        name='closecircleo'
                                        size={20}
                                        color={"red"}
                                        />
                                        </View>)
                                }

                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default Calendar