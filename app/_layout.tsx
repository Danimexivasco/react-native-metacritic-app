import { Slot, Stack } from "expo-router"
import React from "react"
import { Pressable, Text, View } from "react-native"
import Logo from "../components/logo";
import { Link } from "expo-router";
import Icon from "../components/icon";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable)

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack 
        screenOptions={{
          headerStyle: {
            backgroundColor: "black"
          },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => (
            <Link asChild href="/">
              <Pressable>
                <Logo />
              </Pressable>
            </Link>
        ),
          headerRight: () => (
            <Link href="/about" asChild className="text-blue-400 text-xl">
              <StyledPressable className={`active:opacity-20 flex-row items-center`}>
                <Icon name="info-circle"/>
              </StyledPressable>
            </Link>
          )
        }}
      />
      {/* <Slot /> */}
    </View>
  )
}