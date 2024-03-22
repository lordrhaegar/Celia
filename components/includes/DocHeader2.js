import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { CommonActions } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import { backgroundColors, checkUserType, logout } from '../../constants/constants'
import { styles } from '../../styles/Styles'
import { useSelector } from 'react-redux'


const DocHeader2 = (props) => {
    const {navigator, title, extra} = props
    const { userType } = useSelector((state) => state.auth)
    const { userDetails } = useSelector((state) => state.auth)

    return (
        <View style={{ height: 60 }} className="flex-row px-5 items-center justify-between">
            <Text style={styles.title} className={`text-black font-medium ${extra}`}>{!title?`Hi ${userType === 'Doctor' ? 'Doc' : `there ${userDetails.firstname}`} `:title}</Text>
            <MaterialIcons
                onPress={() => {
                    logout(navigator, CommonActions)
                    // navigator.pop()
                }
                }
                name='notifications'
                size={24}
                color={checkUserType(userType)?backgroundColors.patientSelectedBackground:backgroundColors.doctorSelectedBackground}
            />
        </View>
    )
}

export default DocHeader2