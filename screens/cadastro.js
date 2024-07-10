import { Button} from "react-native-elements";
import { View } from "react-native-web";
import { Text, TextInput } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";


const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  

  const auth = getAuth();


  const salvar = () => {
   
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        SignedIn()
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "  " + errorMessage)
        // ..
      });
  };
  const navigation = useNavigation();
  
  const SignedIn = () => {
    navigation.navigate('Home');
  };

  

    return (
  <View>
  <Text>e-mail</Text>
  <TextInput  value={email}
            onChangeText={setEmail}></TextInput>
  <Text>senha</Text>
  <TextInput secureTextEntry='true'  value={senha}
            onChangeText={setSenha}></TextInput>
  <Button title="Salvar" onPress={() => salvar()}/> 
  </View>
  );
};

export default Cadastro;