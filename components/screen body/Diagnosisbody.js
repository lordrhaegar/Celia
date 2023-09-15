import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'
import { styles } from '../../styles/Styles'
import Progressbars from '../Progressbars'

const Diagnosisbody = () => {
    
    return (
        <View>
            <View
                style={styles.summaryBody}
            >
                <Text
                    style={styles.patientInfoText}
                >Ebuka, Male, 26 years old</Text>
                <Text
                    style={styles.summaryHeadText}
                >
                    Summary
                </Text>
                <Text
                    style={styles.summaryParagraphText}
                >
                    People with symptoms similar to yours can usually manage their symptoms safely at home. You could also seek advice by visiting or contacting your local pharmacy.
                </Text>
                <Text
                    style={styles.summaryParagraphText}
                >
                    If your symptoms persist longer than expected, if they get worse or if you notice new symptoms, you should consult a doctor for further assessment and advice.
                </Text>
            </View>
            <View
                style={styles.causesBody}
            >
                <Text
                    style={styles.summaryHeadText}
                >Possible causes</Text>
                <View
                className="w-full"
                >
                    <Text
                        style={styles.causesText}
                    >1. Common cold</Text>
                    <Text
                        style={styles.managedHome}
                    >Can usually be managed at home</Text>
                    <Progressbars percentage={86}/>
                    <TouchableOpacity
                    style={styles.someoneElseButton}
                    >
                        <Text
                        style={styles.someoneElseText}
                        >Tell me more</Text>
                    </TouchableOpacity>
                </View> 
                <View
                className="w-full"
                >
                    <Text
                        style={styles.causesText}
                    >2. Viral sinusitis</Text>
                    <Text
                        style={styles.managedHome}
                    >Can usually be managed at home</Text>
                    <Progressbars percentage={56}/>
                    <TouchableOpacity
                    style={styles.someoneElseButton}
                    >
                        <Text
                        style={styles.someoneElseText}
                        >Tell me more</Text>
                    </TouchableOpacity>
                </View> 
                <View
                className="w-full"
                >
                    <Text
                        style={styles.causesText}
                    >3. Common cold</Text>
                    <Text
                        style={styles.managedHome}
                    >Can usually be managed at home</Text>
                    <Progressbars percentage={25}/>
                    <TouchableOpacity
                    style={styles.someoneElseButton}
                    >
                        <Text
                        style={styles.someoneElseText}
                        >Tell me more</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        </View>
    )
}

export default Diagnosisbody