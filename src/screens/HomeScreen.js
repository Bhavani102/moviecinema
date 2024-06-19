import { View, Text, ScrollView,Image,TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { BellIcon,MagnifyingGlassIcon, } from "react-native-heroicons/outline";
import{useNavigation} from "@react-navigation/native";
export default function HomeScreen() {
    const navigation=useNavigation();
    return (
        <View className="flex-1">
            <Image source={require("../../assets/images/welcome.png")}
            style={{
                position:"absolute",
                width:"100%",
                height:"100%",
            }}
            resizeMode="cover"
            />
            <ScrollView className="mt-16">
                <StatusBar style="light" />
                <View className="flex-row justify-between items-center mx-4 mg-4">
                  <View className="border-2 border-white rounded-full overflow-hidden">
                    <Image source={require("../../assets/images/avatar.png")}
                    style={{
                        width:45,
                        height:45,
                    }}
                    resizeMode="cover"
                    />
                  </View>
                  {/*notification and search bar*/}
                  <View className="flex-row space-x-4">
                   <BellIcon size={30} strokedWidth={2} color="white"/>
                   <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                     <MagnifyingGlassIcon size={30}
                      strokedWidth={2} 
                      color="white">
                     </MagnifyingGlassIcon>
                   </TouchableOpacity>
                  </View>
                  {/*Movie Card*/}
                  <TrendingMovies/>
                </View>
            </ScrollView>
        </View>
    );
}
