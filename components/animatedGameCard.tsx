import React, {useEffect, useRef} from 'react'
import { Animated } from 'react-native'
import GameCard from "./gameCard";

const AnimatedGameCard = ({game, index}) => {
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true
    }).start()
  }, [])

  return (
    <Animated.View style={{opacity}}>
      <GameCard game={game} />
    </Animated.View>
  )
}

export default AnimatedGameCard