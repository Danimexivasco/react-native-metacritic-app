import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {Game} from "../types"
import Score from "./score"

interface GameProps {
  game: Game
}

const GameCard = ({game}: GameProps) => {
  return (
    <View key={game.slug} className='flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10'>
      <Image source={{ uri: game.image }} style={styles.image} />
      <View>
        <Text className="mb-1" style={styles.title}>{game.title}</Text>
        <Score score={game.score} maxScore={100} />
        <Text className="mt-2 flex-shrink" style={styles.description}>{game.description.slice(0,100)}...</Text>
      </View>
    </View>
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