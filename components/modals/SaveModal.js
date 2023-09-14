import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import SaveNotice from '../modal body/SaveNotice'

const SaveModal = ({ isSaveModal, closeSaveModal }) => {
  return (
    <Modal
      visible={isSaveModal}
      animationType='fade'
      transparent={true}
    >
      <View style={styles.modalBackground}>
        <TouchableOpacity
          onPress={closeSaveModal}
          style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]} />
        <View style={[styles.modalContainer, { height: "40%" }]}>
          <SaveNotice closeNoticeModal={closeSaveModal} />
        </View>
      </View>
    </Modal>
  )
}

export default SaveModal