import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CircularProgressBar from '../components/circular progress/CircularProgressBar'
import CircularProgress from 'react-native-circular-progress-indicator'
import celiaStyle from '../styles/celiaAiStyle'
import { styles } from '../styles/Styles'

const PredictionScreen = ({ route, navigation }) => {
  const { height, width } = Dimensions.get("screen")
  const { result, disease } = route.params
  const percentageMatch = result.match(/(\d+\.\d+)%/);
  const percentage = percentageMatch ? parseFloat(percentageMatch[1]) : null;

  return (
    <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', height: height, paddingHorizontal: 50 }}>
      <View style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex' }}>
        <CircularProgress
          radius={90}
          value={Math.floor(percentage)}
          titleColor='#222'
          titleFontSize={30}
          valueSuffix='%'
          inActiveStrokeColor='#0D91DC'
          activeStrokeColor={percentage >= 70 ? 'red' : percentage >= 50 ? 'yellow' : '#0D91DC'}
          inActiveStrokeOpacity={0.2}
          inActiveStrokeWidth={6}
        />
        <Text style={[celiaStyle.paragraph, { textAlign: 'center' }]}>
          Based on your responses, there appears to be a/an <Text style={{ fontFamily: 'Gilroy-B' }}>{Math.floor(percentage)}% likelihood  </Text>of having {disease} in the future.
        </Text>
      </View>
      <View
      className="mb-10"
        style={styles.continueButtonView}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("CeliaAi")}
          style={[styles.button, { width: '100%' }]}
        >
          <Text
            className="text-[#FFFBFB]"
            style={[styles.buttonText]}
          >See other possible predictions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("TalkToADoc")}
          style={[styles.button2, { width: '100%', borderColor: "#0D91DC", backgroundColor: 'transparent' }]}
        >
          <Text
            style={[styles.buttonText, { color: '#0D91DC' }]}
          >Talk to a Doctor</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default PredictionScreen