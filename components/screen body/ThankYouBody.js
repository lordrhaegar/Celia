import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import { logo } from '../../constants/constants'

const ThankYouBody = () => {
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
                >Thank you, Ebuka.</Text>
            </View>
            <View className="gap-5">
                <View className="flex-row">
                    <Text style={styles.privacyDetails}>I have put together a report that outlines possible causes with their percentage chances.</Text>
                </View>
                <View className="flex-row">
                    <Text style={styles.privacyDetails}>Don’t forget that this is not a substitute for professional medical advice. And remember that you can always contact the best doctors all within the app.</Text>
                </View>
            </View>
        </View>
  )
}

export default ThankYouBody