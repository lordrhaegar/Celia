import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/Styles'
import { Image } from 'react-native'
import { logo } from '../../constants/constants'
import { useEffect } from 'react'
import SymptomModal from '../modals/SymptomModal'
import SymptomSelectModal from '../modals/SymptomSelectModal'
import { AntDesign } from '@expo/vector-icons'

const SymptomQueryBody = (props) => {
    const {removeSymptomFromList, symptomList, symptom, setSymptom, addSymptomToList, setIsChecked} = props
    const [isSymptomModal, setIsSymptomModal] = useState(false);
    const [isSelectSymptomModal, setIsSelectSymptomModal] = useState(false);
    useEffect(()=>{
        symptomList.length > 0 ? setIsChecked(true) : setIsChecked(false)
    },[symptomList])
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
            style={[styles.privacyBody, {justifyContent: 'space-between'}]}
        >
            <View style={[styles.noticeCard, {height: 200}]}>
            <Text
                style={styles.title}>{symptomList.length > 0 ? 'Symptoms' : 'No Symptoms Selected'}</Text>
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                width: '100%'
            }}
            >
            {
                symptomList.length > 0 ? 
                symptomList.map((item, index) => (
                    <View
                        className="flex-row justify-between"
                        key={index}
                        disabled
                        style={styles.searchResultList}
                    >
                        <Text
                            style={styles.searchResultUnmatch}
                        >{item}</Text>
                        <AntDesign
                        onPress={()=>{
                            removeSymptomFromList(index)
                        }}
                        color='#868C8F'
                        name='close'
                        size={20}
                        />
                    </View>
                ))
                : <View/>
            }
            </ScrollView>
        </View>
            <View style={styles.symptomQueryBody}>
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
                <Text
                    style={styles.title}
                >Let’s now start with the symptom that’s troubling you the most</Text>
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
            <SymptomModal /*openSelectSymptomModal={openSelectSymptomModal}*/ symptom={symptom} setSymptom={setSymptom} isSymptomModal={isSymptomModal} closeSymptomModal={closeSymptomModal} addSymptomToList={addSymptomToList} />
            {/* <SymptomSelectModal symptom={symptom} setSymptom={setSymptom} isSelectSymptomModal={isSelectSymptomModal} closeSelectSymptomModal={closeSelectSymptomModal} /> */}
        </View>
    )
}

export default SymptomQueryBody