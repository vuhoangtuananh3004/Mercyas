import React, { useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen(props) {
  return (
    <View className="flex w-full items-center space-y-5">
      <TextInput
        className="h-[48px] w-[320px] text-black bg-white rounded-full p-2 drop-shadow-2xl shadow-black shadow-xl"
        placeholder="Your User name ?"
      />
      <TextInput
        className="h-[48px] w-[320px] text-black bg-white rounded-full p-2 drop-shadow-2xl shadow-black shadow-xl"
        placeholder="Your Password ?"
        secureTextEntry={true}
      />

      <TouchableOpacity className="h-[48px] w-[320px] justify-center items-center text-black bg-sky-500 shadow-lg shadow-blue-400/50  rounded-full p-2 drop-shadow-2xl">
        <Text className="text-white text-xl font-bold tracking-wides ">
          Sign in
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> props.setSignIn(false)} className="h-[48px] w-[320px] justify-center items-center text-white bg-cyan-950 shadow-lg shadow-blue-400/50  rounded-full p-2 drop-shadow-2xl">
        <Text className="text-white text-xl font-bold tracking-wides ">
          Forgot Password
        </Text>
      </TouchableOpacity>
    </View>
  );
}
