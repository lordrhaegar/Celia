import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { styles } from '../../styles/Styles'

const CauseHeader = ({ possibleCause, navigation }) => {
    return (
        <View className="flex-row px-5 py-5 items-center justify-between"
        >
            <Text style={styles.title} className="text-black font-medium">{possibleCause}</Text>
            <TouchableOpacity
                onPress={()=>navigation.pop()}
                style={{ gap: 5 }} className="flex-row items-center">
                <AntDesign
                    name='left'
                    color='#0D91DC'
                    size={13}
                />
                <Text 
                style={styles.backText} 
                className="text-[#0D91DC]">
                    Back
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CauseHeader