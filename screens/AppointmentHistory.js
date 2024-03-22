import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import DocHeader2 from '../components/includes/DocHeader2'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppointmentCard from '../components/appointment card/AppointmentCard'

const AppointmentHistory = ({navigation, route}) => {
    const {appointments} = route.params
    const {height, width} = Dimensions.get('window')
  return (
    <SafeAreaView style={{height: height, backgroundColor: "white", paddingVertical: 20}}>
        <DocHeader2
        title="Appointment History"
        navigator={navigation}
    />
        <ScrollView
                bounces={false}
                contentContainerStyle={{ gap: 20 }} className=" px-5 bg-white">
                <AppointmentCard
                cardTitle={"Upcoming appointments"}
                appointments={appointments}
                status={"pending"}
                navigation={navigation}
                />
                <AppointmentCard
                cardTitle={"Rescheduled appointments"}
                appointments={appointments}
                status={"rescheduled"}
                navigation={navigation}
                />
                <AppointmentCard
                cardTitle={"Cancelled appointments"}
                appointments={appointments}
                status="cancelled"
                navigation={navigation}
                />
                <AppointmentCard
                cardTitle={"Completed appointments"}
                appointments={appointments}
                status="completed"
                navigation={navigation}
                />
                </ScrollView>
    </SafeAreaView>
  )
}

export default AppointmentHistory