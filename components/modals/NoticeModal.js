import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import Notice from '../modal body/Notice'

const NoticeModal = ({pageName, isNoticeModal, closeNoticeModal}) => {
    return (
        <Modal
            visible={isNoticeModal}
            animationType='fade'
            transparent={true}
        >
            <View style={styles.modalBackground}>
                <TouchableOpacity
                    onPress={closeNoticeModal}
                    style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]} />
                <View style={[styles.modalContainer, { height: "48%" }]}>
                    <Notice pageName={pageName} closeNoticeModal={closeNoticeModal} />
                </View>
            </View>
        </Modal>
    )
}

export default NoticeModal