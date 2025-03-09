import React, {useEffect} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import react from "react";

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('MainTabs')}, 8000);
            return () => clearTimeout(timer)
    })
    return (
        <View style={styles.container}>
            <Image source={ require("../../assets/jardin.png")} style={styles.logo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 1100,
        height: 500,
        resizeMode: 'contain',
    }

});

export default SplashScreen