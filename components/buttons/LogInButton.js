import { View, Text, TouchableOpacity, Modal } from 'react-native'
import { React} from 'react'
import { styles } from '../../styles/Styles'

const LogInButton = ({openLoginModal}) => {
    return (
        <View>
            <TouchableOpacity
                style={styles.button2}
                onPress={openLoginModal}
            >
                <Text style={styles.buttonText} className="text-[#27292A]">I already have an account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LogInButton