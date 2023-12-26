import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import talkToADocStyle from '../styles/talkToADocStyles'
import DocHeader from '../components/includes/DocHeader'
import { docDetailsStyle } from '../styles/docDetailsStyles'
import { availableDoctorsModalStyles } from '../styles/availableDoctorsModalStyles'
import { AntDesign } from '@expo/vector-icons'
import Button from '../components/buttons/Button'
import { styles } from '../styles/Styles'
import CustomModal from '../components/modals/Modal'
import DateTimePicker from '../components/modal body/DateTimePicker'
import ScheduleAnAppointment from '../components/modal body/ScheduleAnAppointment'
import { useSelector } from 'react-redux'

const DoctorDetails = ({ navigation }) => {
    const { doctor } = useSelector((state)=>state.doctor)
    const { height } = useWindowDimensions()
    const [isScheduleModalVisible, setIsScheduleModalVisible] = useState(false)
    const [selectedOption, setSelectedOption] = useState("")
    const openScheduleModal = ()=>{
        setIsScheduleModalVisible(prev=>!prev)
    }
    const closeScheduleModal = ()=>{
        setIsScheduleModalVisible(prev=>!prev)
    }
    return (
        <SafeAreaView>
            <View style={[docDetailsStyle.container, { height: height }]}>
                <DocHeader title={"Book appointment"} navigation={navigation} />
                <View
                    style={docDetailsStyle.imageContainer}>
                    <Image
                        source={{uri: doctor.profile_img}}
                        style={{ flex: 1, width: "100%" }}
                        resizeMode='cover'
                    />
                </View>
                <View
                    style={docDetailsStyle.detailsContainer}>
                    <View style={{ gap: 10 }}>
                        <Text style={availableDoctorsModalStyles.docName}>{doctor.firstname} {doctor.lastname}</Text>
                        <Text style={availableDoctorsModalStyles.docOccupation}>{doctor.speciality}</Text>
                        {/* <Text style={availableDoctorsModalStyles.docHospital}>{doctor.hospital}</Text> */}
                    </View>
                    <View
                    style={docDetailsStyle.imageContainer}>
                    <Image
                        source={{uri: doctor.license}}
                        style={{ flex: 1, width: "100%" }}
                        resizeMode='cover'
                    />
                </View>
                    {/* <View style={docDetailsStyle.cardContainer}>
                        <View style={docDetailsStyle.detailsCard}>
                            <Text style={docDetailsStyle.detailsCardH1}>Patients</Text>
                            <Text style={docDetailsStyle.detailsCardP}>{doctor.patients}</Text>
                        </View>
                        <View style={docDetailsStyle.detailsCard}>
                            <Text style={docDetailsStyle.detailsCardH1}>Experience</Text>
                            <Text style={docDetailsStyle.detailsCardP}>{doctor.experience}</Text>
                        </View>
                        <View style={docDetailsStyle.detailsCard}>
                            <Text style={docDetailsStyle.detailsCardH1}>Rating</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    {
                                        [...Array(4).keys()].map((star, index) => {
                                            return (<Text key={index}>⭐</Text>)
                                        })
                                    }
                                </View>
                            </View>
                        </View>
                    </View> */}
                    {/* <View style={docDetailsStyle.workingTimeContainer}>
                        <Text style={availableDoctorsModalStyles.docName}>Working Time</Text>
                        <Text style={availableDoctorsModalStyles.docHospital}>{doctor.working_time.date}</Text>
                        <Text style={availableDoctorsModalStyles.docHospital}>{doctor.working_time.times}</Text>
                    </View> */}
                    {/* <View style={docDetailsStyle.reeviewsContainer}>
                        <Text style={availableDoctorsModalStyles.docName}>Reviews</Text>
                        <Text style={availableDoctorsModalStyles.docHospital}>{doctor.reviewers.reviewers_name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {
                                [...Array(4).keys()].map((star, index) => {
                                    return (<Text key={index}>⭐</Text>)
                                })
                            }
                        </View>
                        <Text style={availableDoctorsModalStyles.docHospital}>{doctor.reviewers.reviewers_review}</Text>
                        <TouchableOpacity style={availableDoctorsModalStyles.viewDetailsContainer}>
                            <Text style={availableDoctorsModalStyles.viewDetailsText}>View all reviewers</Text>
                            <AntDesign
                                name='right'
                                color={"#0D91DC"}
                            />
                        </TouchableOpacity>
                    </View> */}
                </View>
                <Button
                    textColor="white"
                    buttonStyle={styles.button}
                    onPress={openScheduleModal}
                    viewStyle={docDetailsStyle.buttonContainer}
                    textStyle={styles.buttonText}
                    title={"Schedule an appointment"} />

            </View>
            <CustomModal
                    visibility={isScheduleModalVisible}
                    animationType={"fade"}
                    closeModal={closeScheduleModal}
                    component={<ScheduleAnAppointment navigation={navigation} closeModal={closeScheduleModal}/>}
                    />
        </SafeAreaView>
    )
}

export default DoctorDetails