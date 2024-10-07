import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles';
import ReactNativeModernDatepicker, { getFormatedDate } from 'react-native-modern-datepicker';

const DatePickerModal = ({ date, isDateModal, closeDateModal, setDate }) => {
    const handlechange = (propDate) => {
        setDate(propDate)
    }
    return (
        <Modal
            visible={isDateModal}
            animationType='fade'
            transparent={true}
        >
            <View style={styles.modalBackground}>
                <TouchableOpacity
                    onPress={closeDateModal}
                    style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]} />
                <View style={[styles.modalContainer]}>
                    <View
                        className="border-b-2 py-5 w-full flex-col items-center justify-center"
                        style={{

                            width: '100%'
                        }}
                    >
                        <ReactNativeModernDatepicker
                            options={{
                                mainColor: '#0D91DC',
                                defaultFont: 'Gilroy',
                                headerFont: 'Gilroy',
                                textHeaderFontSize: 16
                            }}
                            mode='calendar'
                            onDateChange={handlechange}
                            style={{ borderRadius: 25, width: '80%' }}
                        />
                        <TouchableOpacity
                            onPress={closeDateModal}
                            style={styles.button}
                        >
                            <Text
                                className="text-[#FFFBFB]"
                                style={styles.buttonText}
                            >Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default DatePickerModal