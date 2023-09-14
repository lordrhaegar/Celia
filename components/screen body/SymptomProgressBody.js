import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/Styles';
import { logo } from '../../constants/constants'
const SymptomProgressBody = () => {
    const progressOptions = [
        {label: 'They’re getting worse', value: 'worse'},
        {label: 'They’re not as bad as they were', value: 'better'},
        {label: 'They’re staying about the same', value: 'same'}
        
    ];
    const [symptomProgress, setsymptomProgress] = useState('');
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
                >One final question. How are the symptoms changing over time?</Text>
                {
                    progressOptions.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setsymptomProgress(option.value)}
                            style={[styles.input, { width: '100%', justifyContent: 'center', borderColor: symptomProgress === option.value ? '#0D91DC' : '#666B6E' }]}
                        >
                            <Text
                                className="text-[#A5ADB1]"
                                style={[styles.durationQueryBodyText, { color: symptomProgress === option.value ? '#0D91DC' : '#666B6E' }]}
                            >   {option.label}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
  )
}

export default SymptomProgressBody