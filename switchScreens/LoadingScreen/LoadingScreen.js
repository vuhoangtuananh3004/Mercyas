import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoadingScreen(props) {
  const slogan = "Snap, Track, Thrive Your Finances Simplified";
  return (
    <SafeAreaView className="flex-1 items-center justify-center  ">
      <ImageBackground
        className="h-[512px] w-[512px]"
        source={require("../../assets/logo.png")}
      >
        <View className="flex w-full items-center justify-center">
          <View className="w-[256px] items-center justify-center">
            <Text
              className="text-xl text-center tracking-widest text-yellow-800 font-bold shadow-lg shadow-white"
              numberOfLines={2}
            >
              {slogan}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
