import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DocHeader2 from '../components/includes/DocHeader2'
import { patientSetttingsStyles } from '../styles/patientSettingsStyle'
import { apiBaseUrl, backgroundColors, checkUserType, convertTimestampToDate, convertTimestampToDateFormat, doctor } from '../constants/constants'
import { docDetailsStyle } from '../styles/docDetailsStyles'
import { MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'
import InputFeild from '../components/forms/InputFeild'
import { ScrollView } from 'react-native'

import { styles } from '../styles/Styles'
import DropDownPicker from '../components/drop down/DropDownPicker'
import CustomDropDownPicker from '../components/drop down/DropDownPicker'
import DatePickerModal from '../components/modals/DatePickerModal'
import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Button from '../components/buttons/Button'
import CeliaPreloader from '../components/preloader/CeliaPreloader'
import axios from 'axios'
import { availabilitySetupStyles } from '../styles/availabilitySetupStyles'
import { CommonActions } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import CustomModal from '../components/modals/Modal'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message'
import Reply from '../components/Yes, No, Not Sure/Reply'
import Calendar from '../components/calender/CalendarPreview'




const PatientSettings = ({ navigation }) => {
    const { userDetails } = useSelector((state) => state.auth)
    const { _id } = userDetails
    const [selectedTab, setSelectedtab] = useState("My Profile")
    const [tabOptions, setTabOptions] = useState(["My Profile", "My Account"])
    const [isDateModal, setIsDateModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [fullname, setFullname] = useState("")
    const [mobileNo, setMobileNo] = useState("")
    const [speciality, setSpeciality] = useState("")
    const [hospital, setHospitals] = useState("")
    const [years, setYears] = useState("")
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [date, setDate] = useState("");
    const [_gender, setGender] = useState("")
    const [open, setOpen] = useState(false);
    const [genderOptions, setGenderOptions] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' }
    ]);
    const [genoOpen, setgenoOpen] = useState(false);
    const [genotypeOptions, setgenotypeOptions] = useState([
        { label: 'AA', value: 'AA' },
        { label: 'AS', value: 'AS' },
        { label: 'SS', value: 'SS' },
        { label: 'AC', value: 'AC' },
        { label: 'SC', value: 'SC' },
        { label: 'CC', value: 'CC' },
    ]);
    const [bloodOpen, setbloodOpen] = useState(false);
    const [bloodGroupOptions, setbloodGroupOptions] = useState([
        { label: 'A+', value: 'A+' },
        { label: 'A-', value: 'A-' },
        { label: 'B+', value: 'B+' },
        { label: 'B-', value: 'B-' },
        { label: 'AB+', value: 'AB+' },
        { label: 'AB-', value: 'AB-' },
        { label: 'O+', value: 'O+' },
        { label: 'O-', value: 'O-' },
    ]);
    const [isNewPassVisble, setIsNewPassVisble] = useState(false)
    const [isConfirmPassVisble, setIsConfirmPassVisble] = useState(false)
    const [isOldPassVisble, setIsOldPassVisble] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [modalContents, setModalContents] = useState({})
    const [isPersonalInfoArrowUp, setIsPersonalInfoAlertArrowUp] = useState(true)
    const [isBodyInfoArrowUp, setIsBodyInfoAlertArrowUp] = useState(false)
    const [isHealthArrowUp, setIsHealthAlertArrowUp] = useState(false)
    const [isAllergiesArrowUp, setIsAllergiesAlertArrowUp] = useState(false)
    const { userToken } = useSelector((state) => state.auth)
    const { userType } = useSelector((state) => state.auth)
    const [genotype, setGenotype] = useState("")
    const [bloodGroup, setBloodGroup] = useState("")
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [diabetic, setDiabetic] = useState("")
    const [bloodPressure, setBloodPressure] = useState("")
    const [asmathic, setAsmathic] = useState("")
    const [smoke, setSmoke] = useState("")
    const [allergies, setAllergies] = useState([])
    const [newAllegy, setNewAllegy] = useState("")
    const [isAddActive, setIsAddActive] = useState(false)
    const [nextOfKin, setNextOfKin] = useState("")
    const [relationshipWithKin, setRelationshipWithKin] = useState("")
    const [religion, setReligion] = useState("")
    const [occupation, setOccupation] = useState("")
    const [tribe, setTribe] = useState("")
    const [town, setTown] = useState("")
    const [placeOfOrigin, setPlaceOfOrigin] = useState("")
    const [lga, setLga] = useState("")
    const [nextOfKinPhone, setNextOfKinPhone] = useState("")
    useEffect(() => {
        console.log("allergies=>", allergies);
    }, [allergies])
    const personalInformation = [
        {
            label: "Next of Kin",
            placeholder: "AA",
            validity: () => true,
            setInput: setNextOfKin,
            value: nextOfKin
        },
        {
            label: "Relationship with next of kin",
            placeholder: "B+",
            validity: () => true,
            setInput: setRelationshipWithKin,
            value: relationshipWithKin
        }, ,
        {
            label: "Next of kin Phone",
            placeholder: "B+",
            validity: () => true,
            setInput: setNextOfKinPhone,
            value: nextOfKinPhone
        },
        {
            label: "Religion",
            placeholder: "80",
            validity: () => true,
            setInput: setReligion,
            value: religion
        },
        {
            label: "Tribe",
            placeholder: "59",
            validity: () => true,
            setInput: setTribe,
            value: tribe
        },
        {
            label: "Occupation",
            placeholder: "59",
            validity: () => true,
            setInput: setOccupation,
            value: occupation
        },
        {
            label: "Place of origin",
            placeholder: "59",
            validity: () => true,
            setInput: setPlaceOfOrigin,
            value: placeOfOrigin
        },
        {
            label: "Town",
            placeholder: "59",
            validity: () => true,
            setInput: setTown,
            value: town
        },
        {
            label: "L.G.A",
            placeholder: "59",
            validity: () => true,
            setInput: setLga,
            value: lga
        }
    ]
    const healthRecord = [
        {
            label: "Body Weight (kg)",
            placeholder: "80",
            validity: () => true,
            setInput: setWeight,
            value: weight.toString()
        },
        {
            label: "Body Height (cm)",
            placeholder: "59",
            validity: () => true,
            setInput: setHeight,
            value: height.toString()
        }
    ]
    const healthCondition = [
        {
            label: "Are you diabetic?",
            answers: ["Yes", "No", "Not Sure"],
            onPress: setDiabetic

        },
        {
            label: "Do you have high blood pressure?",
            answers: ["Yes", "No", "Not Sure"],
            onPress: setBloodPressure

        },
        {
            label: "Are you asthmatic?",
            answers: ["Yes", "No", "Not Sure"],
            onPress: setAsmathic

        },
        {
            label: "Do you smoke?",
            answers: ["Yes", "No", "Not Sure"],
            onPress: setSmoke

        }
    ]
    useEffect(() => {
        setTabOptions([...tabOptions])
        setTabOptions(checkUserType(userType) ?
            [...tabOptions, "Medical Records"]
            : [...tabOptions, "My Career"]
        )
    }, [])
    useEffect(() => {
        (async () => {
            const getUserData = await axios.get(`${apiBaseUrl}/${checkUserType(userType) ? 'user' : 'doctor/doctor'}/${_id}`)
            if (getUserData.status === 200) {
                const {
                    firstname,
                    lastname,
                    gender,
                    date_of_birth,
                    speciality,
                    mobile,
                    diabetic,
                    hypertensive,
                    asthmatic,
                    smoker,
                    allergies,
                    blood_group,
                    genotype,
                    next_of_kin,
                    next_of_kin_mobile,
                    occupation,
                    place_of_origin,
                    relationship_with_next_of_kin,
                    religion,
                    tribe,
                    town,
                    lga,
                    height,
                    weight
                } = getUserData.data.user || getUserData.data.doctor
                setFullname(`${firstname} ${lastname}`)
                setGender(gender)
                setDate(convertTimestampToDateFormat(date_of_birth))
                setSpeciality(speciality)
                setMobileNo(mobile)
                if (checkUserType(userType)) {
                    setDiabetic(diabetic)
                    setAsmathic(asthmatic)
                    setSmoke(smoker)
                    setBloodPressure(hypertensive)
                    setAllergies(allergies)
                    setBloodGroup(blood_group)
                    setGenotype(genotype)
                    setNextOfKin(next_of_kin)
                    setNextOfKinPhone(next_of_kin_mobile)
                    setOccupation(occupation)
                    setPlaceOfOrigin(place_of_origin)
                    setRelationshipWithKin(relationship_with_next_of_kin)
                    setReligion(religion)
                    setTribe(tribe)
                    setTown(town)
                    setLga(lga)
                    setHeight(height)
                    setWeight(weight)
                }
            }
        })()
    }, [])
    const togglePersonalInfoArrow = () => {
        setIsPersonalInfoAlertArrowUp(!isPersonalInfoArrowUp)
        setIsBodyInfoAlertArrowUp(false)
        setIsHealthAlertArrowUp(false)
        setIsAllergiesAlertArrowUp(false)

    }
    const toggleBodyInfoArrow = () => {
        setIsBodyInfoAlertArrowUp(!isBodyInfoArrowUp)
        setIsPersonalInfoAlertArrowUp(false)
        setIsHealthAlertArrowUp(false)
        setIsAllergiesAlertArrowUp(false)
    }
    const toggleHealthArrow = () => {
        setIsHealthAlertArrowUp(!isHealthArrowUp)
        setIsBodyInfoAlertArrowUp(false)
        setIsPersonalInfoAlertArrowUp(false)
        setIsAllergiesAlertArrowUp(false)
    }
    const toggleAllergiesArrow = () => {
        setIsAllergiesAlertArrowUp(!isAllergiesArrowUp)
        setIsBodyInfoAlertArrowUp(false)
        setIsPersonalInfoAlertArrowUp(false)
        setIsHealthAlertArrowUp(false)
    }
    const closeModal = () => {
        setIsModalVisible(false)
    }
    const checkValidFullname = (text) => {
        return text.split(" ").length === 2
    }
    const checkPassword = (text) => true
    const checkValidMobile = (text) => {
        return text.length === 11
    }
    const defaultValidity = () => true
    const openDateModal = () => {
        setIsDateModal(true);
    }
    const closeDateModal = () => {
        setIsDateModal(false);
    }
    const successModal = (body) => {
        setModalContents({
            icon: <Ionicons
                name="checkmark-circle-outline"
                size={24}
                color={"#0A74B0"}
            />,
            heading: "Success",
            bg: "#CFE9F8",
            body: body.toUpperCase(),
        })
        setIsModalVisible(true)
    }
    const failedModal = (errorMessage) => {
        setModalContents({
            icon: <AntDesign
                name='exclamation'
                size={24}
                color={"white"}
            />,
            heading: "Failed",
            bg: "#DC0D0D",
            body: errorMessage.toUpperCase(),
        })
        setIsModalVisible(true)
    }
    const updateProfile = async () => {
        const payload = checkUserType(userType) ? {
            firstname: fullname.split(" ")[0],
            lastname: fullname.split(" ")[1],
            gender: _gender,
            date_of_birth: date,
            mobile: mobileNo,
        } : {
            firstname: fullname.split(" ")[0],
            lastname: fullname.split(" ")[1],
            gender: _gender,
            mobile: mobileNo,
            speciality: speciality
        }
        setIsLoading(true)
        try {
            const profileUpdate = await axios.put(`${apiBaseUrl}/${checkUserType(userType) ? "auth" : "doctor"}/update`, payload, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            if (profileUpdate.status === 200 || changePass.status === 201) {
                successModal("Profile Updated Successfully")
            }
        } catch (error) {
            failedModal(error.response.data.error || error.response.data.message)
        } finally {
            setIsLoading(false)
        }
    }
    const updateMedRecords = async () => {
        const payload = {
            blood_group: bloodGroup,
            genotype: genotype,
            height: height,
            weight: weight,
            allergies: allergies,
            diabetic: diabetic,
            hypertensive: bloodPressure,
            asthmatic: asmathic,
            smoker: smoke,
            occupation: occupation,
            religion: religion,
            tribe: tribe,
            place_of_origin: placeOfOrigin,
            next_of_kin: nextOfKin,
            relationship_with_next_of_kin: relationshipWithKin,
            next_of_kin_mobile: nextOfKinPhone,
            town: town,
            lga: lga
        }
        setIsLoading(true)
        try {
            const medUpdate = await axios.put(`${apiBaseUrl}/user/update/medical-record`, payload, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            if (medUpdate.status === 200 || changePass.status === 201) {
                successModal("Profile Updated Successfully")
            }
        } catch (error) {
            // failedModal(error.response.data.error || error.response.data.message)
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        console.log(bloodGroup);
    }, [bloodGroup])
    const changePassword = async () => {
        const payload = {
            password: oldPassword.trim(),
            newPassword: newPassword.trim(),
            confirmNewPassword: confirmPassword.trim()
        }
        setIsLoading(true)
        try {
            const changePass = await axios.put(`${apiBaseUrl}/${checkUserType(userType) ? "user" : "doctor"}/password/change`, payload, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            if (changePass.status === 200 || changePass.status === 201) {
                successModal("Password Changed Successfully")
            }
        } catch (error) {
            failedModal(error.response.data.error || error.response.data.message)
        } finally {
            setIsLoading(false)
        }
    }

    const modalContent = (
        <View style={availabilitySetupStyles.successModalBox}>
            <View style={availabilitySetupStyles.successIconContainer}>
                <MotiView
                    from={{ rotateY: "0deg" }}
                    animate={{ rotateY: "360deg" }}
                    transition={{
                        type: 'spring',
                        duration: 5000,
                        ease: Easing.bounce,
                        loop: true
                    }}
                    style={[availabilitySetupStyles.successIconBackground, { backgroundColor: modalContents.bg }]}>
                    {modalContents.icon}
                </MotiView>
            </View>
            <View style={availabilitySetupStyles.successIconContainer}>
                <Text style={availabilitySetupStyles.successModalTextH1}>{modalContents.heading}</Text>
            </View>
            <View style={[availabilitySetupStyles.successIconContainer, { height: 100 }]}>
                <Text style={availabilitySetupStyles.successModalTextP}>
                    {modalContents.body}
                </Text>
            </View>
            <View>
                <Button
                    textColor="#FFFBFB"
                    buttonStyle={[styles.button, { width: "100%" }]}
                    title="Ok"
                    backgroundColor={backgroundColors.patientSelectedBackground}
                    viewStyle={{ paddingHorizontal: 5 }}
                    onPress={closeModal}
                />
            </View>
        </View>
    )
    return (
        <SafeAreaView className="h-full w-full bg-white">
            <DocHeader2
                title="All about you"
                navigator={navigation}
            />

            <View style={patientSetttingsStyles.tabNavBox}>
                {
                    tabOptions.map((tab, idx) =>
                        <TouchableOpacity
                            onPress={() => setSelectedtab(tab)}
                            activeOpacity={1}
                            key={idx} style={[patientSetttingsStyles.tabNavButton, { borderBottomColor: selectedTab === tab ? checkUserType(userType) ? backgroundColors.patientSelectedBackground : backgroundColors.doctorSelectedBackground : "transparent" }]}>
                            <Text style={[patientSetttingsStyles.tabNavBoxText, { color: selectedTab === tab ? checkUserType(userType) ? backgroundColors.patientSelectedBackground : backgroundColors.doctorSelectedBackground : "black" }]}>{tab}</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
            <ScrollView>
                <View
                    style={docDetailsStyle.imageContainer}>
                    <Image
                        source={doctor}
                        style={{ flex: 1, width: "100%" }}
                        resizeMode='cover'
                    />
                </View>

                <MotiView
                    from={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 2000,
                        type: 'spring',
                        ease: Easing.linear
                    }}
                    style={patientSetttingsStyles.formContainer}>
                    {
                        selectedTab === "My Profile" ?
                            (
                                <View>
                                    <View>
                                        <Text style={[patientSetttingsStyles.formHeader, styles.avoidKeyboard]}>My personal information</Text>
                                    </View>
                                    <InputFeild
                                        input={fullname}
                                        label="Full name"
                                        setInput={setFullname}
                                        checkValidityOfInput={checkValidFullname}
                                        errorText={"Enter your full name"}
                                    />
                                    <InputFeild
                                        label="Whatsapp Mobile Number"
                                        setInput={setMobileNo}
                                        checkValidityOfInput={checkValidMobile}
                                        errorText={"Enter valid mobile number"}
                                        input={mobileNo}
                                        keyboardType={"numeric"}
                                    />
                                    <DropDownPicker
                                        label={"Gender"}
                                        open={open}
                                        value={_gender}
                                        items={genderOptions}
                                        setOpen={setOpen}
                                        setValue={setGender}
                                        setItems={setGenderOptions}
                                        placeholder={_gender}
                                    />
                                    {
                                        checkUserType(userType) && (
                                            <View style={{ gap: 12 }}>
                                                <Text
                                                    style={styles.inputLabel}
                                                >Date of birth</Text>
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
                                                    style={{ position: 'absolute', bottom: 27, left: 20 }}
                                                    size={24}
                                                    color='#0A74B0'
                                                    name='today'
                                                />
                                            </View>
                                        )
                                    }

                                    <Button
                                        textColor="#FFFBFB"
                                        buttonStyle={[styles.button, { width: "100%" }]}
                                        title="Update profile"
                                        textStyle={styles.buttonText}
                                        backgroundColor={checkUserType(userType) ? backgroundColors.patientSelectedBackground : backgroundColors.doctorSelectedBackground}
                                        viewStyle={{ paddingHorizontal: 5, marginTop: 40 }}
                                        onPress={updateProfile}
                                        isLoading={isLoading}
                                    />
                                </View>
                            ) :
                            selectedTab === "My Account" ?
                                (
                                    <View>
                                        <View>
                                            <Text style={[patientSetttingsStyles.formHeader, styles.avoidKeyboard]}>My account information</Text>
                                        </View>
                                        <InputFeild
                                            label="Old password"
                                            setInput={setOldPassword}
                                            checkValidityOfInput={checkPassword}
                                            secureTextEntry={isOldPassVisble}
                                            errorText={""}
                                            keyboardType="pass"
                                            togglePasswordVisibility={() => setIsOldPassVisble(!isOldPassVisble)}
                                            isPasswordVisible={isOldPassVisble}
                                        />
                                        <InputFeild
                                            label="New password"
                                            setInput={setNewPassword}
                                            secureTextEntry={isNewPassVisble}
                                            checkValidityOfInput={checkPassword}
                                            errorText={""}
                                            keyboardType="pass"
                                            togglePasswordVisibility={() => setIsNewPassVisble(!isNewPassVisble)}
                                            isPasswordVisible={isNewPassVisble}
                                        />
                                        <InputFeild
                                            label="Confirm new password"
                                            setInput={setConfirmPassword}
                                            secureTextEntry={isConfirmPassVisble}
                                            checkValidityOfInput={checkPassword}
                                            errorText={""}
                                            keyboardType="pass"
                                            togglePasswordVisibility={() => setIsConfirmPassVisble(!isConfirmPassVisble)}
                                            isPasswordVisible={isConfirmPassVisble}
                                        />
                                        <Button
                                            textColor="#FFFBFB"
                                            buttonStyle={[styles.button, { width: "100%" }]}
                                            title="Change Password"
                                            textStyle={styles.buttonText}
                                            backgroundColor={checkUserType(userType) ? backgroundColors.patientSelectedBackground : backgroundColors.doctorSelectedBackground}
                                            viewStyle={{ paddingHorizontal: 5, marginTop: 20 }}
                                            onPress={changePassword}
                                        />
                                    </View>
                                ) : selectedTab === "Medical Records" ?
                                    (
                                        <View style={{ gap: 20 }} className="w-full">
                                            <View>
                                                <Text style={[patientSetttingsStyles.formHeader, styles.avoidKeyboard]}>My health information</Text>
                                            </View>
                                            <View
                                                style={styles.dropDownCard}>
                                                <View style={styles.dropDownHeader}>
                                                    <Text style={styles.diagnosisDropDownHeading}>Personal information</Text>
                                                    <Entypo
                                                        onPress={togglePersonalInfoArrow}
                                                        name={isPersonalInfoArrowUp ? 'chevron-up' : 'chevron-down'}
                                                        color='#A5ADB1'
                                                        size={20}
                                                    />
                                                </View>
                                                <MotiView
                                                    from={{ scaleY: 0 }}
                                                    animate={{ scaleY: 1 }}
                                                    transition={{
                                                        type: "timing",
                                                        duration: 200,
                                                        ease: Easing.linear
                                                    }}
                                                    style={{ marginTop: 5, width: "100%" }}>
                                                    {
                                                        isPersonalInfoArrowUp ? (
                                                            <View>
                                                                {
                                                                    personalInformation.map((inputField, index) => {
                                                                        return (
                                                                            <MotiView
                                                                                from={{ scaleY: 0 }}
                                                                                animate={{ scaleY: 1 }}
                                                                                transition={{
                                                                                    type: "timing",
                                                                                    duration: 200,
                                                                                    ease: Easing.linear
                                                                                }}
                                                                                style={{ marginTop: 5, width: "100%" }}>
                                                                                <InputFeild
                                                                                    key={index}
                                                                                    label={inputField.label}
                                                                                    setInput={inputField.setInput}
                                                                                    checkValidityOfInput={inputField.validity}
                                                                                    errorText={""}
                                                                                    input={inputField.value}
                                                                                />
                                                                            </MotiView>
                                                                        )
                                                                    })
                                                                }
                                                                <Button
                                                                    textColor="#FFFBFB"
                                                                    buttonStyle={[styles.button, { width: "100%" }]}
                                                                    title="Update profile"
                                                                    textStyle={styles.buttonText}
                                                                    backgroundColor={checkUserType(userType) ? backgroundColors.patientSelectedBackground : backgroundColors.doctorSelectedBackground}
                                                                    viewStyle={{ paddingHorizontal: 5, marginTop: 20 }}
                                                                    onPress={updateMedRecords}
                                                                />
                                                            </View>
                                                        ) : (<></>)

                                                    }

                                                </MotiView>
                                            </View>
                                            <View
                                                style={styles.dropDownCard}>
                                                <View style={styles.dropDownHeader}>
                                                    <Text style={styles.diagnosisDropDownHeading}>Body information</Text>
                                                    <Entypo
                                                        onPress={toggleBodyInfoArrow}
                                                        name={isBodyInfoArrowUp ? 'chevron-up' : 'chevron-down'}
                                                        color='#A5ADB1'
                                                        size={20}
                                                    />
                                                </View>
                                                <MotiView
                                                    from={{ scaleY: 0 }}
                                                    animate={{ scaleY: 1 }}
                                                    transition={{
                                                        type: "timing",
                                                        duration: 200,
                                                        ease: Easing.linear
                                                    }}
                                                    style={{ marginTop: 5, width: "100%" }}>
                                                    {
                                                        isBodyInfoArrowUp ? (
                                                            <View>
                                                                <DropDownPicker
                                        label={"Genotype"}
                                        open={genoOpen}
                                        value={genotype}
                                        items={genotypeOptions}
                                        setOpen={setgenoOpen}
                                        setValue={setGenotype}
                                        setItems={setgenotypeOptions}
                                        placeholder={genotype}
                                    />
                                    <DropDownPicker
                                        label={"Blood Group"}
                                        open={bloodOpen}
                                        value={bloodGroup}
                                        items={bloodGroupOptions}
                                        setOpen={setbloodOpen}
                                        setValue={setBloodGroup}
                                        setItems={setbloodGroupOptions}
                                        placeholder={bloodGroup}
                                    />
                                                                {
                                                                    healthRecord.map((inputField, index) => {
                                                                        return (
                                                                            <MotiView
                                                                                from={{ scaleY: 0 }}
                                                                                animate={{ scaleY: 1 }}
                                                                                transition={{
                                                                                    type: "timing",
                                                                                    duration: 200,
                                                                                    ease: Easing.linear
                                                                                }}
                                                                                style={{ marginTop: 5, width: "100%" }}>
                                                                                    
                                                                                <InputFeild
                                                                                    key={index}
                                                                                    label={inputField.label}
                                                                                    setInput={inputField.setInput}
                                                                                    checkValidityOfInput={inputField.validity}
                                                                                    errorText={""}
                                                                                    input={inputField.value}
                                                                                    keyboardType="numeric"
                                                                                />
                                                                            </MotiView>
                                                                        )
                                                                    })
                                                                }
                                                                <Button
                                                                    textColor="#FFFBFB"
                                                                    buttonStyle={[styles.button, { width: "100%" }]}
                                                                    title="Update profile"
                                                                    textStyle={styles.buttonText}
                                                                    backgroundColor={checkUserType(userType) ? backgroundColors.patientSelectedBackground : backgroundColors.doctorSelectedBackground}
                                                                    onPress={updateMedRecords}
                                                                    viewStyle={{ paddingHorizontal: 5, marginTop: 20 }}
                                                                />
                                                            </View>
                                                        ) : (<></>)

                                                    }

                                                </MotiView>
                                            </View>
                                            <View
                                                style={styles.dropDownCard}>
                                                <View style={styles.dropDownHeader}>
                                                    <Text style={styles.diagnosisDropDownHeading}>Health Conditions</Text>
                                                    <Entypo
                                                        onPress={toggleHealthArrow}
                                                        name={isHealthArrowUp ? 'chevron-up' : 'chevron-down'}
                                                        color='#A5ADB1'
                                                        size={20}
                                                    />
                                                </View>
                                                <MotiView
                                                    from={{ scaleY: 0 }}
                                                    animate={{ scaleY: 1 }}
                                                    transition={{
                                                        type: "timing",
                                                        duration: 200,
                                                        ease: Easing.linear
                                                    }}
                                                    style={{ marginTop: 5, width: "100%" }}>
                                                    {
                                                        isHealthArrowUp ? (
                                                            <MotiView
                                                                from={{ scaleY: 0 }}
                                                                animate={{ scaleY: 1 }}
                                                                transition={{
                                                                    type: "timing",
                                                                    duration: 200,
                                                                    ease: Easing.linear
                                                                }}
                                                                style={{ marginTop: 5, width: "100%" }}>
                                                                <Reply
                                                                    label={healthCondition[0].label}
                                                                    setValue={setDiabetic}
                                                                    value={diabetic}
                                                                />
                                                                <Reply
                                                                    label={healthCondition[1].label}
                                                                    setValue={setBloodPressure}
                                                                    value={bloodPressure}
                                                                />
                                                                <Reply
                                                                    label={healthCondition[2].label}
                                                                    setValue={setAsmathic}
                                                                    value={asmathic}
                                                                />
                                                                <Reply
                                                                    label={healthCondition[3].label}
                                                                    setValue={setSmoke}
                                                                    value={smoke}
                                                                />
                                                                <Button
                                                                    textColor="#FFFBFB"
                                                                    buttonStyle={[styles.button, { width: "100%" }]}
                                                                    title="Update profile"
                                                                    textStyle={styles.buttonText}
                                                                    backgroundColor={checkUserType(userType) ? backgroundColors.patientSelectedBackground : backgroundColors.doctorSelectedBackground}
                                                                    viewStyle={{ paddingHorizontal: 5, marginTop: 20 }}
                                                                    onPress={updateMedRecords}

                                                                />
                                                            </MotiView>
                                                        ) : (<></>)

                                                    }

                                                </MotiView>
                                            </View>
                                            <View
                                                style={styles.dropDownCard}>
                                                <View style={styles.dropDownHeader}>
                                                    <Text style={styles.diagnosisDropDownHeading}>Allergies</Text>
                                                    <Entypo
                                                        onPress={toggleAllergiesArrow}
                                                        name={isAllergiesArrowUp ? 'chevron-up' : 'chevron-down'}
                                                        color='#A5ADB1'
                                                        size={20}
                                                    />
                                                </View>
                                                <MotiView
                                                    from={{ scaleY: 0 }}
                                                    animate={{ scaleY: 1 }}
                                                    transition={{
                                                        type: "timing",
                                                        duration: 200,
                                                        ease: Easing.linear
                                                    }}
                                                    style={{ marginTop: 5, width: "100%" }}>
                                                    {
                                                        isAllergiesArrowUp ?
                                                            (<View className="gap-3 w-full">
                                                                {
                                                                    allergies.map((allergy, index) => {
                                                                        return (
                                                                            <MotiView
                                                                                from={{ scaleY: 0 }}
                                                                                animate={{ scaleY: 1 }}
                                                                                transition={{
                                                                                    type: "timing",
                                                                                    duration: 200,
                                                                                    ease: Easing.linear
                                                                                }}
                                                                                style={{ marginTop: 5, width: "100%" }}>
                                                                                <View key={index} style={patientSetttingsStyles.allergyContainer}>
                                                                                    <Text style={patientSetttingsStyles.allergyText}>{allergy}</Text>
                                                                                    <AntDesign
                                                                                        name='minuscircle'
                                                                                        size={20}
                                                                                        color="#EA6E6E"
                                                                                        onPress={() => {
                                                                                            let updatedAllergies = allergies.filter(e => e !== allergy)
                                                                                            setAllergies(updatedAllergies)
                                                                                        }}
                                                                                    />
                                                                                </View>
                                                                            </MotiView>
                                                                        )
                                                                    })
                                                                }
                                                                {
                                                                    isAddActive && (
                                                                        <View className="w-full items-end">
                                                                            <TextInput
                                                                                style={patientSetttingsStyles.addAllergyField}
                                                                                placeholder='Start typing here'
                                                                                onChangeText={(text) => setNewAllegy(text)}
                                                                            />
                                                                            <TouchableOpacity
                                                                                activeOpacity={1}
                                                                                className="flex-row gap-2 items-center absolute top-4 right-3"
                                                                                disabled={newAllegy === "" ? true : false}
                                                                                onPress={()=>{
                                                                                    allergies.includes(newAllegy) === false ? setAllergies([...allergies, newAllegy]) : setAllergies([...allergies])
                                                                                    setIsAddActive(false)
                                                                                }}
                                                                            >
                                                                            <AntDesign
                                                                                name='pluscircle'
                                                                                size={20}
                                                                                color={backgroundColors.patientSelectedBackground}
                                                                            />
                                                                        </TouchableOpacity>
                                                                        </View>
                                                                    )
                                                                }

                                                                <TouchableOpacity
                                                                    onPress={() => setIsAddActive(true)}
                                                                    activeOpacity={1}
                                                                    className="flex-row gap-2 items-center"
                                                                >
                                                                    <AntDesign
                                                                        name='pluscircle'
                                                                        size={20}
                                                                        color={backgroundColors.patientSelectedBackground}
                                                                    />
                                                                    <Text style={patientSetttingsStyles.addButton}>Add</Text>
                                                                </TouchableOpacity>
                                                                <Button
                                                                    textColor="#FFFBFB"
                                                                    buttonStyle={[styles.button, { width: "100%", marginLeft: 0 }]}
                                                                    title="Update profile"
                                                                    width="100%"
                                                                    textStyle={styles.buttonText}
                                                                    onPress={updateMedRecords}
                                                                    backgroundColor={checkUserType(userType) ? backgroundColors.patientSelectedBackground : backgroundColors.doctorSelectedBackground}
                                                                    viewStyle={{ paddingHorizontal: 5, marginTop: 20, marginLeft: 10 }}
                                                                />
                                                            </View>)
                                                            : (<></>)

                                                    }

                                                </MotiView>
                                            </View>
                                        </View>
                                    ) : selectedTab === "My Career" ?
                                        (
                                            <View>
                                                <View>
                                                    <Text style={[patientSetttingsStyles.formHeader, styles.avoidKeyboard]}>My personal information</Text>
                                                </View>
                                                <InputFeild
                                                    input={speciality}
                                                    label="Area of specialization"
                                                    setInput={setSpeciality}
                                                    checkValidityOfInput={defaultValidity}
                                                />
                                                <InputFeild
                                                    label="Hospital currently working in"
                                                    setInput={setHospitals}
                                                    checkValidityOfInput={defaultValidity}
                                                />
                                                <InputFeild
                                                    label="Years of experience"
                                                    keyboardType="numeric"
                                                    setInput={setYears}
                                                    checkValidityOfInput={defaultValidity}
                                                />
                                                <Calendar
                                                    doctor={userDetails.availability}
                                                />
                                                <Button
                                                    textColor="#FFFBFB"
                                                    buttonStyle={[styles.button, { width: "100%" }]}
                                                    title="Update profile"
                                                    textStyle={styles.buttonText}
                                                    backgroundColor={checkUserType(userType) ? backgroundColors.patientSelectedBackground : backgroundColors.doctorSelectedBackground}
                                                    viewStyle={{ paddingHorizontal: 5, marginTop: 40 }}
                                                    onPress={updateProfile}
                                                    isLoading={isLoading}
                                                />
                                            </View>
                                        )
                                        : (<></>)
                    }

                </MotiView>
                <CustomModal
                    visibility={isModalVisible}
                    animationType={"fade"}
                    closeModal={closeModal}
                    component={modalContent}
                />
            </ScrollView>
            {
                isLoading && (
                    <CeliaPreloader />
                )
            }
        </SafeAreaView>
    )
}

export default PatientSettings