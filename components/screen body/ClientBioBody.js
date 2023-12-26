import { View, Text, Image, TouchableOpacity, Modal, useWindowDimensions, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../../styles/Styles'
import { logo } from '../../constants/constants'
import { TextInput } from 'react-native-gesture-handler'
import DatePickerModal from '../modals/DatePickerModal'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import GenderModal from '../modals/GenderModal'
import { useSelector } from 'react-redux'

const ClientBioBody = (props) => {
    const {setIsChecked, date, setDate, selectedGender, setSelectedGender } = props
    const {userDetails} = useSelector((state)=>state.auth)
    const [isDateModal, setIsDateModal] = useState(false);
    const [isGenderModal, setIsGenderModal] = useState(false);
    const openDateModal = () => {
        setIsDateModal(true);
    }
    const closeDateModal = () => {
        setIsDateModal(false);
    }
    const openGenderModal = () => {
        setIsGenderModal(true);
    }
    const closeGenderModal = () => {
        setIsGenderModal(false);
    }
    const genderOptions = [
        { text: 'Male', value: 'Male', icon: 'male-outline' },
        { text: 'Female', value: 'Female', icon: 'female-outline' }
    ];
    return (
        <View
            style={styles.privacyBody}
        >
            <View
                className="flex-row items-center gap-[0.5]"
            >
                <Image
                    source={logo} />
                <Text
                    style={{
                        fontSize: 26.59,
                        color: '#0D91DC'
                    }}
                >elia</Text>
            </View>
            <View style={{ height: 100, flexDirection: 'column', justifyContent: 'space-between' }}>
                <Text
                    style={styles.title}
                >What is your date of birth?</Text>
                <TextInput
                    editable={false}
                    value={date}
                    style={[styles.input, { width: '100%', paddingLeft: 60, fontFamily: 'Gilroy' }, styles.dateinput]}
                />
                <DatePickerModal
                    date={date}
                    setDate={setDate}
                    isDateModal={isDateModal}
                    closeDateModal={closeDateModal}
                />
            <MaterialIcons
                onPress={openDateModal}
                style={{ position: 'absolute', bottom: /*Platform.OS === 'ios' ? height - 430 : height - 387, right: width - 65*/ 15, left: 20 }}
                size={24}
                color='#0A74B0'
                name='today'
            />
            </View>
            <View style={styles.genderBody}>
                <Text
                    style={styles.title}
                >What is your gender?</Text>
                <View className="flex-row justify-between">
                    {
                        genderOptions.map((gender, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => { 
                                    setSelectedGender(gender.value)
                                    setIsChecked(true)
                                 }}
                                style={[styles.genderButton, { borderColor: selectedGender === gender.value ? '#0D91DC' : '#474A4C' }]}
                            >
                                <Text
                                    style={[styles.buttonText, { color: "black" }]}
                                >{gender.text}</Text>
                                <Ionicons
                                    name={gender.icon}
                                    size={24}
                                />
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <TouchableOpacity
                    className="flex-row items-center gap-[12]"
                    onPress={openGenderModal}
                >
                    <Text
                        style={styles.mySelfText}
                    >Why is there only two genders?</Text>
                    <AntDesign
                        name='questioncircle'
                        color='#0A74B0'
                        size={18}
                    />
                </TouchableOpacity>
            </View>
            <GenderModal isGenderModal={isGenderModal} closeGenderModal={closeGenderModal} />
        </View>
    )
}

export default ClientBioBody