import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'

const CustomModal = (props) => {
    const {closeModal, height} = props 
  return (
    <Modal
            visible={props.visibility}
            animationType={props.animationType}
            transparent={true}
        >
            <View style={styles.modalBackground}>
                <TouchableOpacity
                    onPress={closeModal}
                    style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]} />
                <View style={[styles.modalContainer, {height: height}]}>
                    {props.component}
                </View>
            </View>
        </Modal>
  )
}

export default CustomModal