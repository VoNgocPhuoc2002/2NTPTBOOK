import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Switch, Button } from 'react-native';

export default function Address3() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={require('../assets/Back.png')} style={styles.imgBack}></Image>
                </TouchableOpacity>
                <Text style={styles.textheader}>Add New Text</Text>
            </View>
            <View style={styles.logo}>
                <View style={styles.visa}>
                    <TouchableOpacity style={styles.btnVisa}>
                        <Image source={require('../assets/visa.png')} style={styles.imgVisa}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.paypal}>
                    <TouchableOpacity style={styles.btnPaypal}>
                        <Image source={require('../assets/paypal.png')} style={styles.imgLogo}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.banking}>
                    <TouchableOpacity style={styles.btnBanking}>
                        <Image source={require('../assets/banking.png')} style={styles.imgLogo}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.formPayment}>
                <View style={styles.cardOwner}>
                    <Text style={styles.textInput}>Card Owner</Text>
                    <TextInput placeholder='Hemendra Mali' style={styles.input}></TextInput>
                </View>
                <View style={styles.cardNumber}>
                    <Text style={styles.textInput}>Card Number</Text>
                    <TextInput placeholder='5254 7634 8734 7690' style={styles.input}></TextInput>
                </View>
                <View style={styles.expAndCvv}>
                    <View style={styles.exp}>
                        <Text style={styles.textInput}>Exp</Text>
                        <TextInput placeholder='24/24' style={styles.input}></TextInput>
                    </View>
                    <View style={styles.cvv}>
                        <Text style={styles.textInput}>Cvv</Text>
                        <TextInput placeholder='7763' style={styles.input}></TextInput>
                    </View>
                </View>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.text}>Add new card</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        marginTop: 25,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    textheader: {
        marginRight: "37%",
        color: '#1D1E20',
        fontSize: 17,
        fontWeight: 'bold',
    },
    imgBack: {
        marginLeft: "30%",
    },
    logo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-between",
        width: "80%",
        marginLeft: "10%",
        marginTop: 38,
    },
    btnVisa: {
        backgroundColor: '#FFEEE3',
        paddingVertical: 25,
        paddingHorizontal: 22,
        alignItems: 'center',
        borderRadius: 10,
    },
    btnPaypal: {
        backgroundColor: '#F5F6FA',
        paddingVertical: 25,
        paddingHorizontal: 30,
        alignItems: 'center',
        borderRadius: 10,
    },
    btnBanking: {
        backgroundColor: '#F5F6FA',
        paddingVertical: 23,
        paddingHorizontal: 28,
        alignItems: 'center',
        borderRadius: 10,
    },
    imgVisa: {

    },
    imgLogo: {

    },
    formPayment: {
        alignItems: 'center',
        marginTop: 30,
    },
    cardOwner: {
        width: "80%",
        marginTop: 10,
    },
    cardNumber: {
        width: "80%",
        marginTop: 10,
    },
    textInput: {
        color: '#1D1E20',
        fontWeight: 500,
        fontSize: 16,

    },
    input: {
        padding: 10,
        backgroundColor: '#F5F6FA',
        borderRadius: 10,
        paddingLeft: 15,
        marginTop: 10,
    },
    expAndCvv: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-between",
        width: "80%",
        marginTop: 10,
    },
    exp: {
        width: "48%",
    },
    cvv: {
        width: "48%",
    },
    viewButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    touch: {
        backgroundColor: "#43C1BE",
        padding: 15,
        width: 200,
        height: 55,
        borderRadius: 15,
        marginTop: 261,
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
        textAlign: 'center',
    },
});