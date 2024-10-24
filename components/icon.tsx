import React from "react"
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface IconProps {
  name: string
  size?: number
  color?: string
  [x:string]: any;
}
export default function Icon({name, size=24, color="white", ...props}: IconProps) {
  return (
    <FontAwesome name={name} size={size} color={color} {...props}/>
  )
}