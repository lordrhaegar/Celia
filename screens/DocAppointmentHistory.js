import { View, Text, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import DocHeader2 from '../components/includes/DocHeader2'
import { SafeAreaView } from 'react-native-safe-area-context'
import DocAppointmentCard from '../components/appointment card/DocAppointmentCard'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { apiBaseUrl } from '../constants/constants'
import CeliaPreloader from '../components/preloader/CeliaPreloader'

const DocAppointmentHistory = ({ navigation, route }) => {
  const { height, width } = Dimensions.get('window')
  const { userToken } = useSelector((state) => state.auth)
  const [isLoading, setIsLoading] = useState(false)
  const [docAppointments, setDocAppointments] = useState([])
  useEffect(() => {
    (async () => {
      setIsLoading(true)
      try {
        const getAppointments = await axios.get(`${apiBaseUrl}/appointment/doctor`, {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        })
        if (getAppointments.status === 200 || getAppointments.status === 201) {
          setDocAppointments(getAppointments.data.data)
        }
      } catch (error) {
      }finally{
        setIsLoading(false)
      }
    })()
  }, [])
  return (
    <SafeAreaView style={{ height: height, backgroundColor: "white", paddingVertical: 20 }}>
      <DocHeader2
        title="Appointment History"
        navigator={navigation}
      />
      <ScrollView
        bounces={false}
        contentContainerStyle={{ gap: 20, paddingBottom: 50 }} className=" px-5 bg-white">
        <DocAppointmentCard
          cardTitle={"Upcoming appointments"}
          appointments={docAppointments}
          status={"pending"}
          navigation={navigation}
        />
        <DocAppointmentCard
          cardTitle={"Rescheduled appointments"}
          appointments={docAppointments}
          status={"rescheduled"}
          navigation={navigation}
        />
        <DocAppointmentCard
          cardTitle={"Cancelled appointments"}
          appointments={docAppointments}
          status="cancelled"
          navigation={navigation}
        />
        <DocAppointmentCard
          cardTitle={"Completed appointments"}
          appointments={docAppointments}
          status="completed"
          navigation={navigation}
        />
      </ScrollView>
        {
          isLoading && (
            <CeliaPreloader/>
          )
        }
    </SafeAreaView>
  )
}

export default DocAppointmentHistory