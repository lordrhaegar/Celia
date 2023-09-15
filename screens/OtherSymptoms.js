import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/Styles'
import Header from '../components/includes/Header'
import SymptomQueryBody from '../components/screen body/SymptomQueryBody'
import Footer from '../components/includes/Footer'

const OtherSymptoms = () => {
    const pageName = 'OtherSymptoms'
  return (
    <SafeAreaView
    style={styles.safeArea}
    >
        <Header pageName={pageName} />
        <SymptomQueryBody pageName={pageName}/>
        <Footer isChecked={true} pageName={pageName} />

    </SafeAreaView>
  )
}

export default OtherSymptoms