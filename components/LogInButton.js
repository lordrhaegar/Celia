import { View, Text, TouchableOpacity, Modal } from 'react-native'
import { React, useState } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { styles } from '../styles/Styles'
import LoginWrapper from './LoginWrapper';
import SigninForm from './SigninForm';

const LogInButton = ({openLoginModal}) => {
    return (
        <View>
            <TouchableOpacity
                style={styles.button2}
                onPress={openLoginModal}
            >
                <Text style={styles.buttonText} className="text-[#27292A]">I already have an account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LogInButton