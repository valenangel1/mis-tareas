import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";
import UserScreen from "../screens/UserScreen";
import App from "../../App";

const Tab = createBottomTabNavigator();
const stack = createStackNavigator();

const TabNavigator = () => {
    return (<Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} options={{}}/>
        <Tab.Screen name="User" component={UserScreen} options={{}}/>
    </Tab.Navigator>)
}

const AppNavigator = () => {
    return (
        <stack.Navigator initialRouteName="Splash">
            <stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
            <stack.Screen name="MainTabs" component={TabNavigator} options={{headerShown: false}}/>
        </stack.Navigator>
    )
}

export default AppNavigator