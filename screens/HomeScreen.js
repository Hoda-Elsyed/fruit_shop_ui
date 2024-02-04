import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3CenterLeftIcon, ShoppingCartIcon } from "react-native-heroicons/solid";
import { themeColors } from '../theme';
import { categories, featuredFruits } from '../constants';
import FruitCard from '../components/FruitCard';
import FruitCardSales from '../components/FruitCardSales';

export default function HomeScreen() {
    const [activeCategory,setActiveCategory] = useState('Oranges')
  return (
    <View className='pt-10 bg-orange-50 flex-1' >
        {/* upper bar part */}
        <View className="mx-4 flex-row items-center justify-between">
            <Bars3CenterLeftIcon size={30} color={'black'} />
            <TouchableOpacity 
             className="bg-orange-100 rounded-full p-2"
            >
                <ShoppingCartIcon size={25} color="orange" />
            </TouchableOpacity>
        </View>

        {/* categories */}
        <View className="mx-4 mt-4" >
            <Text
             style={{color:themeColors.text}}
            className="text-2xl tracking-widest font-semibold">Seasonal</Text>
            <Text
             style={{color:themeColors.text}}
            className="text-3xl font-bold">Fruits and Vegetables</Text>
            <ScrollView
             horizontal={true}
             showsHorizontalScrollIndicator={false}
             className="mt-7"
            >
                {
                    categories.map(cat=>{
                            let isActive = cat === activeCategory
                            let activeClass = isActive ? 'font-bold':''
                        return(
                            <TouchableOpacity
                             onPress={()=>{setActiveCategory(cat)}}
                              className="mr-8"
                             key={cat}>
                                <Text className={"text-lg "+activeClass}>{cat}</Text>
                                {
                                    isActive?(
                                        <Text className="font-extrabold text-orange-400 -mt-3 ml-2">___ __</Text>
                                    ):null
                                }
                            </TouchableOpacity>
                        )
                    })
                    }
            </ScrollView>
        </View>

        {/* Fruits Carousel */}
       <View className="mt-8">
       <ScrollView 
         horizontal
         showsHorizontalScrollIndicator={false}
        >
            {
                featuredFruits.map((item, index) =>{
                    return(
                        <FruitCard key={index} item={item} />
                    )
                })
            }
        </ScrollView>
       </View>

       {/* hot sales */}
       <View className="mt-8 mx-4 space-y-1">
         <Text style={{color: themeColors.text}} className="font-bold text-xl">Hot Sales</Text>
         <View>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{overflow: 'visible',}}
            >
                {
                    featuredFruits.reverse().map((item,index)=>{
                        return(
                            <FruitCardSales key={index} item={item} />
                        )
                    })
                }
            </ScrollView>
         </View>
       </View>
    </View>
  )
}