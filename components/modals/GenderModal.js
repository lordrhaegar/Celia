import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import GenderNotice from '../modal body/GenderNotice'

const GenderModal = ({isGenderModal, closeGenderModal}) => {
  return (
      <Modal
          visible={isGenderModal}
          animationType='fade'
          transparent={true}
      >
          <View style={styles.modalBackground}>
              <TouchableOpacity
                  onPress={closeGenderModal}
                  style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]} />
              <View style={styles.modalContainer}>
                  <GenderNotice closeNoticeModal={closeGenderModal} />
              </View>
          </View>
      </Modal>
  )
}

export default GenderModal