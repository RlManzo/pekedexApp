import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Favoritos from '../screens/Favoritos'

const stack = createNativeStackNavigator()
export default function NavigationFavorite() {
  return (
    <stack.Navigator>
        <stack.Screen name='Favoritos' component={Favoritos}/>
    </stack.Navigator>
  )
}