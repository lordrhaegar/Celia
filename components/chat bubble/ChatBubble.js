import { View, Text } from 'react-native'
import React from 'react'
import celiaStyle from '../../styles/celiaAiStyle';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';

const ChatBubble = (props) => {
    const {isSender, message, timeStamp} = props
    return (
        <MotiView
        from={{translateX: -100}}
        animate={{translateX: 0}}
        transition={{
          type: 'spring',
          duration: 2000,
          ease: Easing.bounce
        }}
        style={[celiaStyle.container, isSender ? celiaStyle.sender : celiaStyle.receiver]}>
          <Text style={[celiaStyle.message, {fontSize: 18}]}>{message} </Text>
           <View style={celiaStyle.timeStamp}>
          <Text style={[celiaStyle.message, {textAlign:"right", fontSize: 10}]}>{timeStamp}</Text>
          </View> 
        </MotiView>
      );
}

  
export default ChatBubble