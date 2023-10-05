import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'
import { styles } from '../../styles/Styles'
import Progressbars from '../Progressbars'
import { useNavigation } from '@react-navigation/native'

const Diagnosisbody = ({disease}) => {
    const navigator = useNavigation();
    return (
        <View
            className="w-full px-5"
        >
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
                {
                    disease.map((cause, index) => (
                        <View
                        key={index}
                        className="w-full"
                        >
                            <View
                                className="w-full"
                            >
                                <Text
                                    style={styles.causesText}
                                >{index + 1}. {cause.diseaseName}</Text>
                                <Text
                                    style={styles.managedHome}
                                >Can usually be managed at home</Text>
                                <Progressbars percentage={cause.percentageOcurrance} />
                                <View
                                    className="w-full items-center"
                                >
                                    <TouchableOpacity
                                    onPress={()=>navigator.navigate('PossibleCauseDetails', {cause: cause.diseaseName,percentage: cause.percentageOcurrance})}
                                        style={styles.someoneElseButton}
                                    >
                                        <Text
                                            style={styles.someoneElseText}
                                        >Tell me more</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.diagnosisSpaceBox}></View>
                        </View>
                    ))
                }
                <View
                    style={styles.diagnosisSymptomsBody}
                >
                    <Text
                        style={styles.diagnosisSymptomsBodyH1}
                    >Symptoms</Text>
                    <Text
                        className="underline"
                        style={styles.diagnosisSymptomsBodyParagraph}
                    >Present</Text>
                    <View>
                        <Text
                            style={styles.diagnosisSymptomsBodyParagraph}
                        >1.  Runny nose</Text>
                        <Text
                            style={styles.diagnosisSymptomsBodyParagraph}
                        >*  Appearance: clear</Text>
                        <Text
                            style={styles.diagnosisSymptomsBodyParagraph}
                        >*  Time since onset: one day to one week</Text>
                    </View>
                    <View>
                        <Text
                            style={styles.diagnosisSymptomsBodyParagraph}
                        >2.  Cough</Text>
                        <Text
                            style={styles.diagnosisSymptomsBodyParagraph}
                        >*  Coughing up blood: no</Text>
                    </View>
                    <Text
                        className="underline"
                        style={styles.diagnosisSymptomsBodyParagraph}
                    >Absent</Text>
                    <View>
                        <Text
                            style={styles.diagnosisSymptomsBodyParagraph}
                        >*  Frequent sneezing</Text>
                        <Text
                            style={styles.diagnosisSymptomsBodyParagraph}
                        >*  Blocked nose</Text>
                        <Text
                            style={styles.diagnosisSymptomsBodyParagraph}
                        >*  Reddened throat</Text>
                        <Text
                            style={styles.diagnosisSymptomsBodyParagraph}
                        >*  Sinus pain</Text>
                        <Text
                            style={styles.diagnosisSymptomsBodyParagraph}
                        >*  Fever</Text>
                        <Text
                            style={styles.diagnosisSymptomsBodyParagraph}
                        >*  Sore throat</Text>
                        <Text
                            style={styles.diagnosisSymptomsBodyParagraph}
                        >*  Itchy mouth</Text>
                    </View>
                    <View
                        style={styles.diagnosisDisclaimerBody}
                    >
                        <Text
                            style={styles.diagnosisDisclaimerBodyText}
                        >
                            This list includes conditions that Celia has identified as possible causes for your symptoms. This is not an exhaustive list. You might have a condition that is not suggested here. Please consult a doctor <Text onPress={() => { }} style={styles.diagnosisDisclaimerBodyLinkText}>here.</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Diagnosisbody