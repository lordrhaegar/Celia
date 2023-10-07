import { View, useWindowDimensions} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PrivacyBody from '../components/screen body/PrivacyBody'
import Footer from '../components/includes/Footer'
import Header from '../components/includes/Header'
import { styles } from '../styles/Styles'

const NewDiagnosis = ({route}) => {
    const {userDetails} = route.params
    const height = useWindowDimensions().height
    const [isChecked, setIsChecked] = useState(false)
    const pageName = 'NewDiagnosis'
    return (
        <SafeAreaView style={styles.safeArea}>
            
                <Header pageName={pageName}/>
                <PrivacyBody isChecked={isChecked} setIsChecked={setIsChecked}/>
                <Footer pageName={pageName} isChecked={isChecked} userDetails={userDetails}/>

        </SafeAreaView>
    )
}

export default NewDiagnosis