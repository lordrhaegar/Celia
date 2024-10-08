import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DocHeader from '../includes/DocHeader'
import ConnectButton from '../buttons/ConnectButton'
import { connectButtonStyles } from '../../styles/connectButtonStyles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { connectOptions } from '../../constants/constants'

const Connect = (props) => {
    const [selectedConnect, setSelectedConnect] = useState({})

    const {closeModal, selectedDate, selectedTime} = props
    const navigator = useNavigation()
    const dispatch = useDispatch()

    const setSchedule = (selectedConnecting) => {
        const scheduleObj = {
            date: selectedDate,
            time: selectedTime,
            connect: selectedConnecting
        }
        dispatch(setSchedule(scheduleObj))
    }
    return (
        <View
            style={{ paddingVertical: 10, width: "100%", justifyContent: 'center', gap: 20 }}
        >
            <DocHeader title={"Connect via"} />
            {
                connectOptions.map((option, index) => {
                    return (
                        <ConnectButton
                        onPress={()=>{
                            setSchedule(option)
                            setTimeout(() => {
                                navigator.navigate("ConfirmAppointment")
                                
                            }, 2000);
                            closeModal()
                        }
                        }
                            key={index}
                            iconStyle={[connectButtonStyles.iconStyle, { backgroundColor: option.backgroundColor }]}
                            iconName={option.iconName}
                            title={option.title}
                            textStyle={connectButtonStyles.buttonText}/>
                    )
                })
            }
        </View>
    )
}

export default Connect