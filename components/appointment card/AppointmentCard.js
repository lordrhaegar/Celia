import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { doctorsStyles } from '../../styles/doctorsStyles'
import { convertTimestampToTime, noAppointmentImage } from '../../constants/constants'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'

const AppointmentCard = (props) => {
    const {
        cardTitle,
        appointments,
        status,
        navigation
    } = props
    const [isAlertArrowUp, setIsAlertArrowUp] = useState( status === "pending"?true:false);
    const toggleAlertArrow = () => {
        setIsAlertArrowUp(!isAlertArrowUp);
    }
    return (
        <View style={[doctorsStyles.careWorkersContainer, { backgroundColor: status === "pending" || status === "rescheduled" ? "#F3F5F6" : status === "cancelled" ? "#F8CFCF" : "#E5F6F6" }]}>
            <View className="w-full flex-row justify-between items-center">
                <Text style={doctorsStyles.careWorkersH1}>{cardTitle}</Text>
                <Entypo
                    onPress={toggleAlertArrow}
                    name={isAlertArrowUp ? 'chevron-up' : 'chevron-down'}
                    color='#A5ADB1'
                    size={20}
                />
            </View>
            {
                (isAlertArrowUp && appointments.length > 0) && (
                    <MotiView
                        from={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{
                            type: "timing",
                            duration: 200,
                            ease: Easing.linear
                        }}
                    >
                        {
                            appointments.map((appointment, idx) => {
                                if (appointment.status === status) {
                                    const docInfo = appointment.doctorId
                                    let startTime = convertTimestampToTime(appointment.timestamp)
                                    let endTimeStamp = new Date(appointment.timestamp)
                                    endTimeStamp.setMinutes(endTimeStamp.getMinutes() + 30)
                                    return (
                                        <View key={idx} style={[doctorsStyles.appointmentWorkersItemContainer, { borderColor: status === "rescheduled" ? "#EABF6E" : "", borderWidth: status === "rescheduled"? 1:0 }]}>
                                            <View style={doctorsStyles.imageContainer}>
                                                <Image
                                                    source={noAppointmentImage}
                                                    style={{ flex: 1 }}
                                                />
                                            </View>
                                            <View style={{ width: 169 }}>
                                                <Text style={doctorsStyles.careWorkersH1}>{docInfo.firstname} {docInfo.lastname}</Text>
                                                <Text style={doctorsStyles.appointmentWorkersItemDayText}>{appointment.day}</Text>
                                                <Text style={doctorsStyles.appointmentWorkersItemTimeText}>{startTime} - {convertTimestampToTime(endTimeStamp.toISOString())}</Text>
                                            </View>
                                            {
                                                appointment.status !== "cancelled" ?
                                                    (
                                                        <View style={{ width: 20 }}>
                                                            <AntDesign
                                                                name='arrowright'
                                                                size={20}
                                                                color='#666B6E'
                                                                onPress={() =>
                                                                    navigation.navigate("AppointmentDetails",
                                                                        {
                                                                            details: appointment,
                                                                            endTime: convertTimestampToTime(endTimeStamp.toISOString())
                                                                        })}
                                                            />
                                                        </View>
                                                    ) :
                                                    (<View style={{ width: 15 }}></View>)
                                            }
                                        </View>
                                    )
                                }
                            })
                        }

                    </MotiView>)
            }
        </View>
    )
}

export default AppointmentCard