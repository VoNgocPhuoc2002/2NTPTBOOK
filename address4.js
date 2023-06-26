import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Switch, Button } from 'react-native';

export default function Address4() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.imgBack} source={require('../assets/Back.png')}></Image>
                <Image style={styles.imgPhone} source={require('../assets/phone.png')}></Image>
                <Text style={styles.text1}>Order Confirmed!</Text>
                <Text style={styles.text2}>Your order has been confirmed, we will send you confirmation email shortly.</Text>
                <TouchableOpacity style={styles.btn1}>
                    <Text style={styles.text3}>Go to Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.text4}>Continue to Shopping</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
    },
    content:{
        width: '80%',
        alignItems: 'center',
    },
    imgBack: {
        marginTop: "15%",
        marginRight: "100%"
    },
    imgPhone: {
        marginTop: "40%",
        marginLeft: 20
    },
    text1: {
        fontWeight: "600",
        fontSize: 28,
        color: "#1D1E20",
        marginTop: 40,
    },
    text2: {
        fontWeight: "400",
        fontSize: 16,
        textAlign: "center",
        color: "#8F959E",
        marginTop: 20,
    },
    btn1: {
        padding: 10,
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        alignItems: "center",
        width: 335,
        height: 50,
        marginTop: 60,
    },
    text3: {
        fontWeight: "500",
        fontSize: 16,
        color: "#8F959E"
    },
    btn2: {
        width: 335,
        height: 50,
        padding: 10,
        backgroundColor: '#43C1BE',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    text4: {
        fontWeight: "500",
        fontSize: 16,
        color: "#FFFFFF"
    },
})