import * as React from 'react';
import { View, StyleSheet } from "react-native";
import { ListItem, Avatar, Icon, Button } from 'react-native-elements'



export default class Home extends React.Component {
  render() {



    const list = [
      {
        name: 'Carlos Gabriel',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        telefone: '81 998526345',
        email: 'carlos@gabriel.com'
      },
      {
        name: 'Eduardo Silva',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        telefone: '81 98735647',
        email: 'eduardo@silva.com'
      },
      {
        name: 'João Matheus',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        telefone: '81 999985410',
        email: 'joao@matheus.com'
      },
    ]

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
      },
    });
    return (

      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
        <View style={{ backgroundColor: "lightblue", height: '3em' }} >
          <Icon name='add' onPress={() => this.props.navigation.navigate('NovoContato')}></Icon>

        </View>


        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={{ uri: l.avatar_url }} />
              <View>
                <ListItem.Content>
                  <ListItem.Title >{l.name}</ListItem.Title>
                  <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
                  <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
                </ListItem.Content>
              </View>
            </ListItem>
          ))
        }
      </View>
    )
  }

}