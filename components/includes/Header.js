import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { styles } from '../../styles/Styles'
import NoticeModal from '../modals/NoticeModal'

const Header = ({pageName}) => {
    const [isNoticeModal, setIsNoticeModal] = useState(false);
    const openNoticeModal = () => {
        setIsNoticeModal(true);
    }
    const closeNoticeModal = () => {
        setIsNoticeModal(false);
    }
    return (
        <View className="flex-row px-5 items-center justify-between"
        >
            <Text style={styles.title} className="text-black font-medium">{ pageName === 'Diagnosis' ? 'Headache' :'New Diagnosis'}</Text>
            <AntDesign
                onPress={() => {
                    openNoticeModal()
                }}
                name='closecircle'
                size={24}
                color="#0A74B0"
            />
            <NoticeModal pageName={pageName} isNoticeModal={isNoticeModal} closeNoticeModal={closeNoticeModal} />
        </View>
        
    )
}

export default Header