import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/Styles'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { apiBaseUrl } from '../../constants/constants'
import { useSelector } from 'react-redux'

const SaveNotice = (props) => {
  const {closeNoticeModal, date,selectedGender} = props
  const {userDetails} = useSelector((state)=>state.auth)
  const {userToken} = useSelector((state)=>state.auth)
  const [isLoading, setIsLoading] = useState(false)
  const navigator = useNavigation();
  const saveData = async() => {
    const payload = {
      firstname: userDetails.firstname,
      lastname: userDetails.lastname,
      gender: selectedGender,
      date_of_birth: date
    }
    setIsLoading(true)
    try {
      const savingData = await axios.put(`${apiBaseUrl}/auth/update`, payload,{
        headers: {
          Authorization: `Bearer ${userToken}`
        },
        withCredentials: true
      })
      if (savingData.status === 200 || savingData.status === 201) {
        console.log(savingData.data);
        navigator.navigate('Questionnaire')
      }
    } catch (error) {
      console.log(error.response.data);
    }finally{
      setIsLoading(false)
    }
    // console.log(payload);
    // console.log(userToken);
  }
  return (
    <View style={styles.noticeCard}>
      <Text style={styles.genderNoticeHeadnig}>Important notice</Text>
      <Text style={styles.noticeH2}>Save your age and sex information for faster usage next time.</Text>
      <View
        className="w-full flex-col justify-between items-center h-[130]"
      >
        <TouchableOpacity
          onPress={()=>{
            closeNoticeModal()
            saveData()
          }}
          style={styles.button}>
          <Text style={styles.buttonText} className="text-[#FFFBFB]">{isLoading? <ActivityIndicator size={30}/> : "Yes, save and continue"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{
            closeNoticeModal()
            navigator.navigate('Questionnaire')
          }}
          style={styles.button2}>
          <Text style={[styles.buttonText, {color: "black"}]}>Don’t save, but continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SaveNotice