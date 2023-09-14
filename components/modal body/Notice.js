import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'
import { styles } from '../../styles/Styles'
import { useNavigation } from '@react-navigation/core'

const Notice = ({ pageName, closeNoticeModal }) => {
    const navigator = useNavigation();
    return (
        <View style={styles.noticeCard}>
            <Text style={styles.noticeHeadnig}>Important notice</Text>
            <Text style={styles.noticeH2}>Your current assessment will not be saved and you’d have to start from the beginning again.</Text>
            <Text style={styles.noticeParagraph}>Your current assessment will not be saved and you’d have to start from the beginning again.</Text>
            <View
                className="w-full flex-col justify-between items-center h-[130]"
            >
                <TouchableOpacity
                    onPress={closeNoticeModal}
                    style={styles.button}>
                    <Text style={styles.buttonText} className="text-[#FFFBFB]">Continue with the diagnosis</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        closeNoticeModal()
                        setTimeout(() => {
                            switch (pageName) {
                                case 'NewDiagnosis':
                                    navigator.pop()
                                    break;
                                case 'ClientType':
                                    for (let i = 0; i < 2; i++) {
                                        navigator.pop()
                                    }
                                    break;
                                case 'ClientBio':
                                    for (let i = 0; i < 3; i++) {
                                        navigator.pop()
                                    }
                                    break;
                                case 'Questionnaire':
                                    for (let i = 0; i < 4; i++) {
                                        navigator.pop()
                                    }
                                    break;
                                case 'SymptomQuery':
                                    for (let i = 0; i < 5; i++) {
                                        navigator.pop()
                                    }
                                    break;
                                case 'DurationQuestionnaire':
                                    for (let i = 0; i < 6; i++) {
                                        navigator.pop()
                                    }
                                    break;
                                case 'Fever':
                                    for (let i = 0; i < 7; i++) {
                                        navigator.pop()
                                    }
                                    break;
                                case 'OtherSymptoms':
                                    for (let i = 0; i < 8; i++) {
                                        navigator.pop()
                                    }
                                    break;
                                case 'SymptomProgress':
                                    for (let i = 0; i < 9; i++) {
                                        navigator.pop()
                                    }
                                    break;
                                case 'ThankYou':
                                    for (let i = 0; i < 10; i++) {
                                        navigator.pop()
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }, 1);
                    }}
                    style={styles.buttonRed}>
                    <Text style={styles.buttonText} className="text-[#FFFBFB]">Cancel and take me home</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Notice