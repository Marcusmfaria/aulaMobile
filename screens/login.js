import * as React from 'react';
import { Avatar, Input, Button, Divider } from 'react-native-elements';
import { View } from "react-native";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";


const Login = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const auth = getAuth();

  const login = () =>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        setTimeout(() => navigation.navigate("Home"), 3000); 
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }

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
          value={email} 
          onChangeText={setEmail}
          placeholder="Digite seu email"
        />
        <Input
          value={senha} 
          onChangeText={setSenha}
          placeholder='Digite sua senha'
        />
        <Button
          onPress={login}
          title="Entrar"
          
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