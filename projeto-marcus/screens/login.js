import * as React from 'react';
import { Avatar, Input, Button, Text, Divider } from 'react-native-elements';
import { View } from "react-native";

const Login = ({navigation}) => {
    return (
      <View>
        <Avatar
          size="large"
          rounded
          source={{
            uri:
              'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
          }}
        />

        <Input
          placeholder="Digite seu email"
        />
        <Input
          placeholder='Digite sua senha'
        />
        <Button
          title="Entrar"
          onPress={() => navigation.navigate('Home')}
        />
        <Divider orientation="horizontal" />

        <Button
          title="Cadastrar"
          type="outline"
          onPress={() => navigation.navigate('Cadastro')}
        />
      </View>
    )

}

export default Login;