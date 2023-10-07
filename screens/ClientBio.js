import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/includes/Header'
import Footer from '../components/includes/Footer'
import NoticeModal from '../components/modals/NoticeModal'
import ClientBioBody from '../components/screen body/ClientBioBody'
import { styled } from 'nativewind'
import { styles } from '../styles/Styles'

const ClientBio = ({route}) => {
    const {userDetails} = route.params
    const height = useWindowDimensions().height
    const pageName = 'ClientBio';
    const isChecked = true;
    return (
        <SafeAreaView style={styles.safeArea}>
            <View
            style={styles.fullScreen}
            >
            <Header pageName={pageName} />
            <ClientBioBody userDetails={userDetails}/>
            <Footer pageName={pageName} isChecked={isChecked} />
            </View>
        </SafeAreaView>
    )
}

export default ClientBio