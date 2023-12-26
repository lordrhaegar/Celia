import { View, Text, TouchableOpacity, TextInput, Platform } from 'react-native'
import { React, useState } from 'react'
import { styles } from '../../styles/Styles';
import { AntDesign } from '@expo/vector-icons';
import { KeyboardAvoidingView } from 'react-native';
import validator from 'validator';
import { useSelector } from 'react-redux';
import Button from '../buttons/Button';

const ForgotPassword = ({ isForgotModalVisible, openCodeModal, closeForgotModal }) => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsvalidEmail] = useState(true);
    const { userType } = useSelector((state) => state.auth)
    const onPress = () => {
        if (isForgotModalVisible) {
            openCodeModal();
            closeForgotModal();
        }
    }
    const checkValidEmail = (input) => {
        setIsvalidEmail(validator.isEmail(input));
    }
    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/register', {
                username,
                email,
                password
            });

            console.log(response.data.message);
        } catch (error) {
            console.error('An error occurred', error);
        }
    };
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
            <View style={styles.container}>
                <View style={styles.avoidKeyboard} className="w-full flex-row items-center">
                    <TouchableOpacity
                        onPress={closeForgotModal}
                        style={{ gap: 5 }} className="flex-row items-center">
                        <AntDesign
                            name='left'
                            style={{ color: '#0D91DC', fontSize: 13 }}
                        />
                        <Text style={{ fontFamily: 'Gilroy-M', fontSize: 14, fontWeight: '600', color: userType === 'Doctor' ? '#7CD1D1' : "#0D91DC" }}>
                            Back
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.avoidKeyboard} className="w-full">
                    <Text style={styles.title}>
                        So you forgot your password
                    </Text>
                </View>
                <View style={styles.avoidKeyboard} className="w-full">
                    <Text style={styles.description}>
                        Don’t worry, it happens to the best of us. Let us help you recover your account.
                    </Text>
                </View>
                <View style={styles.avoidKeyboard} className="w-full gap-3">
                    <Text style={styles.inputLabel}>Enter your registered email address</Text>
                    <TextInput
                        onChangeText={(text) => {
                            checkValidEmail(text);
                            isValidEmail ? setEmail(text) : null
                        }}
                        keyboardType='email-address'
                        style={isValidEmail ? styles.input : styles.inputError} />
                    {
                        !isValidEmail ? (
                            <Text style={{
                                color: '#DC0D0D',
                                fontSize: 15,
                                fontWeight: '400',
                                fontFamily: "Gilroy-l"
                            }}>
                                Please Enter a Valid Email
                            </Text>
                        ) : (
                            <View />
                        )
                    }
                </View>
                <View style={styles.avoidKeyboard} className="w-full">
                    <Text style={{
                        fontSize: 15,
                        fontWeight: '400',
                        fontFamily: "Gilroy-l"
                    }}>
                        A short code will be sent to the email verify if this account actually belongs to you.
                    </Text>
                </View>
                <Button title={"Send Code"} buttonStyle={styles.button} textStyle={styles.buttonText} textColor={"#FFFBFB"} onPress={onPress} />
                {/* <View style={styles.avoidKeyboard} className="w-full">
                    <TouchableOpacity
                        onPress={() => {
                            if (isForgotModalVisible) {
                                openCodeModal();
                                closeForgotModal();
                            }
                        }}
                        style={[styles.button, { backgroundColor: userType === 'Doctor' ? '#7CD1D1' : "#0D91DC" }]}
                    >
                        <Text style={styles.buttonText} className="text-[#FFFBFB]">Send code</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </KeyboardAvoidingView>
    )
}

export default ForgotPassword