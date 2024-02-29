import * as React from 'react';
import { View } from "react-native";
import { ListItem, Avatar } from 'react-native-elements'



export default class Home extends React.Component{
    render() {

        

        const list = [
            {
              name: 'Amy Farha',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              subtitle: 'Vice President'
            },
            {
              name: 'Chris Jackson',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              subtitle: 'Vice Chairman'
            },
            
          ]
        return (

            <View>

    
    <View style={{ flex: 1, backgroundColor: "blue" }} />
  {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <Avatar source={{uri: l.avatar_url}} />
        <View>
        <ListItem.Content onPress={() => this.props.navigation.navigate('Login')}>
          <ListItem.Title >{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        </View>
      </ListItem>
    ))
  }
</View>
        )
    }
    
    
}