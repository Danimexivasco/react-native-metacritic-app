import React from "react"
import {Tabs} from "expo-router";
import Icon from "../../components/icon";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions= {{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black"
        },
        tabBarActiveTintColor: "yellow",
        
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ 
          title: "Home",
          tabBarIcon: ({color}) => <Icon name="home" color={color}/>
        }} 
      />
      <Tabs.Screen
        name="about"
        options={{ 
          title: "About",
          tabBarIcon: ({color}) => <Icon name="info-circle" color={color}/>
        }} 
      />
    </Tabs>
  )
}