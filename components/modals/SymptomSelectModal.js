import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import SymptomSelectSearchBody from '../modal body/SymptomSelectSearchBody'

const SymptomSelectModal = ({symptom, isSelectSymptomModal, closeSelectSymptomModal, setSymptom}) => {
  return (
    <Modal
    visible={isSelectSymptomModal}
    animationType='fade'
    transparent={true}
  >
    <View style={styles.modalBackground}>
      <TouchableOpacity
        onPress={closeSelectSymptomModal}
        style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]} />
      <View style={styles.modalContainer}>
        <SymptomSelectSearchBody closeSelectSymptomModal={closeSelectSymptomModal} symptom={symptom} setSymptom={setSymptom}/>
      </View>
    </View>
  </Modal>
  )
}

export default SymptomSelectModal