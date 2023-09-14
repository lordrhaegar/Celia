import { View, useWindowDimensions} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PrivacyBody from '../components/screen body/PrivacyBody'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { styles } from '../styles/Styles'

const NewDiagnosis = () => {
    const height = useWindowDimensions().height
    const [isChecked, setIsChecked] = useState(false)
    const pageName = 'NewDiagnosis'
    return (
        <SafeAreaView style={[{paddingTop: 20, backgroundColor: '#FDFDFD', borderBottomWidth: 1, borderColor: 'red'}, styles.fullScreen]}>
            
                <Header pageName={pageName}/>
                <PrivacyBody isChecked={isChecked} setIsChecked={setIsChecked}/>
                <Footer pageName={pageName} isChecked={isChecked}/>

        </SafeAreaView>
    )
}

export default NewDiagnosis