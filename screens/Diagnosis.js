import React from 'react'
import Header from '../components/includes/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/Styles';
import { ScrollView, View } from 'react-native';
import Diagnosisbody from '../components/screen body/Diagnosisbody';

const Diagnosis = () => {
    const pageName = 'Diagnosis';
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollView}
            >
                <Header pageName={pageName} />
                <Diagnosisbody/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Diagnosis