import * as React from 'react';
import { Input, Button, Text, Divider } from 'react-native-elements';
import { View } from "react-native";

export default class Cadastro extends React.Component {
  render() {

    
    return (
      <View>
        <Divider orientation="horizontal" />


        <Input
          placeholder="Digite seu nome completo"
        />

        <Input
          placeholder="Digite seu email"
        />

        <Input
          placeholder="Digite sua senha"
        />

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