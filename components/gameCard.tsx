import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import {Game} from "../types"
import Score from "./score"
import { Link } from 'expo-router'
import {styled} from "nativewind"

interface GameProps {
  game: Game
}

const StyledPressable = styled(Pressable)
const GameCard = ({game}: GameProps) => {
  return (
    <Link key={game.slug} href={`/${game.slug}`} asChild>
      <StyledPressable className='active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10 p-4 rounded-xl '>
        <View className='flex-row gap-4'>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View className='flex-shrink'>
            <Text className="mb-1" style={styles.title}>{game.title}</Text>
            <Score score={game.score} maxScore={100} />
            <Text className="mt-2 flex-shrink" style={styles.description}>{game.description.slice(0,100)}...</Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  )
}

export default GameCard

const styles = StyleSheet.create({
  card: {
    marginBottom: 42
  },
  image: {
    width: 105,
    height: 145,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee"
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  }
});