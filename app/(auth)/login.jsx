import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from "../../assets/images/logo.png"

const Login = () => {

  let handlePress = () =>{
    router.push("/(auth)/signup")
}

  return (
    <View className=" bg-[#161622] flex-1  h-full w-full pt-4"  >
      <Image className="w-1/3" resizeMode="contain" source={Logo}></Image>

      <View className=" flex justify-center  h-fit py-10 w-[95%] gap-4 px-2 ">
        <Text className="text-xl text-white">Login</Text>

        <Text className="text-sm text-white">Username</Text>
       <TextInput placeholder='your unique username' placeholderTextColor={"#7B7B8B"} className="h-[30px] bg-[#1E1E2D] px-2"/>

       

       <Text className="text-sm text-white">Password</Text>
       <TextInput placeholder='password' placeholderTextColor={"#7B7B8B"} className="h-[30px] w-full bg-[#1E1E2D] px-2"/>

       <TouchableOpacity onPress={handlePress} className=" py-2 px-6 text-lg  flex justify-center items-center font-bold rounded-sm text-[#161622] bg-[#ff8c00] bg-gradient-to-r from-[#ff8c00] to-[#ffa300]">
          <Text >Login</Text>
        </TouchableOpacity>

      <Link href={"/signup"}>
        <Text className="text-[#787b8b]">New to Aora? <Text className="text-[#ff8c00]">Signup</Text></Text>
      </Link>
      </View>
    </View>
  )
}

export default Login 