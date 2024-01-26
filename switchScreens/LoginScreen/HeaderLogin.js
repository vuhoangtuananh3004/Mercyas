import React from "react";
import { Image, Text, View } from "react-native";

export default function HeaderLogin(props) {
  return (
    <View className="flex w-full items-center">
      <View className="flex flex-row mt-10 h-[96px] w-full justify-center shadow-md shadow-black/50 drop-shadow-2xl">
        <View className="relative ">
          <View className="absolute bottom-0 -left-[136px]  w-[128px] rounded-xl border-t-4 border-black " />
        </View>

        <Image
          className="h-[128px] w-[128px] rounded-full bg-black/90"
          source={require("../../assets/logo_3d_no_bg.png")}
        />

        <View className="relative">
          <View className="absolute bottom-0 left-[8px] w-[128px] rounded-xl border-t-4 border-black" />
        </View>
      </View>
      <Text className="text-[48px] font-extrabold tracking-wider mt-[64px]">
        {props.title}
      </Text>
    </View>
  );
}
