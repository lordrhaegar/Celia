import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ReactNativeModernDatepicker from 'react-native-modern-datepicker'
import { styles } from '../../styles/Styles'
import DocHeader from "../includes/DocHeader"

const DateTimePicker = (props) => {
    const {closeModal, setSelectedOption} = props
    const handlechange = (propDate) => {
        setSelectedOption(propDate)
    }
    return (
        <View
            className="py-10 px-5 w-full flex-col items-center"
            style={{

                width: '100%'
            }}
        >
            <DocHeader title={"Pick date"}/>
            <View style={{height: 20}}>

            </View>
            <ReactNativeModernDatepicker
                options={{
                    mainColor: '#0D91DC',
                    defaultFont: 'Gilroy',
                    headerFont: 'Gilroy',
                    textHeaderFontSize: 16
                }}
                mode='calendar'
                onDateChange={handlechange}
                style={{ flex: 0 }}
            />
            <TouchableOpacity
                onPress={closeModal}
                style={styles.button}
            >
                <Text
                    className="text-[#FFFBFB]"
                    style={styles.buttonText}
                >Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DateTimePicker