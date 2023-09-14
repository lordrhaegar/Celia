import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/Styles'
import Header from '../components/Header'
import SymptomQueryBody from '../components/screen body/SymptomQueryBody'
import Footer from '../components/Footer'

const OtherSymptoms = () => {
    const pageName = 'OtherSymptoms'
  return (
    <SafeAreaView
    style={styles.fullScreen}
    >
      <View
        style={[{ paddingTop: 50}, styles.fullScreen]}
      >
        <Header pageName={pageName} />
        <SymptomQueryBody pageName={pageName}/>
        <Footer isChecked={true} pageName={pageName} />
      </View>
    </SafeAreaView>
  )
}

export default OtherSymptoms