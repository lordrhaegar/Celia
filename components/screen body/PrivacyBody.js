import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import { logo } from '../../constants/constants'
import Checkbox from 'expo-checkbox'

const PrivacyBody = ({isChecked, setIsChecked}) => {
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
                >Before we get started...</Text>
            </View>
            <View>
                <Text
                    style={styles.privacySubhead}
                >Privacy policy</Text>
            </View>
            <View>
                <Text
                    style={styles.privacyDetails}
                >Before using this app please read the terms of service and remember:</Text>
                <View className="flex-row">
                    <Text style={styles.privacyDetails}>1. </Text>
                    <Text style={styles.privacyDetails}>Always confirm with your doctor. This app is merely a tool to assist.</Text>
                </View>
                <View className="flex-row">
                    <Text style={styles.privacyDetails}>2. </Text>
                    <Text style={styles.privacyDetails}>Diagnosis isn’t for emergencies. Call your local emergency number right away when there’s a health emergency.</Text>
                </View>
            </View>
            <View className="justify-center items-center flex-row">
                <View style={{ padding: 10 }}>
                    <Checkbox
                        value={isChecked}
                        onValueChange={setIsChecked}
                        style={{ borderRadius: 20 }}
                        color={isChecked ? '#0D91DC' : undefined}
                    />
                </View>
                <Text style={styles.checkBoxText}>I have read and accept the <Text style={styles.termsOfService}>Terms of Service.</Text></Text>
            </View>
        </View>
    )
}

export default PrivacyBody