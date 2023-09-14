import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/Styles'
import { logo } from '../../constants/constants'
import FeverModal from '../modals/FeverModal'

const FeverQuestionnaireBody = () => {
    const feverOptions = [
        {label: 'Yes', value: 'yes'},
        {label: 'No', value: 'no'},
        {label: 'Don\'t Know', value: 'don\'t know'}
        
    ];
    const [fever, setFever] = useState('');
    const [isFeverModal, setIsFeverModal] = useState(false);
    const openFeverModal = () => {
        setIsFeverModal(true);
    }
    const closeFeverModal = () => {
        setIsFeverModal(false);
    }

  return (
    <View
            style={styles.durationQuestionBody}
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
            <View style={styles.durationQueryBody}>
                <Text
                    style={styles.title}
                >Do you have a fever?</Text>
                <TouchableOpacity
                onPress={openFeverModal}
                >
                <Text
                style={styles.mySelfText}
                >What does this mean?</Text>
                </TouchableOpacity>
                {
                    feverOptions.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setFever(option.value)}
                            style={[styles.input, { width: '100%', justifyContent: 'center', borderColor: fever === option.value ? '#0D91DC' : '#666B6E' }]}
                        >
                            <Text
                                className="text-[#A5ADB1]"
                                style={[styles.durationQueryBodyText, { color: fever === option.value ? '#0D91DC' : '#666B6E' }]}
                            >   {option.label}</Text>
                        </TouchableOpacity>
                    ))
                }
            <FeverModal isFeverModal={isFeverModal} closeFeverModal={closeFeverModal}/>
            </View>
        </View>
  )
}

export default FeverQuestionnaireBody