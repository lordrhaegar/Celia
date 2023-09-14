import { View, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ClientTypeBody from '../components/screen body/ClientTypeBody'
import { styles } from '../styles/Styles'

const ClientTypeScreen = () => {
    const height = useWindowDimensions().height
    const pageName = 'ClientType';
    const isChecked = true
    return (
        <SafeAreaView style={[{paddingTop: 20, backgroundColor: '#FDFDFD' }, styles.fullScreen]}>

            <Header pageName={pageName} />
            <ClientTypeBody />
            <Footer pageName={pageName} isChecked={isChecked} />
        </SafeAreaView>
    )
}

export default ClientTypeScreen