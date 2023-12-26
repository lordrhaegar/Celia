import { View, Text, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/includes/Header'
import Footer from '../components/includes/Footer'
import NoticeModal from '../components/modals/NoticeModal'
import ClientBioBody from '../components/screen body/ClientBioBody'
import { styled } from 'nativewind'
import { styles } from '../styles/Styles'

const ClientBio = () => {
    const height = useWindowDimensions().height
    const pageName = 'ClientBio';
    const [isChecked, setIsChecked] = useState(false);
    const [date, setDate] = useState('2023-12-03');
    const [selectedGender, setSelectedGender] = useState('');
    return (
        <SafeAreaView style={styles.safeArea}>
            <View
            style={styles.fullScreen}
            >
            <Header pageName={pageName} />
            <ClientBioBody 
            date={date} 
            setDate={setDate} 
            selectedGender={selectedGender} 
            setSelectedGender={setSelectedGender} 
            setIsChecked={setIsChecked}/>
            <Footer
            date={date}
            selectedGender={selectedGender} 
            pageName={pageName} 
            isChecked={isChecked} />
            </View>
        </SafeAreaView>
    )
}

export default ClientBio