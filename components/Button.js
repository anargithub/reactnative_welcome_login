import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'

export default function Button({ onPress, title, color, filled }) {
    const filledBgColor = color || COLORS.primary
    const outlinedColor = COLORS.white
    const bgColor = filled ? filledBgColor : outlinedColor
    const textColor = filled ? COLORS.white : COLORS.primary
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: bgColor }]} onPress={onPress}>
            <Text style={[styles.text, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: COLORS.primary,
        borderRadius: 12,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18
    }
})