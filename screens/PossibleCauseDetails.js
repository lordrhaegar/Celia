import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/Styles'
import CauseHeader from '../components/includes/CauseHeader'
import PossibleCauseDetailsBody from '../components/screen body/PossibleCauseDetailsBody'

const PossibleCauseDetails = ({ route, navigation }) => {
    const { cause, percentage } = route.params;
    return (
        <SafeAreaView
        style={{height: "100%", backgroundColor: 'white'}}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.diagnosisSafeArea}
            >
                <CauseHeader possibleCause={cause} navigation={navigation} />
                <PossibleCauseDetailsBody percentage={percentage} />
            </ScrollView>
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
                <TouchableOpacity
                onPress={()=>navigation.navigate("TalkToADoc")}
                    style={[styles.button2, { width: '100%', borderColor: "#0D91DC" }]}
                >
                    <Text
                        style={[styles.buttonText, {color: '#0D91DC'}]}
                    >Talk to a Doctor</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default PossibleCauseDetails