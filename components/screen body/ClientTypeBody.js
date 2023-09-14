import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import { logo } from '../../constants/constants'

const ClientTypeBody = () => {
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

            <TouchableOpacity
                style={styles.mySelfButton}
            >
                <Text
                    style={styles.mySelfText}
                >Myself</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.someoneElseButton}
            >
                <Text
                    style={styles.someoneElseText}
                >Someone else</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ClientTypeBody