import { Component } from "react";
import { Dimensions, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/includes/Header";
import PrivacyBody from "../components/screen body/PrivacyBody";
import Footer from "../components/includes/Footer";
import { styles } from "../styles/Styles";
import GetStarted from "../components/buttons/GetStarted";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Overlay from "../components/Overlay";
import { StatusBar } from "expo-status-bar";
import { docStyles } from "../styles/doctorRequirementScreenStyles";
import OnboadingButton from "../components/buttons/OnboadingButton";

class DoctoreRequirementScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAccepted: false,
            isModalVisible: false,
            height: Dimensions.get('screen').height
        };
    }
    pageName = "DoctoreRequirementScreen"
    height = Dimensions.get('screen').height
    toggleAcceptConditions = () => {
        this.setState(prevState => ({
            isAccepted: !prevState.isAccepted
        }))
    }
    handleGetStartedPress = () => {
        this.setState(prevState => ({
            isModalVisible: !prevState.isModalVisible
        }))
    };
    render() {
        return (
                    <SafeAreaView style={docStyles.dosContainer}>
                                <Header pageName={this.pageName} />
                            <PrivacyBody isChecked={this.state.isAccepted} setIsChecked={this.toggleAcceptConditions} />
                            {
                                this.state.isAccepted ? (<OnboadingButton viewStyle={[styles.getStarteButtonViewStyle, {top: this.height - 85}]} buttonStyle={styles.button} backgroundColor="#7CD1D1" buttonTextStyle={styles.buttonText} title="Get Started"/>) : (<View/>)
                            }
                            

                    </SafeAreaView>
        )
    }
}
export default DoctoreRequirementScreen;