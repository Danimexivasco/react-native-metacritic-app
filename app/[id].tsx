import { Link } from "expo-router";
import React, { useEffect, useState } from "react"
import {Text, View, ActivityIndicator, ScrollView, Image} from "react-native";
import { useLocalSearchParams } from "expo-router";
import Screen from "../components/screen";
import Score from "../components/score";
import {Stack} from "expo-router"
import { getGameDetails } from "../lib/metacritic";

export default function Detail() {
  const {id} = useLocalSearchParams()
  const [gameInfo, setGameInfo] = useState(null)

  useEffect(() => {
    if (id) {
      getGameDetails(id).then((details) => setGameInfo(details))
    }
  }, [id])

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#ffee00"
          },
          headerTintColor: "black",
          headerTitle: id ?? "Game Detail",
          headerTitleAlign: "center",
          headerLeft: () => null,
          headerRight: () => null,
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator size="large" color="#fff"/>
        ) : (
          <ScrollView>
            <View className="justify-center items-center">
              <Image
                className="my-4 rounded"
                source={{ uri: gameInfo.img }}  
                style={{ width: 214, height: 294 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-white font-bold text-xl text-center">{gameInfo.title}</Text>
              <Text className="text-white/70 mt-4 font-bold mb-8 text-lg text-base">{gameInfo.description}</Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  )
}