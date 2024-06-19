import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen.js";
import SearchScreen from "../screens/SearchScreen";
import SavedScreen from "../screens/SavedScreen.js";
import HomeScreen from "../screens/HomeScreen.js";
import {Ionicons} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function AppNavigation() {
  function HomeStack() {
    return (
      <Stack.Navigator
       screenOptions={{
        headerShown: false,
       }}
       initialRouteName="Home"
      >
           <Stack.Screen name="HomeTab" component={HomeTabs} />
           <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
);
}
function HomeTabs() {
return (
    <Tab.Navigator
    screenOptions={({route }) => ({
     headerShown:false,
     tabBarIcon:({ focused}) => {
      let iconName;
      if(route.name == "Home"){
        iconName= "home";
      }
      else if(route.name == "Search"){
        iconName= "search";
      }
      else if(route.name == "Saved"){
        iconName= "heart";
      }
      const customizeSize = 30;

     return (
          <Ionicons
              name={iconName}
              size={customizeSize}
              color={focused ? "white" : "gray"}
         />
           );
      },
      tabBarActiveTintColor: "white",
      tabBarStyle: {
      backgroundColor: "#1F1D2B",
      borderTopWidth: 0,
      paddingBottom: 10,
      },
      })}>
       <Tab.Screen name="Home" component={HomeScreen} />
       <Tab.Screen name="Search" component={SearchScreen} />
       <Tab.Screen name="Saved" component={SavedScreen} />
    </Tab.Navigator>
);

}

return (
<NavigationContainer>
    <HomeStack />
</NavigationContainer>
);

}