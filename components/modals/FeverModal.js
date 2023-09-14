import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import FeverNotice from '../modal body/FeverNotice'

const FeverModal = ({isFeverModal, closeFeverModal}) => {
  return (
    <Modal
          visible={isFeverModal}
          animationType='fade'
          transparent={true}
      >
          <View style={styles.modalBackground}>
              <TouchableOpacity
                  onPress={closeFeverModal}
                  style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]} />
              <View style={styles.modalContainer}>
                <FeverNotice closeFeverModal={closeFeverModal}/>
              </View>
          </View>
      </Modal>
  )
}

export default FeverModal