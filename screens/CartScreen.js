import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'
import { ScrollView } from 'react-native'
import FruitCardSales from '../components/FruitCardSales'
import { cartItems, featuredFruits } from '../constants'
import FruitCardCart from '../components/FruitCardCart'

export default function CartScreen() {
    const navigation = useNavigation()
    return (
        <SafeAreaView className='flex-1'>
            <View className="flex-row justify-start mt-10 mx-5">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ backgroundColor: 'rgba(255, 255, 255,0.2)' }}
                    className="border rounded-xl border-gray-300"
                >
                    <ChevronLeftIcon color={'gray'} size={30} />
                </TouchableOpacity>
            </View>
            <View className="mt-10 mx-4 space-y-1">
                <Text style={{ color: themeColors.text }} className="font-semibold text-2xl ">Your <Text className='font-bold'>cart</Text></Text>
                <View className='py-5'>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            cartItems.map((item, index) => {
                                return (
                                    <FruitCardCart key={index} item={item} />
                                )
                            })
                        }
                        <View className="mb-7 flex-row justify-end">
                            <Text className="text-lg">Total price: <Text className="text-yellow-500">420.80</Text></Text>
                        </View>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('Cart')}
                            className="flex-1 ml-5 rounded-xl p-3 bg-yellow-500 mx-10">
                            <Text className="text-2xl text-white font-bold text-center">Payment</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>

        </SafeAreaView>
    )
}