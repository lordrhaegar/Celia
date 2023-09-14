import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SymptomQueryBody from '../components/screen body/SymptomQueryBody'
import { styles } from '../styles/Styles'

const SymptomQuery = () => {
  const pageName = 'SymptomQuery';
  const height = useWindowDimensions().height;
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

export default SymptomQuery