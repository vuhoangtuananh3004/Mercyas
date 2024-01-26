import React from "react";
import { Image, Text, View } from "react-native";

function FooterLogin() {
    
  return (
    <View className="flex flex-col w-full items-center justify-center space-y-5">
      <View className="h-1 w-3/4  border-2 border-dashed border-black" />
      <View className="flex flex-row w-3/4 justify-around">
        <Image
          className="h-[48px] w-[48px] rounded-full bg-white "
          source={require("../../assets/facebook-round-svgrepo-com.png")}
        />
        <Image
          className="h-[48px] w-[48px] rounded-full bg-white"
          source={require("../../assets/apple-svgrepo-com.png")}
        />
        <Image
          className="h-[48px] w-[48px]"
          source={require("../../assets/tiktok.png")}
        />
        <Image
          className="h-[48px] w-[48px] rounded-full "
          source={require("../../assets/facebook-round-svgrepo-com.png")}
        />
      </View>
    </View>
  );
}

export default FooterLogin;
