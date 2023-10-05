import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import { useNavigation } from '@react-navigation/native'

const SymptomSearchBody = ({ symptom, setSymptom, closeSymptomModal, addSymptomToList }) => {
    const navigator = useNavigation();
    return (
        <View style={styles.noticeCard}>
            <Text
                style={[styles.genderNoticeHeadnig, { color: '#666B6E' }]}>Search for a symptom</Text>
            <TextInput
                onChangeText={setSymptom}
                placeholder='head'
                style={[styles.input, { width: '100%' }, styles.inputLabel]}
            />
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                width: '100%'
            }}
            >
            {
                symptom.length > 0 ? 
                symptom.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => {
                            addSymptomToList(item)
                        }}
                        style={styles.searchResultList}
                    >
                        <Text
                            style={styles.searchResultMatch}
                        >{item}</Text>
                    </TouchableOpacity>
                ))
                : <View/>
            }
            </ScrollView>
        </View>
    )
}

export default SymptomSearchBody