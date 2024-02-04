import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'
import { MinusIcon, PlusIcon } from 'react-native-heroicons/solid'

export default function FruitCardCart({ item }) {
    const navigation = useNavigation()
    return (
        <View className="mr-6  items-center justify-between   flex-row">
            {/* <Text></Text> */}
            <View className="flex-row items-center">
                <View className='mx-5 mb-5'>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Product', { ...item, color: item.color(1) })}
                        className="-ml-10 z-20 flex-row justify-center">
                        <Image source={item.image}
                            style={{ width: 65, height: 65 }}
                        />
                    </TouchableOpacity>
                    <View
                        style={{ height: 65, width: 70, backgroundColor: item.color(1), zIndex: 1 }}
                        className="-mt-10  p-3 rounded-3xl justify-end items-center"
                    >
                    </View>
                </View>
                <View className="items-start">
                    <Text style={{ color: themeColors.text }} className="font-bold text-base"> {item.name}</Text>
                    <Text className="font-extrabold  text-yellow-500">$ {item.price}</Text>

                </View>
            </View>
            <View className="flex-row items-ceneter space-x-2">
                <TouchableOpacity className="bg-gray-300 p-1 rounded-lg">
                    <PlusIcon size={18} color='white' />
                </TouchableOpacity>
                <Text>{item.qty}</Text>
                <TouchableOpacity className="bg-gray-300 p-1 rounded-lg">
                    <MinusIcon size={18} color='white' />
                </TouchableOpacity>
            </View>
        </View>
    )
}