import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../../styles/Styles'
import { logo } from '../../constants/constants'
import { CheckBox } from 'react-native-elements'

const QuestionnaireBody = ({pageName}) => {
    const [diabetes, setDiabetes] = useState(null);
    const [obese, setObese] = useState(null);
    const [hypertension, sethypertension] = useState(null);

    const options = [
        {label: 'Yes', value: 'yes'},
        {label: 'No', value: 'no'},
        {label: 'Don\'t Know', value: 'don\'t know'}
        
    ]
    const diabetesOptionChange = (value) => {
        setDiabetes(value);
      };
      const obeseOptionChange = (value) => {
        setObese(value);
      };
      const hypertensionOptionChange = (value) => {
        sethypertension(value);
      };
      useEffect(()=>{
        console.log(hypertension);
      },[hypertension])
    return (
        <View
            style={styles.questionnaireBody}
        >
            <View
                className="flex-row items-center gap-[0.5]"
            >
                <Image
                    source={logo} />
                <Text
                    style={{
                        fontSize: 26.59,
                        color: '#0D91DC'
                    }}
                >elia</Text>
            </View>
            <View>
                <Text
                    style={styles.title}
                >Please check all the statements below that apply to you.</Text>
            </View>
            <Text
            style={styles.questionnaireH2}
            >Select one for each statement</Text>
            <View>
                <Text
                style={styles.questionText}
                >I have diabetes</Text>
                {options.map((option, index)=>(
                    <CheckBox
                    center={false}
                    key={index}
                    title={option.label}
                    textStyle={styles.answerText}
                    containerStyle={styles.optionsContainerStyle}
                    checked={diabetes === option.value}
                    checkedIcon="check-circle"
                    uncheckedIcon='circle-thin'
                    onPress={()=>diabetesOptionChange(option.value)}
                    />
                ))}
            </View>
            <View>
                <Text
                style={styles.questionText}
                >I’m overweight or obese</Text>
                {options.map((option, index)=>(
                    <CheckBox
                    key={index}
                    title={option.label}
                    textStyle={styles.answerText}
                    containerStyle={styles.optionsContainerStyle}
                    checked={obese === option.value}
                    checkedIcon="check-circle"
                    uncheckedIcon='circle-thin'
                    onPress={()=>obeseOptionChange(option.value)}
                    />
                ))}
            </View>
            <View>
                <Text
                style={styles.questionText}
                >I have hypertension</Text>
                {options.map((option, index)=>(
                    <CheckBox
                    key={index}
                    title={option.label}
                    textStyle={styles.answerText}
                    containerStyle={styles.optionsContainerStyle}
                    checked={hypertension === option.value}
                    checkedIcon="check-circle"
                    uncheckedIcon='circle-thin'
                    onPress={()=>hypertensionOptionChange(option.value)}
                    />
                ))}
            </View>
        </View>
    )
}

export default QuestionnaireBody