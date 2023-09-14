import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { styles } from '../styles/Styles';

const InputCode = ({ closeModal }) => {

    const inputRefs = Array(4).fill(0).map((_, i) => useRef(null));
    const [isCodeIncorrect, setIsCodeIncorrect] = useState(false);
    const [enteredCode, setEnteredCode] = useState('');
    const [countdown, setCountdown] = useState(180);
    const [isCountdownActive, setIsCountdownActive] = useState(false);

    const resendCode = () => {
        setIsCodeIncorrect(false);
        setIsCountdownActive(false);
        setCountdown(180);
    };

    useEffect(() => {
        if (isCountdownActive && countdown > 0) {
            const countdownInterval = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000);

            return () => {
                clearInterval(countdownInterval);
            };
        } else {
            setIsCountdownActive(false);
        }
    }, [isCountdownActive, countdown]);

    const formatCountdown = () => {
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;
        return `(${minutes}:${seconds.toString().padStart(2, '0')})`;
    };

    const focusPreviousInput = index => {
        if (index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };
    const focusNextInput = (index) => {
        if (index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    };
    const startCountdown = () => {
        if (!isCountdownActive) {
            setCountdown(180);
            setIsCountdownActive(true);
        }
    };
    const verifyCode = () => {
        console.log(enteredCode);
        if (enteredCode === '1234') {
            closeModal();
        } else {
            setIsCodeIncorrect(true);
            startCountdown();
        }
    };
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
            <View style={styles.container}>
                <View style={styles.avoidKeyboard} className="w-full flex-row items-center">
                    <TouchableOpacity
                        onPress={closeModal}
                        style={{ gap: 5 }} className="flex-row items-center">
                        <AntDesign
                            name='left'
                            style={{ color: '#0D91DC', fontSize: 13 }}
                        />
                        <Text style={{ fontFamily: 'Gilroy-M', fontSize: 14, fontWeight: 600 }} className="text-[#0D91DC]">
                            Back
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.avoidKeyboard} className="w-full">
                    <Text style={styles.title}>
                        Input code
                    </Text>
                </View>
                <View style={styles.avoidKeyboard} className="w-full">
                    <Text style={styles.description}>
                        Insert the 4 digit code sent to your email to verify it’s your account.
                    </Text>
                </View>
                <View style={styles.avoidKeyboard} className="w-full flex-row gap-4">
                    {inputRefs.map((inputRef, index) => (
                        <TextInput
                            key={index}
                            ref={inputRef}
                            style={isCodeIncorrect ? styles.inputCodeError : styles.inputCode}
                            maxLength={1}
                            keyboardType="numeric"
                            onChangeText={text => {
                                setEnteredCode(prevCode => {
                                    const newCode = text === '' ? '' : prevCode + text;
                                    if (newCode.length === 4) {
                                        setIsCodeIncorrect(false)

                                        console.log(newCode);
                                    } else if (text === '') {
                                        focusPreviousInput(index);
                                    } else {
                                        focusNextInput(index);
                                    }
                                    return newCode;
                                });

                            }}
                        />
                    ))}

                </View>
                {
                    isCodeIncorrect ? (
                        <View>
                            <View style={styles.avoidKeyboard} className="w-full">
                                <Text style={{
                                    color: '#DC0D0D',
                                    fontSize: 15,
                                    fontWeight: '400',
                                    fontFamily: "Gilroy-l"
                                }}>
                                    Code incorrect
                                </Text>
                            </View>
                            <View style={styles.avoidKeyboard} className="w-full">
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: '400',
                                    fontFamily: "Gilroy-l"
                                }}>
                                    Insert the correct code or click on the resend code button to have a new code sent to the same email after a few minutes.
                                </Text>
                            </View>
                        </View>
                    ) : (
                        <View />
                    )
                }

                <View style={styles.avoidKeyboard} className="w-full">
                    <TouchableOpacity
                        onPress={verifyCode}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText} className="text-[#FFFBFB]">Verify code</Text>
                    </TouchableOpacity>

                </View>
                {
                    isCodeIncorrect ? (
                        <View style={styles.avoidKeyboard} className="w-full">
                            <TouchableOpacity
                                onPress={resendCode}
                                disabled={isCountdownActive}
                                style={styles.button2}
                                className="flex-row gap-1"
                            >
                                <Text style={styles.buttonText} className="text-[#27292A]">Resend code</Text>
                                {
                                    isCountdownActive ? (
                                        <Text style={styles.buttonText} className="text-[#DC950D]">{formatCountdown()}`</Text>

                                    ) : null
                                }
                            </TouchableOpacity>

                        </View>
                    ) : (
                        <View />
                    )
                }
            </View>
        </KeyboardAvoidingView>
    )
}

export default InputCode