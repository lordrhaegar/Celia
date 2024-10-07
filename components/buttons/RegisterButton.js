import { View, Text, TouchableOpacity, Modal } from 'react-native'
import { React, useState } from 'react'
import { styles } from '../../styles/Styles';
import SignupForm from '../forms/SignupForm';

const RegisterButton = ({openRegModal, backgroundColor}) => {
    return (
        <View>
            <TouchableOpacity onPress={openRegModal} style={[styles.button, {backgroundColor: backgroundColor}]} className=" bg-[#0D91DC] justify-center items-center " activeOpacity={0.6}>
                <Text style={styles.buttonText} className="text-[#FFFBFB]">I'm new here</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterButton