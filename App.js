import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/login";
import Cadastro from "./screens/cadastro";
import Home from "./screens/home";
import NovoContato from "./screens/novoContato";
import AlterarContato from "./screens/alterarContato";

const Stack = createNativeStackNavigator();

const App = () => {
return (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NovoContato" component={NovoContato} />
        <Stack.Screen name="AlterarContato" component={AlterarContato} />
      </Stack.Navigator>
    </NavigationContainer>

  
);
};


export default App;