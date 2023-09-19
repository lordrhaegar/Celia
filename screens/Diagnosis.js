import React from 'react'
import Header from '../components/includes/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/Styles';
import { ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import Diagnosisbody from '../components/screen body/Diagnosisbody';

const Diagnosis = () => {
    const pageName = 'Diagnosis';
    const width = useWindowDimensions().width;
    return (
        <SafeAreaView>
            <View
                style={styles.continueButtonView}
            >
                <TouchableOpacity
                    style={[styles.button, {width: '100%'}]}
                >
                    <Text
                        className="text-[#FFFBFB]"
                        style={[styles.buttonText]}
                    >Continue</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.diagnosisSafeArea}
            >
                <Header pageName={pageName} />
                <Diagnosisbody />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Diagnosis