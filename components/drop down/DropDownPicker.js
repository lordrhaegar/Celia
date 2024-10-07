import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import DropDownPicker from 'react-native-dropdown-picker'

const CustomDropDownPicker = (props) => {
    const {
        label,
        open,
        value,
        items,
        setOpen,
        setValue,
        setItems,
        placeholder
    } = props
    return (
        <View style={{gap: 12, marginBottom: open ? items.length > 2 ? 190 :70 : 0}} className="w-full">
            <Text style={styles.inputLabel}>{label}</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                props={{ activeOpacity: 1 }}
                placeholderStyle={{ color: "black" }}
                placeholder={placeholder}
                style={[styles.avoidKeyboard, { borderRadius: 25, borderColor: "black", height: 56, backgroundColor: 'transparent' }]}
                textStyle={styles.dropDownText}
                dropDownContainerStyle={{ borderRadius: 25, borderColor: "black" }}
                dropDownDirection='BOTTOM'
            />
        </View>
    )
}

export default CustomDropDownPicker