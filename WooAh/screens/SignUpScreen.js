import {View, Text, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import React from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {themeColors} from "../theme";
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from "@react-navigation/native";
const SignUpScreen =()=> {

    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
            <SafeAreaView className="flex">
                <View className="flex-row justify-start">
                    <TouchableOpacity
                        onPress={()=>navigation.goBack()}
                        className={'bg-white p-2 rounded-tr-2xl rounded-bl-2xl ml-4'}
                    >
                        <ArrowLeftIcon size={'20'} color={'black'} />
                    </TouchableOpacity>
                </View>
                <View className={'flex-row justify-center'}>
                    <Image source={require('../assets/png/podcast.png')} style={{width: 165, height: 110}}/>
                </View>
            </SafeAreaView>
            {/*whitebox*/}

            <View className={'flex-1 bg-white px-8 pt-8'}
                  style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className={'form space-y-2'}>
                        <Text className={'text-gray-700 ml-4'}>Full Name</Text>
                        <TextInput
                            className={'p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3'}
                            placeholder={'Enter Name'}
                        />
                        <Text className={'text-gray-700 ml-4'}>Email Address</Text>
                        <TextInput
                            className={'p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3'}
                            placeholder={'Enter Email'}
                            secureTextEntry

                        />
                        <Text className={'text-gray-700 ml-4'}>Password</Text>
                        <TextInput
                            className={'p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7'}
                            placeholder={'Enter Password'}
                            secureTextEntry

                        />

                        <TouchableOpacity
                            className={'py-3 bg-yellow-400 rounded-xl'}
                        >
                            <Text className={'text-base font-bold text-center text-gray-700'}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <Text className={'text-xl text-gray-700 font-bold text-center py-5'}>
                        Or
                    </Text>
                    <View className={'flex-row justify-center space-x-12'}>
                        <TouchableOpacity className={'p-2 bg-gray-100 rounded-2xl'}>
                            <Image source={require('../assets/png/google.png')}
                                   className={'w-10 h-10'}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity className={'p-2 bg-gray-100 rounded-2xl'}>
                            <Image source={require('../assets/png/facebook.png')}
                                   className={'w-10 h-10'}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity className={'p-2 bg-gray-100 rounded-2xl'}>
                            <Image source={require('../assets/png/github.png')}
                                   className={'w-10 h-10'}
                            />
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row justify-center mt-7 p-6">
                        <Text className="text-gray-500 font-semibold">Already have an account?</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                            <Text className="font-semibold text-cyan-900"> Login </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    );
};

export default SignUpScreen;