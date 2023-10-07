import { View, Text, TouchableOpacity, Platform } from 'react-native'
import {React, useRef, useState} from 'react';
import GetStartedBottomSheet from '../modals/GetStartedBottomSheet';

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
      } style={{borderColor: '#E4E4E4', borderWidth: 1, borderRadius: 20, width: 69, height:37}} className="text-[#8E8B8B] text-lg justify-center items-center " activeOpacity={0.6}>
      <Text style={{fontSize: 16, fontWeight: '600', fontFamily: "Gilroy-l"}}>Skip</Text>
      </TouchableOpacity>
      <GetStartedBottomSheet modalRef={modalRef} snapPoints={snapPoints} onPress={onPress} openRegModal={openRegModal} openLoginModal={openLoginModal} isRegModalVisible={isRegModalVisible} closeRegModal={closeRegModal} isLoginModalVisible={isLoginModalVisible} closeLoginModal={closeLoginModal} />
    </View>
  )
}