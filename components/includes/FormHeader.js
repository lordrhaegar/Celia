import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import { AntDesign } from '@expo/vector-icons'
import { useSelector } from 'react-redux'

const FormHeader = (props) => {
    const {title, closeModal} = props
    const {userType} = useSelector((state)=>state.auth)
    return (
        <View style={styles.avoidKeyboard} className="w-full flex-row items-center">
            <TouchableOpacity
                onPress={closeModal}
                style={{ gap: 5 }} className="flex-row items-center">
                <AntDesign
                    name='left'
                    style={{ color: '#0D91DC', fontSize: 13 }}
                />
                <Text style={{ fontFamily: 'Gilroy-M', fontSize: 14, fontWeight: '600', color: userType === 'Doctor' ? '#7CD1D1' : "#0D91DC" }}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default FormHeader