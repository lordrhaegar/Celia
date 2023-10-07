import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/Styles'
import { logo } from '../../constants/constants'

const ClientTypeBody = () => {
    const [selectedClientType, setSelectedClientType] = useState('');
    const clientTypeOptions = [
        { text: 'Myself', value: 'myself' },
        { text: 'Someone Else', value: 'someoneelse'}
    ];
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
            <View>
                <Text
                    style={styles.title}
                >Who is this diagnosis for?</Text>
            </View>
            {
                clientTypeOptions.map((clientType, index)=>(
                    <TouchableOpacity
                    key={index}
                    onPress={()=>setSelectedClientType(clientType.value)}
                style={selectedClientType === clientType.value ? styles.mySelfButton : styles.someoneElseButton}
            >
                <Text
                    style={selectedClientType === clientType.value ? styles.mySelfText : styles.someoneElseText}
                >{clientType.text}</Text>
            </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default ClientTypeBody