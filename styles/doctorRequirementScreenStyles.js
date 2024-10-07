import { StyleSheet } from "react-native";

export const docStyles = StyleSheet.create({
    dosContainer: {
        paddingHorizontal: 20,
        paddingTop: 32,
        gap: 30,
        borderColor: 'red',
        borderRadius: 2
        // backgroundColor: '#ffffff',
        // alignItems: 'center'
    },
    imageContainer: {
        width: "100%",
        height: 250,
    },
    image: {
        height: '100%',
        width: "100%",
        borderRadius: 30
    },
    scrollView: {
        height: 250,
        borderBottomWidth: 1,
        borderBottomColor: '#E1E6E8',
        justifyContent: "space-between"
    },
    appreciationText: {
        color: '#27292A',
        fontSize: 16,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        marginBottom: 23
    },
    appreciationTextH1: {
        color: '#7CD1D1',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '600',
        marginBottom: 23
    },
    appreciationTextP: {
        color: '#666B6E',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        marginBottom: 23
    },
    uploadDocumentBox: {
        width: '100%',
    }
})