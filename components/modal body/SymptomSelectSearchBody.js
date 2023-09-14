import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import { useNavigation } from '@react-navigation/native'

const SymptomSelectSearchBody = ({ symptom, setSymptom, closeSelectSymptomModal }) => {
    const navigator = useNavigation();
    return (
        <View style={styles.noticeCard}>
            <Text
                style={[styles.genderNoticeHeadnig, { color: '#666B6E' }]}>Search for a symptom</Text>
            <TextInput
                onChangeText={setSymptom}
                placeholder={symptom}
                style={[styles.input, { width: '100%' }, styles.inputLabel]}
            />
            <View
                style={styles.symptomDetailsBody}
            >
                <Text
                    style={styles.symptomHeading}
                >Headache</Text>
                <Text
                    style={styles.symptomDescription}
                >Any pain in the head</Text>
                <TouchableOpacity
                onPress={()=>{
                    closeSelectSymptomModal()
                    navigator.navigate('DurationQuestionnaire')
                }
                }
                    style={styles.symptomButton}
                >
                    <Text
                        style={styles.symptomButtonText}
                    >Select Symptom</Text>
                </TouchableOpacity>
            </View>
            <View
                style={styles.symptomDetailsBody}
            >
                <Text
                    style={styles.unmatchedSymptomHeading}
                >Headache</Text>
                <Text
                    style={styles.unmatchedSymptomDescription}
                >Any pain in the head</Text>
                <TouchableOpacity
                    style={styles.unmatchedSymptomButton}
                >
                    <Text
                        style={styles.unmatchedSymptomButtonText}
                    >Select Symptom</Text>
                </TouchableOpacity>
            </View>
            <View
                style={styles.symptomDetailsBody}
            >
                <Text
                    style={styles.unmatchedSymptomHeading}
                >Headache</Text>
                <Text
                    style={styles.unmatchedSymptomDescription}
                >Any pain in the head</Text>
                <TouchableOpacity
                    style={styles.unmatchedSymptomButton}
                >
                    <Text
                        style={styles.unmatchedSymptomButtonText}
                    >Select Symptom</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default SymptomSelectSearchBody