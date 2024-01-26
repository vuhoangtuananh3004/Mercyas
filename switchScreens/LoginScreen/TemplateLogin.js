import React, { useState } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HeaderLogin from "./HeaderLogin";
import SignUpScreen from "./SignUpScreen";
import LoginScreen from "./LoginScreen";
import FooterLogin from "./FooterLogin";

export default function TemplateLoginr() {
  const [isSignIn, setSignIn] = useState(true);
  const title = isSignIn ? "Sign In" : "Sign Up";

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }} // Top left
      end={{ x: 1, y: 1 }}
      colors={["#FFFFFF", "#dfebf7", "#6999c9"]}
      className="flex-1"
    >
      <SafeAreaView className="flex-1 items-center justify-between">
        <HeaderLogin setSignIn={setSignIn} title={title} />
        <View className="items-center">{isSignIn ? <LoginScreen setSignIn={setSignIn} /> : <SignUpScreen setSignIn={setSignIn} />}</View>
        <FooterLogin/>
      </SafeAreaView>
    </LinearGradient>
  );
}
