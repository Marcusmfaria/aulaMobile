import React from "react";
import { View } from "react-native";
import { Avatar, Input, Button, Text, Divider } from 'react-native-elements';



const Flex = () => {
return (
  <View>

    <View>
    <Avatar
    size="large"
  rounded
  source={{
    uri:
      'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
  }}
/>

<Text h3>Login</Text>
<Input
  placeholder="Digite seu email"
/>
<Input
  placeholder='Digite sua senha'
/>
<Button
  title="Entrar"
  buttonStyle={backgroundcolor: green}
/>
<Divider orientation="horizontal" />

<Button
  title="Cadastrar"
  type="outline"
/>
    </View>

    <View>
    <Divider orientation="horizontal" />
    
      <Text h3>Cadastro</Text>

      <Text h5>Nome completo</Text>
      <Input/>

      <Text h5>Email</Text>
      <Input/>

      <Text h5>Senha</Text>
      <Input/>

      <Button
  title="Cadastrar"
  type="outline"
/>

    </View>
    
  </View>
  
);
};


export default Flex;