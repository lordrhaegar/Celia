import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../../styles/Styles'
import celiaStyle from '../../styles/celiaAiStyle'
import { Image } from 'react-native'
import ChatBubble from '../chat bubble/ChatBubble'
import { celiaAiBaseUrl, logo } from '../../constants/constants'
import axios from 'axios'

const QuestionBody = (props) => {
    const {questionArray, questionNo, setQuestionNo, valueReturn, setComplete} = props
    let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();

// Convert 24-hour time to 12-hour time
if (hours > 12) {
  hours -= 12;
}

// Add leading zero to minutes if less than 10
if (minutes < 10) {
  minutes = '0' + minutes;
}

// Determine AM or PM suffix
let suffix = (date.getHours() >= 12) ? 'PM' : 'AM';

let time = `${hours}:${minutes} ${suffix}`;

useEffect(()=>{
    console.log(time);
},[])

    return (
        <View
            style={[styles.privacyBody, { gap: 10 }]}
        >
            <View style={{ gap: 0 }} className="flex-row gap-10 mb-10">
                <View
                    style={celiaStyle.avatar}
                    className="flex-row items-center "
                >
                    <Image
                        style={{ flex: 1, width: "100%", height: "100%" }}
                        resizeMode='contain'
                        source={logo} />
                    {/* <Text
                            style={{
                                fontSize: 26.59,
                                color: '#0D91DC'
                            }}
                        >elia</Text> */}
                </View>
                <ChatBubble isSender={false} timeStamp={time} message={questionArray[questionNo].question} />
            </View>
            {
                questionArray[questionNo].answer.map((answer, idx) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                if (questionNo === questionArray.length - 1) {
                                    setComplete(true)
                                } else {
                                    valueReturn(answer)
                                    setQuestionNo(questionNo + 1)
                                }
                            }}
                            key={idx}
                        >
                            <ChatBubble
                                isSender={true}
                                message={answer}
                                timeStamp={time}
                            />
                        </TouchableOpacity>
                    )
                })
            }
            {/* <View style={[styles.button2, {alignItems: "flex-start", backgroundColor: 'transparent'}]}>
                    <Text
                        style={styles.title}
                    >Before we get started...</Text>
                </View> */}
        </View>
    )
}
export default QuestionBody