import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/Styles'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SymptomProgressBody from '../components/screen body/SymptomProgressBody'

const SymptomProgress = () => {
    const pageName = 'SymptomProgress';
  return (
    <SafeAreaView
    style={styles.fullScreen}
    >
    <View
      style={{paddingTop: 50, flex: 1 }}
    >
      <Header pageName={pageName} />
      <SymptomProgressBody />
      <Footer isChecked={true} pageName={pageName} />
    </View>
  </SafeAreaView>
  )
}

export default SymptomProgress