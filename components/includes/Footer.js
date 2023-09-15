import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import SaveModal from '../modals/SaveModal'

const Footer = ({ isChecked, pageName }) => {
    const navigator = useNavigation();
    const [isSaveModal, setIsSaveModal] = useState(false);
    const openSaveModal = () => {
        setIsSaveModal(true);
    }
    const closeSaveModal = () => {
        setIsSaveModal(false);
    }
    return (
        <View style={styles.stepNavigation}>
            <View className="flex-row items-center">
                <TouchableOpacity
                    onPress={() => navigator.pop()}
                    style={{ gap: 5 }} className="flex-row items-center">
                    <AntDesign
                        name='left'
                        style={{ color: '#0D91DC', fontSize: 13 }}
                    />
                    <Text style={{ fontFamily: 'Gilroy', fontSize: 14, fontWeight: '600' }} className="text-[#0D91DC]">
                        Back
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => {
                    switch (pageName) {
                        case 'NewDiagnosis':
                            navigator.navigate('ClientType')
                            break;
                        case 'ClientType':
                            navigator.navigate('ClientBio')
                            break;
                        case 'ClientBio':
                            openSaveModal()
                            break;
                        case 'Questionnaire':
                            navigator.navigate('SymptomQuery')
                            break;
                        case 'DurationQuestionnaire':
                            navigator.navigate('Fever')
                            break;
                        case 'Fever':
                            navigator.navigate('OtherSymptoms')
                            break;
                        case 'OtherSymptoms':
                            navigator.navigate('SymptomProgress')
                            break;
                        case 'SymptomProgress':
                            navigator.navigate('ThankYou')
                            break;
                        case 'ThankYou':
                            navigator.navigate('Diagnosis')
                            break;
                        default:
                            break;
                    }
                }
                }
                disabled={!isChecked}
                style={[styles.stepNavButton, { backgroundColor: !isChecked ? '#66B6FF' : '#0D91DC' }]}>
                <Text
                    style={styles.startText}>
                    {pageName === 'NewDiagnosis' ? 'Start' :
                        pageName === 'OtherSymptoms' ? 'No, I don\'t' :
                            pageName === 'SymptomProgress' ? 'Finish' :
                                pageName === 'ThankYou' ? 'Okay, show me' :
                                    'Next'}</Text>
            </TouchableOpacity>
            <SaveModal isSaveModal={isSaveModal} closeSaveModal={closeSaveModal} />
        </View>
    )
}

export default Footer