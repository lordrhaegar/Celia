import { View, Text, TouchableOpacity, Platform } from 'react-native'
import {React, useRef, useState} from 'react';
import GetStartedBottomSheet from '../modals/GetStartedBottomSheet';
import { styles } from '../../styles/Styles';

export default function SkipButton({onPress}) {
  const [isRegModalVisible, setIsRegModalVisible] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalVisible(prevState => !prevState);
    setIsRegModalVisible(false)
  };
  const closeLoginModal = () => {
    setIsLoginModalVisible(false);
  };

  const openRegModal = () => {
    setIsRegModalVisible(prevState => !prevState);
    setIsLoginModalVisible(false)
  };
  const closeRegModal = () => {
    setIsRegModalVisible(false);
  };
  const modalRef = useRef(null);
  const snapPoints = ["35%"];
  const openBottomSheetModal = () => {
    modalRef.current?.present();
  }
  return (
    <View
    style={{
      marginTop: Platform.OS === 'ios' ? 80 : 0
    }}
    >
      <TouchableOpacity onPress={
        () => {
          openBottomSheetModal();
          onPress();
        }
      } style={styles.skipButtonStyle} className="text-[#8E8B8B] text-lg justify-center items-center " activeOpacity={0.6}>
      <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
      <GetStartedBottomSheet modalRef={modalRef} snapPoints={snapPoints} onPress={onPress} openRegModal={openRegModal} openLoginModal={openLoginModal} isRegModalVisible={isRegModalVisible} closeRegModal={closeRegModal} isLoginModalVisible={isLoginModalVisible} closeLoginModal={closeLoginModal} />
    </View>
  )
}