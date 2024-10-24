import { Link } from "expo-router";
import React from "react"
import { Pressable, ScrollView, Text } from "react-native";
import Screen from "../../components/screen";
import Icon from "../../components/icon";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Text className="text-white font-bold text-2xl mb-8">About the project</Text>
        <Text className="text-white/90 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maiores et consectetur harum rem nemo deleniti! Voluptates magni officiis provident!
        </Text>
        <Text className="text-white/90 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maiores et consectetur harum rem nemo deleniti! Voluptates magni officiis provident!
        </Text>
        <Text className="text-white/90 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maiores et consectetur harum rem nemo deleniti! Voluptates magni officiis provident!
        </Text>
        <Text className="text-white/90 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maiores et consectetur harum rem nemo deleniti! Voluptates magni officiis provident!
        </Text>
      </ScrollView>
    </Screen>
  )
}