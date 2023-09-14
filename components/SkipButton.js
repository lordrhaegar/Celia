import { View, Text, TouchableOpacity } from 'react-native'
import {React, useRef, useState} from 'react';
import GetStartedBottomSheet from './modals/GetStartedBottomSheet';

export default function SkipButton({onPress}) {
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
    <View>
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