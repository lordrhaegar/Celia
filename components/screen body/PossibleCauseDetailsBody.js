import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/Styles'
import Progressbars from '../Progressbars'
import { Entypo } from '@expo/vector-icons'

const PossibleCauseDetailsBody = ({ percentage }) => {
    const [causeDiagnosis, setCauseDiagnosis] = useState([
        { label: "Risk", arrowState: true },
        { label: "Symptoms", arrowState: true },
        { label: "Diagnosis", arrowState: true },
        { label: "Treatment", arrowState: true },
        { label: "Prevention", arrowState: true },
        { label: "Prognosis", arrowState: true },

      ]);
      const setArrowState = (index, newState) => {
        const updatedCauseDiagnosis = [...causeDiagnosis];
        updatedCauseDiagnosis[index].arrowState = newState;
        setCauseDiagnosis(updatedCauseDiagnosis);
      };
      
    const toggleArrow = (setArrowState, arrowState) => {
        setArrowState(!arrowState);
    }
    return (
        <View
            className="w-full px-5"
        >
            <Progressbars percentage={percentage} />
            <View
                style={styles.summaryBody}
            >
                <Text
                    style={styles.summaryHeadText}
                >
                    Overview
                </Text>
                <Text
                    style={styles.summaryParagraphText}
                >
                    This is a viral infection of the sinuses, the hollow spaces in bones around the nose. It’s a very common condition. KIt may follow a cold or flu. The most common symptoms are a blocked nose, and pain or pressure in the region around the nose. Viral sinuses usually does not need any specific treatment, and typically lasts around 1 week.
                </Text>
            </View>
            {
                causeDiagnosis.map((cause, index) => (
                    <View
                    key={index}
                        style={styles.causesDiagnosisBox}
                    >
                        <View
                            style={styles.causesDiagnosisBoxContentContainer}
                        >
                            <Text style={styles.causesDiagnosisBoxContentContainerText}>{cause.label}</Text>
                            <Entypo
                                onPress={()=>setArrowState(index, !cause.arrowState)}
                                name={cause.arrowState ? 'chevron-up' : 'chevron-down'}
                                color='#A5ADB1'
                                size={20}
                            />
                        </View>
                    </View>
                ))
            }
            {/* <View
                style={styles.causesDiagnosisBox}
            >
                <View
                    style={styles.causesDiagnosisBoxContentContainer}
                >
                    <Text style={styles.causesDiagnosisBoxContentContainerText}>Risks</Text>
                    <Entypo
                        onPress={() => toggleArrow(setIsRiskArrowUp, isRiskArrowUp)}
                        name={isRiskArrowUp ? 'chevron-up' : 'chevron-down'}
                        color='#A5ADB1'
                        size={20}
                    />
                </View>
            </View> */}
        </View>
    )
}

export default PossibleCauseDetailsBody