import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import FormHeaderTitle from '../includes/FormHeaderTitle'
import Button from '../buttons/Button'
import { styles } from '../../styles/Styles'
import { docDetailsStyle } from '../../styles/docDetailsStyles'
import DateTimePicker from './DateTimePicker'
import TimePicker from './TimePicker'
import Connect from './Connect'
import { useDispatch, useSelector } from 'react-redux'

const ScheduleAvailability = ({ navigation, closeModal }) => {
    
    return (
        <View
            className="py-10 px-5 w-full flex-col items-center justify-center"
            style={{ width: '100%' }}
        >
            
                    <View className="w-full">
                        <FormHeaderTitle color="#0D91DC" title={"Set up your avaialability"} />
                        <Button
                            textColor="white"
                            buttonStyle={styles.button}
                            width="100%"
                            backgroundColor="#7CD1D1"
                            textStyle={styles.buttonText}
                            viewStyle={[docDetailsStyle.buttonContainer, { paddingVertical: 0, width: "100%" }]}
                            title={"Use Google Calendar"} 
                            />
                        <Button
                            buttonStyle={styles.button2}
                            backgroundColor='white'
                            textStyle={styles.buttonText}
                            width="100%"
                            viewStyle={[docDetailsStyle.buttonContainer, { paddingVertical: 0, width: "100%" }]}
                            onPress={()=>navigation.navigate("AvailabilitySetup")}
                            title={"Set up manually"} />
                    </View>

        </View>
    )
}

export default ScheduleAvailability