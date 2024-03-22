import { Platform, StyleSheet } from "react-native";

export const ratingAndReviewStyle = StyleSheet.create({
    subHeadingText: {
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    },
    ratingAndReviewContainer: {
        width: '100%',
        height: 300,
        paddingTop: 20,
        borderTopColor: "#EAEDEF",
        borderTopWidth: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 24
    },
    ratingAndReviewContainerHeading: {
        color: '#27292A',
        fontSize: 14,
        fontFamily: 'Gilroy-M',
        fontWeight: '600',
    },
    reviewContainer: {
        width: '100%',
        height: 152,
        alignItems: 'flex-end',
        gap: 4
    },
    reviewContainerTextArea: {
        width: '100%',
        height: 128,
        padding: 8,
        backgroundColor: '#FDFDFD',
        borderRadius: 4,
        borderColor: "#EAEDEF",
        borderWidth: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 8,
        flexWrap: 'wrap',
        ...(Platform.OS === 'android' && { textAlignVertical: "top" }),
        ...(Platform.OS === 'ios' && { textAlign: "left" }),
    },
    reviewContainerTextAreaPlaceholder: {
        color: '#666B6E',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    }
})