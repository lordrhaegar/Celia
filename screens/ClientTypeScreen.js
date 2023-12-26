import { View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/includes/Header'
import Footer from '../components/includes/Footer'
import ClientTypeBody from '../components/screen body/ClientTypeBody'
import { styles } from '../styles/Styles'

const ClientTypeScreen = () => {
    const height = useWindowDimensions().height
    const pageName = 'ClientType';
    const [isChecked, setIsChecked] = useState(false)
    return (
        <SafeAreaView style={styles.safeArea}>

            <Header pageName={pageName} />
            <ClientTypeBody setIsChecked={setIsChecked}/>
            <Footer pageName={pageName} isChecked={isChecked} />
        </SafeAreaView>
    )
}

export default ClientTypeScreen