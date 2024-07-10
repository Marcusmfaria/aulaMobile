import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Input, Button, Divider } from 'react-native-elements';
import { View } from "react-native";
import Contato from "./APIContato";

const NovoContato = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const navigation = useNavigation();

    const criarContato = () => {
        const contato = {
            nome,
            telefone,
            email
        };
  
        Contato.salvarContato(contato)
            .then(response => {
                console.info(response.status);
                navigation.navigate('Home');
            })
            .catch(error => {
                console.warn(error);
            });
    };

    return (
        <View>
            <Divider orientation="horizontal" />

            <Input  
                value={nome} 
                onChangeText={setNome}
                placeholder="Digite o nome do contato"
            />

            <Input  
                value={email} 
                onChangeText={setEmail}
                placeholder="Digite o email do contato"
            />

            <Input  
                value={telefone} 
                onChangeText={setTelefone}
                placeholder="Digite o telefone do contato"
            />

            <Button  
                buttonStyle={{backgroundColor:"#3C6EF4", width: 250 }}  
                title="Criar" 
                style={{marginTop: 5}}
                onPress={criarContato}
            /> 
        </View>
    );
};

export default NovoContato;