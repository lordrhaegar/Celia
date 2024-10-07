import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    skipButtonViewStyle: {
        marginTop: Platform.OS === 'ios' ? 80 : 0
    },
    skipButtonStyle: {
        borderColor: '#E4E4E4',
        borderWidth: 1,
        borderRadius: 20,
        width: 69,
        height: 37,
        justifyContent: 'center',
        alignItems: 'center'
    },
    skipButtonText: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: "Gilroy-l",
        color: '#8E8B8B'
    },
    getStarteButtonViewStyle: {
        position: 'absolute',
        left: '5%',
    },
    fullScreen: {
        flex: 1
    },
    safeArea: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#FDFDFD',
        marginBottom: -10
    },
    scrollView: {
        width: '100%',
        backgroundColor: '#FDFDFD',
        paddingVertical: 20
    },
    backText: {
        fontFamily: 'Gilroy-M',
        fontSize: 14,
        fontWeight: 600
    },
    button: {
        borderWidth: 0,
        borderRadius: 500,
        width: 335,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        backgroundColor: "#0D91DC"
    },
    buttonRed: {
        borderWidth: 0,
        borderRadius: 500,
        width: 335,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DC0D0D',
        marginLeft: 5
    },
    button2: {
        borderWidth: 0,
        borderRadius: 500,
        width: 335,
        height: 56,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#474A4C',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        color: "black"
    },
    buttonText: {
        fontFamily: 'Gilroy-M',
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFBFB'
    },
    title: {
        fontFamily: "Gilroy-M",
        fontSize: 25,
        fontWeight: '600'
    },
    description: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: "Gilroy-l"
    },
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 500,
        width: "100%",
        height: 56,
    },
    inputError: {
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 500,
        width: "100%",
        height: 56,
        borderColor: '#DC0D0D',
    },
    inputCode: {
        borderColor: '#A5ADB1',
        borderWidth: 1,
        borderRadius: 500,
        width: 39,
        height: 38,
        textAlign: 'center'
    },
    inputCodeError: {
        borderColor: '#DC0D0D',
        borderWidth: 1,
        borderRadius: 500,
        width: 39,
        height: 38,
        textAlign: 'center'
    },
    inputLabel: {
        fontSize: 14,
        fontFamily: 'Gilroy-M',
        fontWeight: '500'
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 0,
        width: '100%',
        borderRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    avoidKeyboard: {
        marginBottom: 20
    },
    dropDownCard: {
        display: 'flex',
        width: '100%',
        padding: 12,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 8,
        backgroundColor: '#F3F5F6',
        borderRadius: 8
    },
    dropDownHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    alertDropDownHeading: {
        fontFamily: 'Gilroy-M',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 20,
    },
    alertDropDownItems: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FDFDFD',
        borderRadius: 8,
        padding: 4,
        alignItems: 'center',
        gap: 8,
        alignSelf: 'stretch',
        marginBottom: 5,
        width: "100%",
        justifyContent: 'space-around'
    },
    alertDropDownItemsH1: {
        color: '#000',
        fontFamily: 'Gilroy-M',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 20,
    },
    alertDropDownItemsText: {
        color: '#000',
        fontFamily: 'Gilroy',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 20,
    },
    diagnosisDropDownHeading: {
        fontFamily: 'Gilroy-M',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 20,
    },
    diagnosisDropDownItems: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FDFDFD',
        borderRadius: 8,
        padding: 8,
        alignItems: 'center',
        gap: 8,
        justifyContent: 'space-between',
        alignSelf: 'stretch',
    },
    diagnosisDropDownItemsText1: {
        color: '#000',
        fontFamily: 'Gilroy-M',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 20,
    },
    diagnosisDropDownItemsText2: {
        color: '#000',
        fontFamily: 'Gilroy-l',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 20,
    },
    blogSection: {
        width: '100%',
        height: '100%',
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 19,
        display: 'inline-flex',
        flexDirection: 'row'
    },
    blogCard: {
        width: 158,
        padding: 12,
        backgroundColor: '#F3F5F6',
        borderRadius: 8,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 8,
        display: 'inline-flex',
    },
    blogImage: {
        width: 134,
        height: 80,
        borderRadius: 8
    },
    blogText: {
        alignSelf: 'stretch',
        color: '#27292A',
        fontSize: 14,
        fontFamily: 'Gilroy-M',
        fontWeight: '600',
        lineHeight: 20,
    },
    privacyBody: {
        height: Platform.OS === 'ios' ? '88%' : null,
        flex: Platform.OS === 'android' ? 1 : null,
        paddingHorizontal: 20,
        paddingVertical: 32,
        marginTop: 20,
        gap: 30,
        justifyContent: 'flex-end',
        backgroundColor: '#E5F6F6'
    },
    privacySubhead: {
        color: '#27292A',
        fontSize: 18,
        fontFamily: 'Gilroy',
        fontWeight: '500',
        lineHeight: 24,
    },
    privacyDetails: {
        color: '#666B6E',
        fontSize: 16,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 24,
    },
    checkBoxText: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    },
    termsOfService: {
        color: '#0D91DC',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '600',
        lineHeight: 20,
    },
    stepNavigation: {
        width: '100%',
        paddingVertical: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'inline-flex',
        borderTopWidth: 1,
        borderColor: '#EAEDEF',
        borderStyle: 'solid',
        flexDirection: 'row',
        backgroundColor: '#E5F6F6',
        paddingHorizontal: 20,
        flex: 0,
    },
    stepNavButton: {
        width: 157,
        height: 56,
        paddingHorizontal: 20,
        paddingVertical: 8,
        backgroundColor: '#0D91DC',
        borderRadius: 500,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        display: 'inline-flex',
    },
    startText: {
        color: '#FFFBFB',
        fontSize: 16,
        fontFamily: 'Gilroy',
        fontWeight: '600',
        lineHeight: 24,
    },
    noticeCard: {
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        background: 'white',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 25,
        display: 'inline-flex'
    },
    noticeHeadnig: {
        color: '#DC950D',
        fontSize: 24,
        fontFamily: 'Gilroy',
        fontWeight: '500',
        lineHeight: 32,
    },
    noticeH2: {
        color: '#27292A',
        fontSize: 17,
        fontFamily: 'Gilroy',
        fontWeight: '500',
        lineHeight: 20,
    },
    noticeParagraph: {
        color: '#666B6E',
        fontSize: 15,
        fontFamily: 'Gilroy',
        fontWeight: '500',
        lineHeight: 20,
    },
    mySelfButton: {
        width: '100%',
        height: 56,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 500,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        display: 'inline-flex',
        borderWidth: 1,
        borderColor: '#0D91DC',
    },
    mySelfText: {
        color: '#0D91DC',
        fontSize: 16,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 24,
    },
    someoneElseButton: {
        width: '100%',
        height: 56,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 500,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        display: 'inline-flex',
        borderWidth: 1,
        borderColor: '#474A4C',
    },
    someoneElseText: {
        color: '#27292A',
        fontSize: 16,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 24,
    },
    dateinput: {
        color: '#A5ADB1',
        fontSize: 16,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 24,
    },
    genderBody: {
        height: 140,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    genderButton: {
        flexDirection: 'row',
        width: '45%',
        height: 56,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 500,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        display: 'inline-flex',
        borderWidth: 1,
    },
    genderNoticeHeadnig: {
        color: '#0D91DC',
        fontSize: 24,
        fontFamily: 'Gilroy',
        fontWeight: '500',
        lineHeight: 32,
    },
    questionnaireBody: {
        display: 'flex',
        height: Platform.OS === 'ios' ? '88%' : null,
        flex: Platform.OS === 'android' ? 1 : null,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 20,
        gap: 30,
        justifyContent: 'center',
        backgroundColor: '#E5F6F6'
    },
    questionnaireH2: {
        color: '#666B6E',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '500',
        lineHeight: 20,
    },
    questionText: {
        color: '#666B6E',
        fontSize: 16,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        textDecorationLine: 'underline',
        lineHeight: 24,
    },
    answerText: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    },
    optionsContainerStyle: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        paddingLeft: 0
    },
    symptomQueryBody: {
        gap: 15
    },
    searchResultList: {
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: '#CED6DA',
        paddingVertical: 8
    },
    searchResultMatch: {
        color: '#0D91DC',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '500',
        lineHeight: 20,
    },
    searchResultUnmatch: {
        color: '#666B6E',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '500',
        lineHeight: 20,
    },
    symptomDetailsBody: {
        flexDirection: 'column',
        width: '100%',
        height: 120,
        borderColor: '#CED6DA',
        borderBottomWidth: 0.5,
        paddingTop: 8,
        paddingBottom: 16,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 8,
        display: 'inline-flex'
    },
    symptomHeading: {
        color: '#0D91DC',
        fontSize: 16,
        fontFamily: 'Gilroy',
        fontWeight: '500',
        lineHeight: 20,
    },
    symptomDescription: {
        color: '#666B6E',
        fontSize: 12,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    },
    symptomButton: {
        width: '50%',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 500,
        borderWidth: 0.5,
        borderColor: '#0D91DC',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        display: 'inline-flex'
    },
    symptomButtonText: {
        color: '#0D91DC',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '500',
        lineHeight: 20,
    },
    unmatchedSymptomHeading: {
        color: '#666B6E',
        fontSize: 16,
        fontFamily: 'Gilroy',
        fontWeight: '500',
        lineHeight: 20,
    },
    unmatchedSymptomDescription: {
        color: '#666B6E',
        fontSize: 12,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    },
    unmatchedSymptomButton: {
        width: '50%',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 500,
        borderWidth: 0.5,
        borderColor: '#666B6E',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        display: 'inline-flex'
    },
    unmatchedSymptomButtonText: {
        color: '#666B6E',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '500',
        lineHeight: 20,
    },
    durationQuestionBody: {
        height: Platform.OS === 'ios' ? '88%' : null,
        flex: Platform.OS === 'android' ? 1 : null,
        paddingHorizontal: 20,
        paddingVertical: 32,
        marginTop: 20,
        gap: 30,
        justifyContent: 'flex-end',
        backgroundColor: '#E5F6F6'
    },
    durationQueryBody: {
        gap: 20
    },
    durationQueryBodyText: {
        color: '#666B6E',
        fontSize: 16,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 24,
    },
    summaryBody: {
        width: '100%',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 12,
        display: 'inline-flex'
    },
    summaryHeadText: {
        color: '#27292A',
        fontSize: 14,
        fontFamily: 'Gilroy-B',
        fontWeight: '600',
        lineHeight: 20,
    },
    summaryParagraphText: {
        color: '#666B6E',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    },
    patientInfoText: {
        color: '#27292A',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    },
    causesBody: {
        width: '100%',
        paddingVertical: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        gap: 12,
        display: 'inline-flex'
    },
    causesText: {
        color: '#0D91DC',
        fontSize: 18,
        fontFamily: 'Gilroy',
        fontWeight: '600',
        lineHeight: 28,
    },
    managedHome: {
        color: '#63A7A7',
        fontSize: 12,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    },
    pillText: {
        color: '#666B6E',
        fontSize: 12,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    },
    pillsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 5
    },
    progressBarContainer: {
        gap: 8,
        paddingVertical: 12,
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    percentageText: {
        color: '#0D91DC',
        fontSize: 18,
        fontFamily: 'Gilroy',
        fontWeight: '600',
        lineHeight: 28,
    },
    diagnosisSafeArea: {
        paddingVertical: 20,
        backgroundColor: '#FDFDFD',
        alignItems: 'stretch'
    },
    continueButtonView: {
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        bottom: 10,
        zIndex: 1,
        paddingHorizontal: 20,
        gap: 20
    },
    diagnosisSpaceBox: {
        height: 52
    },
    diagnosisSymptomsBody: {
        width: '100%',
        padding: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        gap: 12,
        display: 'inline-flex'
    },
    diagnosisSymptomsBodyH1: {
        color: '#27292A',
        fontSize: 14,
        fontFamily: 'Gilroy-M',
        fontWeight: '600',
        lineHeight: 20,
    },
    diagnosisSymptomsBodyParagraph: {
        color: '#27292A',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    },
    diagnosisDisclaimerBody: {
        width: '100%',
        paddingVertical: 32,
        borderTopWidth: 1,
        borderColor: '#CED6DA',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        gap: 8,
        display: 'inline-flex'
    },
    diagnosisDisclaimerBodyText: {
        color: '#666B6E',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    },
    diagnosisDisclaimerBodyLinkText: {
        color: '#0D91DC',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '600',
        lineHeight: 20,
    },
    causesDiagnosisBox: {
        width: '100%',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#CED6DA',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 12,
        display: 'inline-flex'
    },
    causesDiagnosisBoxContentContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        display: 'inline-flex'
    },
    causesDiagnosisBoxContentContainerText: {
        color: '#27292A',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '600',
        lineHeight: 20,
    },
    toastContainer: {
        width: '95%',
        height: 70,
        margin: 10,
        position: 'absolute',
        right: '95%',
        zIndex: 1,
        padding: 5,
        borderRadius: 10,
        marginTop: Platform.OS === 'ios' ? 50 : 0
    },
    dropDownText: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Gilroy',
        fontWeight: '400',
    }
})