import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import talkToADocStyle from '../styles/talkToADocStyles'
import DocHeader from '../components/includes/DocHeader'
import { availableDoctorsModalStyles } from '../styles/availableDoctorsModalStyles'
import CustomModal from '../components/modals/Modal'
import AvailableDoctor from '../components/modal body/AvailableDoctors'
import { apiBaseUrl, logo, remy, remyLarge } from '../constants/constants'
import { AntDesign } from '@expo/vector-icons'
import { SimpleGrid } from 'react-native-super-grid'
import { setSelectedDoctor } from '../features/docSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { MotiImage } from 'moti'
import { Easing } from 'react-native-reanimated'
import celiaStyle from '../styles/celiaAiStyle'
import CeliaPreloader from '../components/preloader/CeliaPreloader'

const AvailableDoctors = ({ navigation, route }) => {
    // const { selectedOption } = route.params
    const [doctors, setDoctors] = useState([])
    const [isScheduleModalVisible, setIsScheduleModalVisible] = useState(false)
    const dispatch = useDispatch()
    const openScheduleModal = () => {
        setIsScheduleModalVisible(true)
    }
    const closeScheduleModal = () => {
        setIsScheduleModalVisible(false)
    }
    const {width, height} = Dimensions.get('screen')
    useEffect(() => {
        (
            async () => {
                try {
                    const getAllDoctorsResponse = await axios.get(`${apiBaseUrl}/doctor/alldoctors`)
                    if (getAllDoctorsResponse.status === 200 || getAllDoctorsResponse.status === 201) {
                        setDoctors(getAllDoctorsResponse.data.doctors);
                    }
                } catch (error) {

                }
            }
        )()
    }, [])
    if (doctors.length === 0) {
        return (
            <CeliaPreloader/>
        )

    }
    return (
        <SafeAreaView>
            <View style={talkToADocStyle.container}>
                <DocHeader title={"Available Doctors"} navigation={navigation} />
                {/* <View style={availableDoctorsModalStyles.showSelectedOptionContainer}>
                    <View style={availableDoctorsModalStyles.selectedOptionContainer}>
                        <Text style={availableDoctorsModalStyles.selectedOption}>{selectedOption}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={openScheduleModal}
                        style={{ height: '50%', justifyContent: 'center' }}>
                        <Text style={availableDoctorsModalStyles.change}>Change</Text>
                    </TouchableOpacity>
                </View> */}
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={availableDoctorsModalStyles.doctorsGridView} >
                    {
                        doctors.map((doctor, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        dispatch(setSelectedDoctor(doctor))
                                        navigation.navigate("DocDetails", {status: "schedule", appointmentId: ""})
                                    }}
                                    activeOpacity={1}
                                    key={index}
                                    style={availableDoctorsModalStyles.doctorsContainer}>
                                    <View style={{ width: '100%' }}>
                                        <Image
                                            source={{ uri: doctor.profile_img }}
                                            style={availableDoctorsModalStyles.imageStyle}
                                            resizeMode='cover'
                                        />
                                    </View>
                                    <Text style={availableDoctorsModalStyles.docName}>{doctor.firstname} {doctor.lastname}</Text>
                                    <Text style={availableDoctorsModalStyles.docOccupation}>{doctor.speciality}</Text>
                                    {/* <Text style={availableDoctorsModalStyles.docHospital}>{doctor.hospital}</Text> */}
                                    <TouchableOpacity style={availableDoctorsModalStyles.viewDetailsContainer}>
                                        <Text style={availableDoctorsModalStyles.viewDetailsText}>View Details</Text>
                                        <AntDesign
                                            name='right'
                                            color={"#0D91DC"}
                                        />
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            )
                        })
                    }
                    {/* <SimpleGrid
                    data={doctors}
                    maxItemsPerRow={2}
                    itemDimension={200}
                    renderItem={({item})=>(
                        <View
                                 style={availableDoctorsModalStyles.doctorsContainer}>
                                    <View style={{ width: '100%', height: '50%' }}>
                                        <Image
                                            source={item.image}
                                            style={availableDoctorsModalStyles.imageStyle}
                                        />
                                    </View>
                                    <Text style={availableDoctorsModalStyles.docName}>{item.name}</Text>
                                    <Text style={availableDoctorsModalStyles.docOccupation}>{item.occupation}</Text>
                                    <Text style={availableDoctorsModalStyles.docHospital}>{item.hospital}</Text>
                                    <View style={availableDoctorsModalStyles.viewDetailsContainer}>
                                        <Text style={availableDoctorsModalStyles.viewDetailsText}>View Details</Text>
                                        <AntDesign
                                            name='right'
                                            color={"#0D91DC"}
                                        />
                                    </View>
                                </View>
                    )}
                    /> */}
                </ScrollView>

            </View>
            <CustomModal
                visibility={isScheduleModalVisible}
                animationType={"fade"}
                closeModal={closeScheduleModal}
                component={<AvailableDoctor closeScheduleModal={closeScheduleModal} navigation={navigation} />}
            />
        </SafeAreaView>
    )
}

export default AvailableDoctors