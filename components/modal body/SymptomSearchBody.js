import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'

const SymptomSearchBody = ({symptom, setSymptom, openSelectSymptomModal}) => {
    return (
        <View style={styles.noticeCard}>
            <Text
                style={[styles.genderNoticeHeadnig, { color: '#666B6E' }]}>Search for a symptom</Text>
            <TextInput
                onChangeText={setSymptom}
                placeholder='head'
                style={[styles.input, { width: '100%' }, styles.inputLabel]}
            />
            <TouchableOpacity
            onPress={openSelectSymptomModal}
            style={styles.searchResultList}
            >
                <Text
                style={styles.searchResultMatch}
                >{symptom}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SymptomSearchBody