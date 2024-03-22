import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../../styles/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import SaveModal from '../modals/SaveModal'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { apiBaseUrl } from '../../constants/constants'

const Footer = (props) => {
    const { isChecked, pageName, symptomList, result, date, selectedGender } = props
    const navigator = useNavigation();
    const [isSaveModal, setIsSaveModal] = useState(false);
    const [diagnosisResult, setDiagnosisResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const userSystoms = symptomList;
    const {userDetails} = useSelector((state)=>state.auth)

    const openSaveModal = () => {
        setIsSaveModal(true);
    }
    const closeSaveModal = () => {
        setIsSaveModal(false);
    }
    useEffect(() => {

    }, [])
    const fetchDiagnosis = async () => {
        try {
            setIsLoading(true)
            const diagnosisResponse = await axios.post(`${apiBaseUrl}/diagnosis/diagnose`, {
                userSystoms
            })
            setIsLoading(false)
            navigator.navigate('ThankYou', { diagnosisResult: diagnosisResponse.data.diagnosisResult })
        } catch (error) {
        }
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
                            navigator.navigate(userDetails.date_of_birth? 'Questionnaire' : 'ClientBio')
                            break;
                        case 'ClientBio':
                            openSaveModal()
                            break;
                        case 'Questionnaire':
                            navigator.navigate('SymptomQuery')
                            break;
                        // case 'DurationQuestionnaire':
                        //     navigator.navigate('Fever')
                        //     break;
                        // case 'Fever':
                        //     navigator.navigate('OtherSymptoms')
                        //     break;
                        case 'SymptomQuery':
                            fetchDiagnosis()
                            break;
                        // case 'SymptomProgress':
                        //     navigator.navigate('ThankYou')
                        //     break;
                        case 'ThankYou':
                            navigator.navigate('Diagnosis', { result: result })
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
                        pageName === 'SymptomQuery' ? isLoading ? <ActivityIndicator color='white' /> : 'Diagnose' :
                            pageName === 'SymptomProgress' ? 'Finish' :
                                pageName === 'ThankYou' ? 'Okay, show me' :
                                    'Next'}
                </Text>
            </TouchableOpacity>
            <SaveModal date={date} selectedGender={selectedGender} isSaveModal={isSaveModal} closeSaveModal={closeSaveModal} />
        </View>
    )
}

export default Footer