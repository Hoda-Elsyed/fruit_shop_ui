import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import StarRating from 'react-native-star-rating'
import { themeColors } from '../theme'

export default function ProductScreen(props) {
  const fruit = props.route.params
  const navigation = useNavigation()
  return (
    <View className="flex-1" style={{ backgroundColor: fruit.color }}>
      <SafeAreaView>
        <View className="flex-row justify-start mt-10 mx-5">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: 'rgba(255, 255, 255,0.2)' }}
            className="border rounded-xl border-gray-50"
          >
            <ChevronLeftIcon color={'white'} size={30} />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center pb-10 mt-10" >
          <Image source={fruit.image} style={{ width: 290, height: 290 }} />
        </View>
      </SafeAreaView>
      {/* details view */}
      <View
        style={{ borderTopLeftRadius: 45, borderTopRightRadius: 45 }}
        className="flex-1 flex  bg-orange-50 px-6 space-y-2 pt-6"
      >
        <Text style={{color:themeColors.text}} className="text-2xl font-bold">{fruit.name}</Text>
        <View className="flex-row items-center justify-between">
          <Text className="text-gray-500 font-semibold">{fruit.desc}</Text>
          <Text className="text-gray-500 font-semibold">Sold <Text className="text-gray-800 font-bold">239</Text></Text>
        </View>
        {/* star rating here */}
        <View>
          <StarRating
            disabled={true}
            starSize={18}
            // emptyStarColor='lightGray'
            containerStyle={{ width: 120 }}
            maxStars={5}
            rating={fruit.stars}
            fullStar={require('../assets/images/fullStar.png')}

          />
        </View>
        <View style={{height:165, flex:1}}>
          <Text style={{color:themeColors.text}}  className="tracking-wider py-3" >
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
            Lorem Ipsum has been the industry's standard dummy text ever 
          </Text>
        </View>
        <View  className="flex-row items-center justify-between mb-5">
          <Text style={{color:themeColors.text}} className="text-3xl">$ {fruit.price}</Text>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('Cart')}
          className="flex-1 ml-5 rounded-xl p-3" style={{backgroundColor:fruit.shadow, opacity:0.7}}>
            <Text  className="text-2xl text-white font-bold text-center">Add To Cart</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}