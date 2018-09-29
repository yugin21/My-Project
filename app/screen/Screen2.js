import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header'

class B extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Header
                    textHeader='Screen B'
                />
                    <Text style={{ fontSize: 50, fontWeight: '200' }}>{this.props.navigation.state.params.detail.nama}</Text>
                    <Text style={{ fontSize: 50, fontWeight: '200' }} onPress={() => this.props.navigation.navigate('Hp')}>B</Text>
            </View>
        )
    }
}
export default B