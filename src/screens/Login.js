
import React, { useState, useContext, useEffect } from 'react'
import { Button, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { AuthContext } from './../services/AuthService'

export default function Login() {
    const { loginWithGoogle, login } = useContext(AuthContext)
    return (
        <View style={{flex:1,backgroundColor:'#0D013A'}}>
            <View style={{flex:1}}>
                <View style={{flex:1,justifyContent:'flex-end'}}>
                    <Text  style={{textAlign:'center',color:'#fff'}}>Daily Quran</Text>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text  style={{textAlign:'center',color:'#fff'}}>Welcome Back!</Text>
                </View>
            </View>
            <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={loginWithGoogle}>
                <Text  style={{width:200,padding:20,borderRadius:20, backgroundColor:'blue',textAlign:'center',color:'#fff'}}>hello</Text>
                </TouchableOpacity>
            </View>
        </View>
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text>Login Screen</Text>
        //     <Button
        //         title="Go to Details"
        //         onPress={() => navigation.navigate('Details')}
        //     />
        //     <Button
        //         title="Google"
        //         onPress={loginWithGoogle}
        //     />
        //     <Button
        //         title="Login"
        //         onPress={() => login('naifmhd@gmail.com', 'password')}
        //     />
        // </View>
    )
}
