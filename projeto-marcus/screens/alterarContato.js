import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Input, Button, Divider } from 'react-native-elements';
import { View } from "react-native";
import Contato from "./APIContato";

const AlterarContato = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params;

    useEffect(() => {
        Contato.getContatoPorId(id)
            .then(response => {
                const contato = response.data;
                setNome(contato.nome);
                setEmail(contato.email);
                setTelefone(contato.telefone);
            })
            .catch(error => {
                console.warn(error);
            });
    }, [id]);

    const atualizarContato = () => {
        const contato = {
            id,
            nome,
            telefone,
            email
        };
  
        Contato.atualizarContato(contato) 
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
                title="Atualizar" 
                style={{marginTop: 5}}
                onPress={atualizarContato}
            /> 
        </View>
    );
};

export default AlterarContato;