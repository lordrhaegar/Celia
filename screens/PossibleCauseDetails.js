import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/Styles'
import CauseHeader from '../components/includes/CauseHeader'
import PossibleCauseDetailsBody from './PossibleCauseDetailsBody'

const PossibleCauseDetails = ({ route, navigation }) => {
    const { cause, percentage } = route.params;
    return (
        <SafeAreaView>
            <View
                style={styles.continueButtonView}
            >
                <TouchableOpacity
                    style={[styles.button, { width: '100%' }]}
                >
                    <Text
                        className="text-[#FFFBFB]"
                        style={[styles.buttonText]}
                    >Perform further diagnoses using our AI</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.diagnosisSafeArea}
            >
                <CauseHeader possibleCause={cause} navigation={navigation} />
                <PossibleCauseDetailsBody percentage={percentage} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default PossibleCauseDetails