
import React from 'react'
import  Icon  from 'react-native-vector-icons/FontAwesome5'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import Account from '../screens/Account'
import Pokedex from '../screens/Pokedex'
import Favoritos from '../screens/Favoritos'
import NavigationFavorite from './NavigationFavorite'

//agregamos iconos en el tab.Screen con options

const Tab = createBottomTabNavigator()
export default function Navigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Favorite' component={NavigationFavorite} options={{tabBarLabel:"Favoritos", tabBarIcon:({color, size})=>
  (<Icon name="heart" color={color} size={size}/>),
        }}/>
        <Tab.Screen name='Pokedex' component={Pokedex} options={{tabBarLabel:"", tabBarIcon: ()=>renderPokeball()}}/>
        <Tab.Screen name='Account' component={Account} options={{tabBarLabel:"Mi Cuenta", tabBarIcon:({color, size})=>
  (<Icon name="user" color={color} size={size}/>),
     }} />

    </Tab.Navigator>
  )
}

const renderPokeball = ()=>{
    return(
     <Image source={require('../screens/img/Pokeball-PNG.png')} style={{width:50, height:50, top: 9}}/>
    )
} 