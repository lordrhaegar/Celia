import { View, Text, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DocHeader from '../components/includes/DocHeader'
import { docDetailsStyle } from '../styles/docDetailsStyles'
import { doctor } from '../constants/constants'
import { availableDoctorsModalStyles } from '../styles/availableDoctorsModalStyles'
import { useSelector } from 'react-redux'
import { styles } from '../styles/Styles'
import { AntDesign } from '@expo/vector-icons'
import Button from '../components/buttons/Button'

const ConfirmAppointment = ({navigation}) => {
    const {height} = useWindowDimensions()
    const {doctor, schedule} = useSelector((state)=>state.doctor)
    return (
        <SafeAreaView>
            {/* <View style={[docDetailsStyle.container, { height: height }]}>
                <DocHeader title={"Book appointment"} navigation={navigation} />
                <View
                    style={docDetailsStyle.imageContainer}>
                    <Image
                        source={doctor.image}
                        style={{ flex: 1, width: "100%" }}
                        resizeMode='cover'
                    />
                </View>
                <View
                    style={docDetailsStyle.detailsContainer}>
                    <View style={{ gap: 10 }}>
                        <Text style={availableDoctorsModalStyles.docName}>{doctor.name}</Text>
                        <Text style={availableDoctorsModalStyles.docOccupation}>{doctor.occupation}</Text>
                        <Text style={availableDoctorsModalStyles.docHospital}>{doctor.hospital}</Text>
                    </View>
                    <View style={docDetailsStyle.cardContainer}>
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
                                        [...Array(doctor.rating).keys()].map((star, index) => {
                                            return (<Text key={index}>⭐</Text>)
                                        })
                                    }
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={docDetailsStyle.workingTimeContainer}>
                        <Text style={availableDoctorsModalStyles.docName}>Wokring Time</Text>
                        <Text style={availableDoctorsModalStyles.docHospital}>{doctor.working_time.date}</Text>
                        <Text style={availableDoctorsModalStyles.docHospital}>{doctor.working_time.times}</Text>
                    </View>
                    <View style={docDetailsStyle.reeviewsContainer}>
                        <Text style={availableDoctorsModalStyles.docName}>Reviews</Text>
                        <Text style={availableDoctorsModalStyles.docHospital}>{doctor.reviewers.reviewers_name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {
                                [...Array(doctor.rating).keys()].map((star, index) => {
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
                    </View>
                </View>
                <Button
                    buttonStyle={styles.button}
                    // onPress={openScheduleModal}
                    viewStyle={docDetailsStyle.buttonContainer}
                    textStyle={styles.buttonText}
                    title={"Confirm appointment"} />

            </View> */}
            {/* <CustomModal

            /> */}
        </SafeAreaView>
    )
}

export default ConfirmAppointment