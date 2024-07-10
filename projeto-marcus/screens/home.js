import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { ListItem, Icon } from 'react-native-elements';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Contato from "./APIContato";

const Home = () => {
  const [contatos, setContatos] = useState([]);
  const navigation = useNavigation();

  const listarContatos = async () => {
    try {
      const response = await Contato.getContato();
      console.log(response.status);
      setContatos(response.data);
    } catch (error) {
      console.warn(error);
    }
  };

  const deletarContato = async (id) => {
    try {
      await Contato.apagarContato(id);
      listarContatos();
    } catch (error) {
      console.warn(error);
    }
  };


  useFocusEffect(
    React.useCallback(() => {
      listarContatos();
    }, [])
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <View style={{ backgroundColor: "lightblue", height: 50, justifyContent: 'center', alignItems: 'center' }}>
        <Icon name='add' onPress={() => navigation.navigate('NovoContato')} />
      </View>

      {
        contatos.map((l, i) => (
          <ListItem key={i} bottomDivider onPress={() => navigation.navigate('AlterarContato', { id: l.id })}>
            <ListItem.Content>
              <ListItem.Title>{l.nome}</ListItem.Title>
              <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
              <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon
              name='delete'
              color='red'
              onPress={() => deletarContato(l.id)}
            />
          </ListItem>
        ))
      }
    </View>
  );
};

export default Home;