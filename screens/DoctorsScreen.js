import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DocHeader2 from '../components/includes/DocHeader2'
import { doctorsStyles } from '../styles/doctorsStyles'
import { AntDesign } from '@expo/vector-icons'
import { apiBaseUrl, convertTimestampToTime, noAppointmentImage } from '../constants/constants'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { setAppointments } from '../features/authSlice'
import { MotiImage, MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'
import CeliaPreloader from '../components/preloader/CeliaPreloader'


const DoctorsScreen = ({ navigation }) => {
    const careWorkersItems = [
        { name: "View all available doctors", fn: () => navigation.navigate("AvailableDoctors") },
        { name: "View all available lab technicians", fn: () => { } },
    ]
    const [userAppointments, setUserAppointments] = useState([])
    const {userToken} = useSelector((state)=>state.auth)
    const [isLoading, setIsLoading] = useState(false)
    // const { appointments } = useSelector((state) => state.auth)
    useEffect(()=>{
        (async()=>{
            setIsLoading(true)
            try {
                const getAppointments = await axios.get(`${apiBaseUrl}/appointment`,{
                    headers: {
                      Authorization: `Bearer ${userToken}`
                    }
                  })
                  if (getAppointments.status === 200 || getAppointments.status === 201) {
                    setUserAppointments(getAppointments.data.data)
                  }
            } catch (error) {
                
            }finally{
                setIsLoading(false)
            }
        })()
    },[])
    return (
        <SafeAreaView className="h-full">
            <ScrollView
                bounces={false}
                contentContainerStyle={{ gap: 20, paddingVertical: 20 }} className=" px-5 bg-white">
                <DocHeader2
                    title="Doctors"
                    navigator={navigation}
                />
                <View className="w-full gap-5">
                    <View style={doctorsStyles.careWorkersContainer}>
                        <Text style={doctorsStyles.careWorkersH1}>Health care workers</Text>
                        {
                            careWorkersItems.map((item, idx) => {
                                return (
                                    <View key={idx} style={doctorsStyles.careWorkersItemContainer}>
                                        <Text style={doctorsStyles.careWorkersItemText}>{item.name}</Text>
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
                        userAppointments.length < 1 ? (
                            <View style={[doctorsStyles.careWorkersContainer]}>
                                <Text style={doctorsStyles.careWorkersH1}>Appointments</Text>
                                <View style={doctorsStyles.appointmentWorkersItemContainer}>
                                    <View style={doctorsStyles.imageContainer}>
                                        <Image
                                            source={noAppointmentImage}
                                            style={{ flex: 1 }}
                                        />
                                    </View>
                                    <View style={{ width: 169 }}>
                                        <Text style={doctorsStyles.appointmentWorkersItemDayText}>No appointments booked</Text>
                                        <Text style={doctorsStyles.careWorkersH1}>Book one today</Text>
                                    </View>
                                    <AntDesign
                                        name='arrowright'
                                        size={20}
                                        color='#666B6E'
                                    />
                                </View>
                            </View>
                        ) :
                        (
                            <View style={[doctorsStyles.careWorkersContainer]}>
                        <Text style={doctorsStyles.careWorkersH1}>Appointments</Text>
                        {
                            userAppointments.length > 0 && (
                                <MotiView
                                from={{scaleY: 0}}
                                animate={{scaleY: 1}}
                                transition={{
                                    type: "timing",
                                    duration: 200,
                                    ease: Easing.linear
                                }}
                                >
                                    {
                                        userAppointments.map((appointment, idx) => {
                                            if (appointment.status !== "cancelled" && appointment.status !== "completed") {
                                                const docInfo = appointment.doctorId
                                                let startTime = convertTimestampToTime(appointment.timestamp)
                                                let endTimeStamp = new Date(appointment.timestamp)
                                                endTimeStamp.setMinutes(endTimeStamp.getMinutes() + 30)
                                                    return (
                                                        <TouchableOpacity
                                                        activeOpacity={1}
                                                        onPress={() => 
                                                            navigation.navigate("AppointmentDetails", 
                                                            {details: appointment, 
                                                            endTime: convertTimestampToTime(endTimeStamp.toISOString())})}
                                                        key={idx} style={doctorsStyles.appointmentWorkersItemContainer}>
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
                                                            <AntDesign
                                                                name='arrowright'
                                                                size={20}
                                                                color='#666B6E'
                                                                navigation={navigation}
                                                            />
                                                        </TouchableOpacity>
                                                    ) 
                                            }
                                        })
                                    }
                                </MotiView>
                            ) 
                        }

                        <View style={doctorsStyles.careWorkersItemContainer}>
                            <Text style={doctorsStyles.careWorkersItemText}>View all appointment history</Text>
                            <AntDesign
                                name='arrowright'
                                size={20}
                                color='#666B6E'
                                onPress={()=>navigation.navigate("AppointmentHistory",{appointments: userAppointments})}
                            />
                        </View>
                    </View>
                        )
                    }
                </View>
            </ScrollView>
            {
                isLoading && (
                    <CeliaPreloader/>
                )
            }
        </SafeAreaView>
    )
}

export default DoctorsScreen