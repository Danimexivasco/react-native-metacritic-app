import { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
  Image,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  FlatList
} from "react-native";
import { getLatestGames } from "../lib/metacritic";
import {Game} from "types"
// import Constants from "expo-constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AnimatedGameCard from "./animatedGameCard";
import Logo from "./logo";

export default function Main() {
  const [games, setGames] = useState([])
  const insets = useSafeAreaInsets()

  useEffect(() => {
    getLatestGames().then(games => setGames(games))
  }, [])

  return (
    <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
      <View style={{marginBottom: 10}}>
        <Logo />
      </View>
        {games.length === 0 ? 
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={"large"}/>
          </View>
        :
          <FlatList
            data={games}
            keyExtractor={(game: Game) => game.slug}
            renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
          />
      }
    </View>
  );
}

// Options to avoid render until edge (safe area):
// 1. SafeAreaView (only IOS)
// 2. paddingTop: Constants.statusBarHeight (see styles.container)
// 3.  with react-native-safe-area-context insets


