import * as React from 'react';
import { Input, Button, Text, Divider } from 'react-native-elements';
import { View } from "react-native";

export default class Cadastro extends React.Component{
    render() {
        return (
            <View>
     <Divider orientation="horizontal" />


       <Text h5>Nome completo</Text>
       <Input/>

       <Text h5>Email</Text>
       <Input/>

       <Text h5>Senha</Text>
       <Input/>

       <Button
  title="Cadastrar"
  type="outline"
  onPress={
    () => this.props.navigation.navigate('Login')
  }
/>

    </View>
        )
    }
}