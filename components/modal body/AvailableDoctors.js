import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { availableDoctorsModalStyles } from '../../styles/availableDoctorsModalStyles'
import Button from '../buttons/Button'
import { styles } from '../../styles/Styles'
import CustomModal from '../modals/Modal'
import DateTimePicker from './DateTimePicker'

const AvailableDoctor = (props) => {
    const {navigation, closeScheduleModal} = props
    const [selectedOption, setSelectedOption] = useState("")
    const { height } = useWindowDimensions()
    const [isTimeModalVisible, setIsTimeModalVisible] = useState(false)
    const openTimeModal = ()  => {
        setIsTimeModalVisible(prev => !prev)
    }
    const closeTimeModal = ()  => {
        setIsTimeModalVisible(prev => !prev)
    }
    const availableTimes = [
        { text: "Today"},
        { text: "In one week time"},
        { text: "In two weeks time"},
        { text: "In a months time"},
        { text: "Custom timeframe"},
    ]
    const handleNav = () => {
        closeScheduleModal()
        navigation.navigate("AvailableDoctors", {selectedOption: selectedOption})
    }
    return (
        <View style={availableDoctorsModalStyles.container}>
            <View>
                <Text style={availableDoctorsModalStyles.H1}>Search</Text>
                <Text style={availableDoctorsModalStyles.H2}>Show me only doctors that will be available</Text>
            </View>
            {
                availableTimes.map((time, index) => {
                    return (
                        <View
                            key={index}
                            style={availableDoctorsModalStyles.listObject}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (time.text === "Custom timeframe") openTimeModal()
                                    setSelectedOption(time.text)
                                }
                                }
                                activeOpacity={1}
                                style={[availableDoctorsModalStyles.selectedListObject, { backgroundColor: selectedOption === time.text ? "#EAEDEF" : "transparent" }]}>
                                <Text style={availableDoctorsModalStyles.H2}>{time.text}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
            <View style={availableDoctorsModalStyles.buttonContainer}>
                <Button
                textColor="white"
                onPress={handleNav} buttonStyle={styles.button} backgroundColor="#0D91DC" textStyle={styles.buttonText} title="View available doctors" />
            </View>
            <CustomModal
                    visibility={isTimeModalVisible}
                    animationType={"fade"}
                    closeModal={closeTimeModal}
                    component={<DateTimePicker
                        setSelectedOption={setSelectedOption} 
                        closeModal={handleNav}/>}
                    />
        </View>
    )
}

export default AvailableDoctor