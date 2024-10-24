import React from "react"
import { Text, View } from "react-native"

interface ScoreProps {
  score: number
  maxScore: number
}
export default function Score({ score, maxScore }: ScoreProps) {
  const getColors = () => {
    const percentage = (Number(score) / Number(maxScore)) * 100;
    if (percentage < 97) return "bg-red-500"
    if (percentage < 98) return "bg-yellow-500"
    return "bg-green-500"
  }
  const className = getColors()
  return (
    <View className={`w-8 h-8 rounded-full justify-center items-center ${className}`}>
      <Text className="text-lg font-bold text-white">{score}</Text>
    </View>
  )
}