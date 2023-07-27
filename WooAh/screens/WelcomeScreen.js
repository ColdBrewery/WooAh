import {View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react';
import {SafeAreaView} from "react-native";
import {themeColors} from "../theme";
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import HomeScreen from "./HomeScreen";
const WelcomeScreen =()=> {
    const navigation = useNavigation()
    return (
        <SafeAreaView className="flex-1" style={{backgroundColor:themeColors.bg}}>
            <View className="flex-1 flex justify-around my-4">
                <Text className="text-white font-bold text-4xl text-center">Let's Get Started!</Text>
                <View className="flex-row justify-center">
                    <Image source={require("../assets/png/dogcall.png")}
                       style={{width: 350, height: 350}} />
                </View>
                <View className="space-y-4">
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('SignUp')}
                    className="py-3 bg-gray-50 mx-7 rounded-xl">
                        <Text className="text-xl font-bold text-center text-gray-700">
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <View className="flex-row justify-center">
                        <Text className="text-white font-semibold">Already have on account?</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                            <Text className="font-semibold text-cyan-900"> Login </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreen;