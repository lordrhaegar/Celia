import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { styles } from '../../styles/Styles'
import NoticeModal from '../modals/NoticeModal'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { setUserType } from '../../features/authSlice'

const Header = (props) => {
    const {pageName, closeModal} = props
    const navigator = useNavigation()
    const {userType} = useSelector((state)=>state.auth)
    const [isNoticeModal, setIsNoticeModal] = useState(false);
    const dispatch = useDispatch()
    const openNoticeModal = () => {
        setIsNoticeModal(true);
    }
    const closeNoticeModal = () => {
        setIsNoticeModal(false);
    }
    return (
        <View className={`flex-row items-center justify-between w-full`}
        >
            <Text style={styles.title} className="text-black font-medium">{ pageName === 'Diagnosis' ? 'Diagnosis' : pageName === 'DoctoreRequirementScreen' ? 'Hey there, Doc': pageName === "Ratings"?'Doctor Review':'New Diagnosis'}</Text>
            {
                userType === "Doctor" ? (
                    <TouchableOpacity
                        onPress={()=>{
                            dispatch(setUserType("Patient"))
                            navigator.pop()
                        }
                    }
                        style={{ gap: 5 }} className="flex-row items-center">
                        <AntDesign
                            name='left'
                            style={{ color: '#7CD1D1', fontSize: 13 }}
                        />
                        <Text style={styles.backText} className="text-[#7CD1D1]">
                            Back
                        </Text>
                    </TouchableOpacity>
                ) : (
                    <AntDesign
                onPress={() => {
                    if (pageName === "Ratings") {
                        closeModal()
                    }
                    openNoticeModal()
                }}
                name='closecircle'
                size={24}
                color="#0A74B0"
            />
                )
            }
            <NoticeModal pageName={pageName} isNoticeModal={isNoticeModal} closeNoticeModal={closeNoticeModal} />
        </View>
        
    )
}

export default Header