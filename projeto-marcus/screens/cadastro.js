import * as React from 'react';
import { Input, Button, Divider } from 'react-native-elements';
import { View } from "react-native";
import { useState } from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const Cadastro = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

const auth = getAuth();
const navigation = useNavigation();

  const cadastrar = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    navigation.navigate('Home');
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    });
  }

    
    return (
      <View>
        <Divider orientation="horizontal" />


        <Input
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome completo"
        />

        <Input 
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu email"
        />

        <Input
          value={senha}
          onChangeText={setSenha}
          placeholder="Digite sua senha"
        />

        <Button
          title="Cadastrar"
          type="outline"
          onPress={() => cadastrar}
        />

      </View>
    )
}

export default Cadastro;