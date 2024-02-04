import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { HeartIcon } from 'react-native-heroicons/solid'

export default function FruitCard({ item }) {
    const [isFavorite, setIsFavorite] = useState(false)
    return (
        <View style={{ width: 270, borderRadius: 40, backgroundColor: item.color(1) }}
            className="mx-5 p-3">
            <TouchableOpacity
             onPress={() =>{setIsFavorite(!isFavorite)}}
            className="rounded-full p-2" style={{backgroundColor:'rgba(255,255,255,0.3)', alignSelf:'flex-end'}}>
                <HeartIcon size={25} color={isFavorite?item.shadow:'white'} />
            </TouchableOpacity>
            <View
             style={{elevation:100, shadowColor:item.shadow, zIndex: 99,backgroundColor:'#0000',overflow: 'hidden', shadowOpacity: 0.7,shadowOffset:{width:0,height:50}}}
            className="flex-row justify-center">
                <Image style={{ width: 210, height: 210 }} source={item.image} />
            </View>
            <View className="my-4">
                <Text className="text-white font-bold text-xl shadow">{item.name}</Text>
                <Text className="text-white font-bold text-lg shadow tracking-wide">$ {item.price}</Text>
            </View>

        </View>
    )
}