import * as React from 'react';
import { Input, Button, Text, Divider } from 'react-native-elements';
import { View } from "react-native";

export default class NovoContato extends React.Component {
    render() {
        return (
            <View>
                <Divider orientation="horizontal" />

                <Input
                    placeholder="Digite o nome do contato"
                />

                <Input
                    placeholder="Digite o email do contato"
                />

<Input
                    placeholder="Digite o telefone do contato"
                />

            </View>
        )
    }
}