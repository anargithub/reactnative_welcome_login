import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../constants/colors'
import { Ionicons } from '@expo/vector-icons'
import Checkbox from 'expo-checkbox'
import Button from '../components/Button'

export default function Signup({ navigation }) {
    const [isPasswordShown, setIsPasswordShown] = useState(true)
    const [isChecked, setIsChecked] = useState(false)
    return (
        <SafeAreaView style={styles.signup_container}>
            <View style={styles.signupBox}>
                <View style={styles.signupBoxIn}>
                    <Text style={styles.title}>Create Account</Text>
                    <Text style={styles.subTitle} >Connect with your friend today!</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formText}>Email address</Text>
                    <View style={styles.searchBar}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={styles.input}
                        />
                    </View>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formText}>Mobile Number</Text>
                    <View style={[styles.searchBar, { justifyContent: 'space-between', flexDirection: 'row' }]}>
                        <TextInput
                            placeholder='+77'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric '
                            style={[styles.input, { width: '12%', borderRightWidth: 1, borderRightColor: COLORS.grey, height: '100%' }]}
                        />
                        <TextInput
                            placeholder='Enter your phone number'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={styles.inputNum}
                        />
                    </View>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formText}>Password</Text>
                    <View style={styles.searchBar}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={styles.input}
                        />
                        <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown)} style={styles.visible}>
                            {isPasswordShown ?
                                (
                                    <Ionicons name='eye-off' size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name='eye' size={24} color={COLORS.black} />
                                )}
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.formCheck}>
                    <Checkbox style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />
                    <Text>I aggree to the terms and conditions</Text>
                </View>
                <Button
                    title={'Sign Up'}
                    filled
                    style={styles.button}
                />
                <View style={styles.signupWith}>
                    <View style={styles.signupLine} />
                    <Text>Or Sign up with</Text>
                    <View style={styles.signupLine} />
                </View>
                <View style={styles.signupTypes}>
                    <TouchableOpacity
                        onPress={() => console.log('PRessed')}
                        style={styles.signupType}
                    >
                        <Image resizeMode='contain' style={styles.image} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2504/2504792.png' }} />
                        <Text>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => console.log('PRessed')}
                        style={styles.signupType}
                    >
                        <Image resizeMode='contain' style={styles.image} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2504/2504739.png' }} />
                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account</Text>
                    <Pressable
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.footerReconect}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    signup_container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    signupBox: {
        flex: 1,
        marginHorizontal: 22
    },
    signupBoxIn: {
        marginVertical: 22
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 12,
        color: COLORS.black
    },
    subTitle: {
        fontSize: 16,
        color: COLORS.black
    },
    form: {
        marginBottom: 12
    },
    formText: {
        fontSize: 16,
        fontWeight: "400",
        marginVertical: 8
    },
    searchBar: {
        width: '100%',
        height: 48,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 22
    },
    input: {
        width: '100%'
    },
    inputNum: {
        width: '80%'
    },
    visible: {
        position: 'absolute',
        right: 12
    },
    formCheck: {
        flexDirection: 'row',
        marginVertical: 6
    },
    checkbox: {
        marginRight: 8
    },
    button: {
        marginBottom: 4,
        marginTop: 18
    },
    signupWith: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    signupLine: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.grey,
        marginHorizontal: 10
    },
    signupTypes: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    signupType: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 52,
        borderWidth: 1,
        borderColor: COLORS.grey,
        marginRight: 4,
        borderRadius: 10
    },
    image: {
        width: 36,
        height: 36,
        marginRight: 8
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 22
    },
    footerText: {
        fontSize: 16,
        color: COLORS.black
    },
    footerReconect: {
        fontSize: 16,
        color: COLORS.primary,
        fontWeight: "bold",
        marginLeft: 6
    }
})