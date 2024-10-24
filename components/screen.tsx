import React from "react"
import { View } from "react-native";

interface ScreenProps {
  children: React.ReactNode
  [x:string]: any;
}

export default function Screen({ children, ...props }: ScreenProps) {
  return <View className="flex-1 bg-black pt-4 px-2" {...props}>{children}</View>;
}