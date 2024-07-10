import { Avatar, Button,  } from "react-native-elements";
import { View,Text,TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

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

  const navToCadastrar = () => {
    navigation.navigate('Cadastro');
  };
  
  return (
<View>
<Avatar 
size={'large'}
  rounded
  source={{
    uri:
      'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
  } }
/>
<Text>login</Text>
<TextInput value={email} onChangeText={setEmail}></TextInput>
<Text >senha</Text>
<TextInput secureTextEntry='true' value={senha} onChangeText={setSenha}></TextInput>

<Button  onPress={login} title="Logar" /> 

<Button  onPress={navToCadastrar} title="Cadastre-se"/>
</View>
  );
  };

export default Login;