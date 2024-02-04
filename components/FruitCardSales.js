import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function FruitCardSales({ item }) {
  const navigation = useNavigation()
  return (
    <View className="mr-6 items-center">
     <TouchableOpacity 
      onPress={()=>navigation.navigate('Product',{...item, color:item.color(1)})}
     className="shadow-lg z-20 flex-row justify-center">
     <Image source={item.image} 
       style={{width:65, height:65}}
      />
     </TouchableOpacity>
      <View
        style={{ height: 75, width:80, backgroundColor: item.color(1), zIndex:1 }}
        className="-mt-10 p-3 rounded-3xl justify-end items-center"
      >
        <Text className="font-semibold text-center text-gray-800 tracking-wide">$ {item.price}</Text>
      </View>
    </View>
  )
}