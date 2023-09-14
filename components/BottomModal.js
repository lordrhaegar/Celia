import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import { React, useRef } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet';

export default function BottomModal({ onPress, componentTorRender }) {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const modalRef = useRef(null);
  const snapPoints = ["35%"];
  const openBottomSheetModal = () => {
    modalRef.current?.present();
  }
  const genericFunc = () => {
    openBottomSheetModal();
    onPress();
  }
  return (
    <View style={{ position: 'absolute', right: width * 0.1, top: height - 70 }}>
      {componentTorRender}
      <BottomSheetModal
        ref={modalRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{ borderRadius: 25, marginBottom: 870 }}
        onDismiss={onPress}
      >
        <View style={{ height: "90%", gap: 20 }} className="flex-col py-2  items-center justify-start">
          <View>
            <Text style={{ fontFamily: 'Gilroy-M', fontSize: 24, fontWeight: 500 }} className="text-[#0D91DC] font-medium">
              Let’s get you started
            </Text>
          </View>
          <View>
            <TouchableOpacity style={{ borderWidth: 0, borderRadius: 500, width: 335, height: 56 }} className=" bg-[#0D91DC] justify-center items-center " activeOpacity={0.6}>
              <Text style={{ fontFamily: 'Gilroy-M', fontSize: 16, fontWeight: 600 }} className="text-[#FFFBFB]">I'm new here</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={{ borderWidth: 0, borderRadius: 500, width: 335, height: 56, borderWidth: 1 }} className=" bg-[#fff] border-[#474A4C] justify-center items-center " activeOpacity={0.6}>
              <Text style={{ fontFamily: 'Gilroy-M', fontWeight: 600, fontSize: 16 }} className="text-[#27292A]">I already have an account</Text>
            </TouchableOpacity>
          </View>

        </View>
      </BottomSheetModal>
    </View>
  )
}
