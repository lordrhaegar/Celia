import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/Styles'
import { Image } from 'react-native'
import { logo } from '../../constants/constants'
import { useEffect } from 'react'
import SymptomModal from '../modals/SymptomModal'
import SymptomSelectModal from '../modals/SymptomSelectModal'

const SymptomQueryBody = ({pageName}) => {
    const [symptom, setSymptom] = useState('')
    const [isSymptomModal, setIsSymptomModal] = useState(false);
    const [isSelectSymptomModal, setIsSelectSymptomModal] = useState(false);
    const openSymptomModal = () => {
        setIsSymptomModal(true);
    }
    const closeSymptomModal = () => {
        setIsSymptomModal(false);
    }
    const openSelectSymptomModal = () => {
        setIsSelectSymptomModal(true);
        closeSymptomModal()
    }
    const closeSelectSymptomModal = () => {
        setIsSelectSymptomModal(false);
    }
    return (
        <View
            style={styles.privacyBody}
        >
            <View
                className="flex-row items-center gap-[0.5]"
            >
                <Image
                    source={logo} />
                <Text
                    style={{
                        fontSize: 26.59,
                        color: '#0D91DC'
                    }}
                >elia</Text>
            </View>
            <View style={styles.symptomQueryBody}>
                <Text
                    style={styles.title}
                >{pageName === 'OtherSymptoms'? 'Do you have any other symptoms?': 'Let’s now start with the symptom that’s troubling you the most'}</Text>
                <TouchableOpacity
                    onPress={openSymptomModal}
                    style={[styles.input, { width: '100%', justifyContent: 'center' }]}
                >
                    <Text
                        className="text-[#A5ADB1]"
                        style={styles.inputLabel}
                    >e.g headache</Text>
                </TouchableOpacity>
            </View>
            <SymptomModal openSelectSymptomModal={openSelectSymptomModal} symptom={symptom} setSymptom={setSymptom} isSymptomModal={isSymptomModal} closeSymptomModal={closeSymptomModal} />
            <SymptomSelectModal symptom={symptom} setSymptom={setSymptom} isSelectSymptomModal={isSelectSymptomModal} closeSelectSymptomModal={closeSelectSymptomModal} />
        </View>
    )
}

export default SymptomQueryBody