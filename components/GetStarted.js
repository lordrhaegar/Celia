import { View, Text, TouchableOpacity, useWindowDimensions, Modal } from 'react-native'
import { React, useRef, useState } from 'react'
import { styles } from '../styles/Styles';
import GetStartedBottomSheet from './modals/GetStartedBottomSheet';

export default function GetStarted({ onPress }) {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const [isRegModalVisible, setIsRegModalVisible] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalVisible(true);
  };
  const closeLoginModal = () => {
    setIsLoginModalVisible(false);
  };

  const openRegModal = () => {
    setIsRegModalVisible(true);
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
    <View style={{ position: 'absolute', right: width * 0.1, top: height - 100 }}>
      <TouchableOpacity onPress={
        () => {
          openBottomSheetModal();
          onPress();
        }
      } style={styles.button} className=" bg-[#0D91DC]" activeOpacity={0.6}>
        <Text style={styles.buttonText} className="text-[#FFFBFB]">Get Started</Text>
      </TouchableOpacity>
      <GetStartedBottomSheet modalRef={modalRef} snapPoints={snapPoints} onPress={onPress} openRegModal={openRegModal} openLoginModal={openLoginModal} isRegModalVisible={isRegModalVisible} closeRegModal={closeRegModal} isLoginModalVisible={isLoginModalVisible} closeLoginModal={closeLoginModal} />
    </View>
  )
}
