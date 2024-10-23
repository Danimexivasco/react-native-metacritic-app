import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {Game} from "../types"

interface GameProps {
  game: Game
}

const GameCard = ({game}: GameProps) => {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.score}>{game.score}</Text>
      <Text style={styles.description}>{game.description}</Text>
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