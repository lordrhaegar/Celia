import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../../styles/Styles'
import { Image } from 'react-native'
import { logo } from '../../constants/constants'

const DurationQuestionnaireBody = () => {
    const durationOptions = [
        { text: 'Less than one day', value: 'ltod' },
        { text: 'One day to one week', value: 'odtow' },
        { text: 'One week to one month', value: 'owtom' },
        { text: 'One month to one year', value: 'omtoy' }
    ];
    const [duration, setDuration] = useState('');
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
                >How long has this been troubling you?</Text>
                {
                    durationOptions.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setDuration(option.value)}
                            style={[styles.input, { width: '100%', justifyContent: 'center', borderColor: duration === option.value ? '#0D91DC' : '#666B6E' }]}
                        >
                            <Text
                                className="text-[#A5ADB1]"
                                style={[styles.durationQueryBodyText, { color: duration === option.value ? '#0D91DC' : '#666B6E' }]}
                            >   {option.text}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

export default DurationQuestionnaireBody