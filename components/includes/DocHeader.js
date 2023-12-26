import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { styles } from '../../styles/Styles'
import { useSelector } from 'react-redux'

const DocHeader = ({title, navigation}) => {
    const {userType} = useSelector((state)=>state.auth)
    return (
        <View 
        style={{flex: 0}}
        className="flex-row items-center justify-between px-5 w-full"
        >
            <Text style={styles.title} className="text-black font-medium">{title}</Text>

            <TouchableOpacity
                onPress={() => navigation.pop()}
                style={{ gap: 5 }} className="flex-row items-center">
                <AntDesign
                    name='left'
                    style={{ color: userType === "Patient" ?'#0D91DC' : '#7CD1D1', fontSize: 13 }}
                />
                <Text style={styles.backText} className={`text-[${userType === "Patient" ?'#0D91DC' : '#7CD1D1'}]`}>
                    Back
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default DocHeader