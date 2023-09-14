import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'

const FeverNotice = ({closeFeverModal}) => {
  return (
    <View style={styles.noticeCard}>
      <Text style={styles.genderNoticeHeadnig}>Important Information</Text>
      <Text style={styles.noticeH2}>Fever</Text>
      <Text style={styles.noticeParagraph}>A body temperature of 38C or higher</Text>
      <View
        className="w-full flex-col justify-between items-center"
      >
        <TouchableOpacity
          onPress={closeFeverModal}
          style={styles.button}>
          <Text style={styles.buttonText} className="text-[#FFFBFB]">Ok, I understand. Let’s continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FeverNotice