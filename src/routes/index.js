import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";

export default function Routes() {
  const Stack = createNativeStackNavigator();
  
  return(
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown:false}}/>

  </Stack.Navigator>  
  
  )
}

