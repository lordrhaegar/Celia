import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { backgroundColors, checkUserType } from '../../constants/constants'
import { styles } from '../../styles/Styles'
import Button from '../buttons/Button'
import { useSelector } from 'react-redux'

const Reply = (props) => {
    const { label, setValue, value } = props
    const { userType } = useSelector((state) => state.auth)
    const [reply, setReply] = useState("")
    const replies = [
        "Yes", "No", "Not Sure"
    ]
    const checkReply = (reply) => {
        return value === reply
    }
    return (
        <View style={styles.avoidKeyboard} className="w-full">
            <Text style={styles.inputLabel}>{label}</Text>
            <View className="w-full justify-between flex-row">
                {
                    replies.map((reply, index) => {
                        return (
                            <Button
                                textColor={value === reply ? "#FFFBFB":"black"}
                                buttonStyle={value === reply ? styles.button: styles.button2}
                                width="100%"
                                title={reply}
                                textStyle={styles.buttonText}
                                backgroundColor={checkReply(reply) ? checkUserType(userType)? backgroundColors.patientSelectedBackground : backgroundColors.doctorSelectedBackground : "white"}
                                viewStyle={{ paddingHorizontal: 5, marginTop: 20, width: "33%" }}
                                key={index}
                                onPress={() => {
                                    setValue(reply)
                                }}
                            />
                        )
                    })
                }
                
            </View>
        </View>
    )
}

export default Reply