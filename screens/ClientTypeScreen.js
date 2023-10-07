import { View, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/includes/Header'
import Footer from '../components/includes/Footer'
import ClientTypeBody from '../components/screen body/ClientTypeBody'
import { styles } from '../styles/Styles'

const ClientTypeScreen = ({route}) => {
    const {userDetails} = route.params
    const height = useWindowDimensions().height
    const pageName = 'ClientType';
    const isChecked = true
    return (
        <SafeAreaView style={styles.safeArea}>

            <Header pageName={pageName} />
            <ClientTypeBody />
            <Footer pageName={pageName} isChecked={isChecked} userDetails={userDetails}/>
        </SafeAreaView>
    )
}

export default ClientTypeScreen